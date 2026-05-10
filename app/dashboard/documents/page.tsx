"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileText, 
  Search, 
  Filter, 
  MoreVertical, 
  Grid, 
  List as ListIcon,
  Cloud,
  Clock,
  CheckCircle2,
  Trash2,
  Share2,
  Star,
  Eye,
  MessageSquare,
  Brain,
  ClipboardList
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mockDocuments = [
  { id: 1, name: "استراتيجية التحول الرقمي 2030.pdf", size: "2.4 MB", date: "اليوم، 10:30 ص", pages: 45, status: "analyzed", isFavorite: true },
  { id: 2, name: "اللائحة التنفيذية لنظام العمل.pdf", size: "5.1 MB", date: "أمس، 04:15 م", pages: 120, status: "analyzed", isFavorite: false },
  { id: 3, name: "تقرير أداء الربع الأول 2024.pdf", size: "1.2 MB", date: "20 مايو 2024", pages: 32, status: "processing", isFavorite: false },
  { id: 4, name: "السياسات والإجراءات المالية.pdf", size: "3.8 MB", date: "18 مايو 2024", pages: 78, status: "analyzed", isFavorite: true },
  { id: 5, name: "دليل المستخدم للنظام الداخلي.pdf", size: "10.5 MB", date: "15 مايو 2024", pages: 210, status: "error", isFavorite: false },
]

export default function DocumentsPage() {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDocs = mockDocuments.filter(doc => doc.name.includes(searchQuery))

  // Component for the Dropdown Menu to avoid repetition
  const DocumentMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-8 h-8 rounded-lg hover:bg-muted dark:hover:bg-slate-800 flex items-center justify-center text-muted-foreground outline-none">
          <MoreVertical className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-card border-border">
        <DropdownMenuItem onClick={() => router.push("/dashboard/chat")} className="cursor-pointer dark:focus:bg-muted dark:text-slate-200">
          <Eye className="h-4 w-4 ml-2" />
          عرض المستند
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => router.push("/dashboard/chat")} className="cursor-pointer dark:focus:bg-muted dark:text-slate-200">
          <MessageSquare className="h-4 w-4 ml-2" />
          اسأل الملف
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => router.push("/dashboard/chat")} className="cursor-pointer dark:focus:bg-muted dark:text-slate-200">
          <Brain className="h-4 w-4 ml-2" />
          لخص الملف
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => router.push("/dashboard/quiz")} className="cursor-pointer dark:focus:bg-muted dark:text-slate-200">
          <ClipboardList className="h-4 w-4 ml-2" />
          أنشئ اختبار
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-border" />
        
        <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10 cursor-pointer">
          <Trash2 className="h-4 w-4 ml-2" />
          حذف
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <div className="w-full max-w-[1600px] mx-auto space-y-6">
      
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-card p-4 rounded-2xl border border-border shadow-sm transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-[16px] font-bold text-foreground">مستنداتي</h1>
            <p className="text-[12px] text-muted-foreground">{mockDocuments.length} ملفات مرفوعة</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="ابحث في الملفات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pr-10 pl-4 bg-muted border border-border rounded-xl text-[13px] text-foreground outline-none focus:border-primary focus:bg-background dark:focus:bg-muted transition-all"
            />
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-border bg-white dark:bg-card hover:bg-muted text-foreground transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <div className="h-6 w-px bg-border mx-1" />
          <div className="flex bg-muted p-1 rounded-xl border border-border">
            <button onClick={() => setViewMode("grid")} className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${viewMode === "grid" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              <Grid className="w-4 h-4" />
            </button>
            <button onClick={() => setViewMode("list")} className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${viewMode === "list" ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              <ListIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Documents Grid / List */}
      <motion.div layout className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : "flex flex-col gap-3"}>
        <AnimatePresence>
          {filteredDocs.map((doc, i) => (
            <motion.div
              key={doc.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className={`bg-white dark:bg-card rounded-2xl border border-border hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/30 transition-all group overflow-hidden ${viewMode === "list" ? "flex items-center p-4 gap-4" : "p-5"}`}
            >
              {/* Icon & Menu */}
              <div className={`flex items-start justify-between ${viewMode === "list" ? "w-12 h-12" : "mb-4"}`}>
                <div className={`${viewMode === "grid" ? "w-12 h-12" : "w-full h-full"} rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0`}>
                  <span className={`font-black text-red-500 tracking-wide ${viewMode === "grid" ? "text-[12px]" : "text-[10px]"}`}>PDF</span>
                </div>
                {viewMode === "grid" && (
                  <div className="opacity-0 group-hover:opacity-100 transition-all">
                    <DocumentMenu />
                  </div>
                )}
              </div>

              {/* Details */}
              <div className={`${viewMode === "list" ? "flex-1 flex items-center justify-between" : ""}`}>
                <div className={viewMode === "list" ? "flex-1 min-w-0 pr-4" : ""}>
                  <h3 className={`font-bold text-foreground mb-1 truncate group-hover:text-primary transition-colors ${viewMode === "list" ? "text-[14px]" : "text-[15px]"}`} title={doc.name}>
                    {doc.name}
                  </h3>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Cloud className="w-3 h-3" /> {doc.size}</span>
                    <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {doc.pages} صفحة</span>
                  </div>
                </div>

                <div className={`flex items-center justify-between ${viewMode === "list" ? "gap-6" : "mt-6"}`}>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {doc.date}
                    </span>
                    {doc.status === "analyzed" && <span className="text-[10px] font-bold text-primary flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> تم التحليل</span>}
                    {doc.status === "processing" && <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1 animate-pulse"><Clock className="w-3 h-3" /> قيد المعالجة</span>}
                    {doc.status === "error" && <span className="text-[10px] font-bold text-destructive flex items-center gap-1"><Trash2 className="w-3 h-3" /> فشل التحليل</span>}
                  </div>

                  {viewMode === "list" && (
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground"><Star className="w-4 h-4" fill={doc.isFavorite ? "currentColor" : "none"} /></button>
                      <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground"><Share2 className="w-4 h-4" /></button>
                      <DocumentMenu />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
