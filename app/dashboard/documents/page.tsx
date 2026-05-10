"use client"

import { useState } from "react"
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
  Star
} from "lucide-react"

const mockDocuments = [
  { id: 1, name: "استراتيجية التحول الرقمي 2030.pdf", size: "2.4 MB", date: "اليوم، 10:30 ص", pages: 45, status: "analyzed", isFavorite: true },
  { id: 2, name: "اللائحة التنفيذية لنظام العمل.pdf", size: "5.1 MB", date: "أمس، 04:15 م", pages: 120, status: "analyzed", isFavorite: false },
  { id: 3, name: "تقرير أداء الربع الأول 2024.pdf", size: "1.2 MB", date: "20 مايو 2024", pages: 32, status: "processing", isFavorite: false },
  { id: 4, name: "السياسات والإجراءات المالية.pdf", size: "3.8 MB", date: "18 مايو 2024", pages: 78, status: "analyzed", isFavorite: true },
  { id: 5, name: "دليل المستخدم للنظام الداخلي.pdf", size: "10.5 MB", date: "15 مايو 2024", pages: 210, status: "error", isFavorite: false },
]

export default function DocumentsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDocs = mockDocuments.filter(doc => doc.name.includes(searchQuery))

  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#e8ecf1] shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#006C35]/10 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-[#006C35]" />
          </div>
          <div>
            <h1 className="text-[16px] font-bold text-[#1a202c]">مستنداتي</h1>
            <p className="text-[12px] text-[#6b7280]">{mockDocuments.length} ملفات مرفوعة</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
            <input
              type="text"
              placeholder="ابحث في الملفات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pr-10 pl-4 bg-[#f4f6f9] border border-[#e8ecf1] rounded-xl text-[13px] outline-none focus:border-[#006C35] focus:bg-white transition-all"
            />
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#e8ecf1] bg-white hover:bg-[#f4f6f9] text-[#374151]">
            <Filter className="w-4 h-4" />
          </button>
          <div className="h-6 w-px bg-[#e8ecf1] mx-1" />
          <div className="flex bg-[#f4f6f9] p-1 rounded-xl border border-[#e8ecf1]">
            <button onClick={() => setViewMode("grid")} className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-[#006C35]" : "text-[#9ca3af] hover:text-[#374151]"}`}>
              <Grid className="w-4 h-4" />
            </button>
            <button onClick={() => setViewMode("list")} className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${viewMode === "list" ? "bg-white shadow-sm text-[#006C35]" : "text-[#9ca3af] hover:text-[#374151]"}`}>
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
              className={`bg-white rounded-2xl border border-[#e8ecf1] hover:shadow-lg hover:border-[#006C35]/30 transition-all group overflow-hidden ${viewMode === "list" ? "flex items-center p-4 gap-4" : "p-5"}`}
            >
              {/* Icon & Menu */}
              <div className={`flex items-start justify-between ${viewMode === "list" ? "w-12 h-12" : "mb-4"}`}>
                <div className={`${viewMode === "grid" ? "w-12 h-12" : "w-full h-full"} rounded-xl bg-red-50 flex items-center justify-center shrink-0`}>
                  <span className={`font-black text-red-500 tracking-wide ${viewMode === "grid" ? "text-[12px]" : "text-[10px]"}`}>PDF</span>
                </div>
                {viewMode === "grid" && (
                  <button className="w-8 h-8 rounded-lg hover:bg-[#f4f6f9] flex items-center justify-center text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-all">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Details */}
              <div className={`${viewMode === "list" ? "flex-1 flex items-center justify-between" : ""}`}>
                <div className={viewMode === "list" ? "flex-1 min-w-0 pr-4" : ""}>
                  <h3 className={`font-bold text-[#1a202c] mb-1 truncate group-hover:text-[#006C35] transition-colors ${viewMode === "list" ? "text-[14px]" : "text-[15px]"}`} title={doc.name}>
                    {doc.name}
                  </h3>
                  <div className="flex items-center gap-3 text-[11px] text-[#6b7280]">
                    <span className="flex items-center gap-1"><Cloud className="w-3 h-3" /> {doc.size}</span>
                    <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {doc.pages} صفحة</span>
                  </div>
                </div>

                <div className={`flex items-center justify-between ${viewMode === "list" ? "gap-6" : "mt-6"}`}>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-[#9ca3af] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {doc.date}
                    </span>
                    {doc.status === "analyzed" && <span className="text-[10px] font-bold text-[#006C35] flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> تم التحليل</span>}
                    {doc.status === "processing" && <span className="text-[10px] font-bold text-[#ea580c] flex items-center gap-1 animate-pulse"><Clock className="w-3 h-3" /> قيد المعالجة</span>}
                    {doc.status === "error" && <span className="text-[10px] font-bold text-[#ef4444] flex items-center gap-1"><Trash2 className="w-3 h-3" /> فشل التحليل</span>}
                  </div>

                  {viewMode === "list" && (
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="w-8 h-8 rounded-lg hover:bg-[#f0faf4] hover:text-[#006C35] flex items-center justify-center text-[#9ca3af]"><Star className="w-4 h-4" fill={doc.isFavorite ? "currentColor" : "none"} /></button>
                      <button className="w-8 h-8 rounded-lg hover:bg-[#eff6ff] hover:text-[#0b88db] flex items-center justify-center text-[#9ca3af]"><Share2 className="w-4 h-4" /></button>
                      <button className="w-8 h-8 rounded-lg hover:bg-[#f4f6f9] flex items-center justify-center text-[#9ca3af]"><MoreVertical className="w-4 h-4" /></button>
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
