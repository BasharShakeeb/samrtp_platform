"use client"

import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Upload, Cloud, FileText, Star, MessageCircle, Share2, MoreVertical,
  Clock, HelpCircle, MessageSquare, Lightbulb, ArrowLeft, CheckCircle2,
  BookOpen, Brain, Sparkles, FileSearch, X, File, Eye, ClipboardList, Trash2
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/* ─── Smart Actions Data ─── */
const smartActions = [
  { icon: FileSearch, label: "لخص الملف", description: "احصل على ملخص شامل لمحتوى ملفك", color: "#006C35", bg: "from-[#f0faf4] to-[#e6f7ed]", darkBg: "dark:from-[#006C35]/20 dark:to-[#00A651]/10", href: "/dashboard/chat" },
  { icon: MessageCircle, label: "اسأل الملف", description: "اسأل أي سؤال عن محتوى ملفاتك", color: "#0b88db", bg: "from-[#eff6ff] to-[#dbeafe]", darkBg: "dark:from-[#0b88db]/20 dark:to-[#3b82f6]/10", href: "/dashboard/chat" },
  { icon: Brain, label: "اشرح لي", description: "شرح مفصل لأي جزء من المستند", color: "#7c3aed", bg: "from-[#f5f3ff] to-[#ede9fe]", darkBg: "dark:from-[#7c3aed]/20 dark:to-[#8b5cf6]/10", href: "/dashboard/chat" },
  { icon: BookOpen, label: "أنشئ اختبار", description: "اختبر فهمك بأسئلة ذكية", color: "#ea580c", bg: "from-[#fff7ed] to-[#ffedd5]", darkBg: "dark:from-[#ea580c]/20 dark:to-[#f97316]/10", href: "/dashboard/quiz" },
]

/* ─── Quick Action Cards Data ─── */
const quickActions = [
  { icon: Share2, label: "مشاركاتي", description: "الملفات التي قمت بمشاركتها", color: "#006C35", darkColor: "#34d399", href: "/dashboard/shared" },
  { icon: FileText, label: "مستنداتي", description: "إدارة وعرض جميع ملفاتك", color: "#0b88db", darkColor: "#60a5fa", href: "/dashboard/documents" },
  { icon: Star, label: "المفضلة", description: "عرض الأسئلة والمحتوى المحفوظ", color: "#03ce1e", darkColor: "#4ade80", href: "/dashboard/favorites" },
  { icon: MessageCircle, label: "بدء محادثة جديدة", description: "اسأل أي سؤال عن محتوى ملفاتك", color: "#006C35", darkColor: "#34d399", href: "/dashboard/chat" },
]

/* ─── Recent Documents Data ─── */
const recentDocuments = [
  { name: "استراتيجية التحول الرقمي 2030.pdf", pages: 45, date: "اليوم", time: "10:30 ص", status: "analyzed" },
  { name: "اللائحة التنفيذية لنظام العمل.pdf", pages: 120, date: "أمس", time: "04:15 م", status: "analyzed" },
  { name: "تقرير اداء الربع الأول 2024.pdf", pages: 32, date: "2024/05/20", time: "09:20 ص", status: "processing" },
  { name: "السياسات والإجراءات المالية.pdf", pages: 78, date: "2024/05/18", time: "11:45 ص", status: "analyzed" },
]

/* ─── Usage Stats Data ─── */
const usageStats = [
  { icon: MessageSquare, value: 28, label: "محادثة", sublabel: "هذا الشهر", color: "#006C35", darkColor: "#34d399" },
  { icon: FileText, value: 7, label: "ملفات", sublabel: "تم رفعها", color: "#0369a1", darkColor: "#38bdf8" },
  { icon: HelpCircle, value: 156, label: "سؤال", sublabel: "هذا الشهر", color: "#7c3aed", darkColor: "#a78bfa" },
  { icon: Clock, value: 12, label: "ساعات", sublabel: "تم توفيرها", color: "#ea580c", darkColor: "#fb923c" },
]

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function DashboardPage() {
  const router = useRouter()
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "success">("idle")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragOver(true) }
  const handleDragLeave = () => { setIsDragOver(false) }

  const simulateUpload = useCallback((fileName: string, fileSize: number) => {
    setUploadedFile({ name: fileName, size: (fileSize / 1024 / 1024).toFixed(2) + " MB" })
    setUploadState("uploading")
    setUploadProgress(0)
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setTimeout(() => setUploadState("success"), 300)
      }
      setUploadProgress(Math.min(progress, 100))
    }, 200)
  }, [])

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setIsDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) simulateUpload(file.name, file.size)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) simulateUpload(file.name, file.size)
  }

  const resetUpload = () => {
    setUploadedFile(null); setUploadState("idle"); setUploadProgress(0)
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-[1600px] mx-auto space-y-6">
      {/* ═══════ Welcome Header + Upload ═══════ */}
      <motion.section variants={itemVariants} className="bg-gradient-to-l from-white via-white to-[#f0faf4] dark:from-[#1e293b] dark:via-[#1e293b] dark:to-[#0f172a] rounded-2xl p-8 shadow-sm border border-[#e8ecf1] dark:border-border relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#006C35]/8 dark:from-[#006C35]/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tl from-[#0b88db]/5 dark:from-[#0b88db]/20 to-transparent rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#00A651]/3 dark:bg-[#00A651]/10 rounded-full pointer-events-none blur-2xl" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
          {/* Upload Zone */}
          <div className="w-full lg:w-[340px] shrink-0 order-2 lg:order-2">
            <AnimatePresence mode="wait">
              {uploadState === "idle" ? (
                <motion.div key="upload-idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl py-8 px-6 cursor-pointer transition-all duration-300
                    ${isDragOver 
                      ? "border-[#006C35] dark:border-[#34d399] bg-[#006C35]/5 dark:bg-[#006C35]/20 scale-[1.03] shadow-lg shadow-[#006C35]/10" 
                      : "border-[#d1d5db] dark:border-border hover:border-[#006C35]/40 dark:hover:border-[#34d399]/40 hover:bg-[#f0faf4] dark:hover:bg-muted hover:shadow-md"}`}
                >
                  <motion.div animate={isDragOver ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-colors ${isDragOver ? "bg-[#006C35]/10 dark:bg-[#006C35]/30" : "bg-[#f0faf4] dark:bg-muted"}`}>
                    <Cloud className={`w-7 h-7 transition-colors ${isDragOver ? "text-[#006C35] dark:text-[#34d399]" : "text-[#00A651] dark:text-[#4ade80]"}`} />
                  </motion.div>
                  <p className="text-[15px] font-semibold text-[#1a202c] dark:text-foreground mb-1">رفع ملف PDF هنا</p>
                  <p className="text-[12px] text-[#9ca3af] dark:text-muted-foreground mb-4">أو اسحب وألقِ الملف</p>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-gradient-to-l from-[#006C35] to-[#00A651] text-white text-[13px] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#006C35]/25 transition-all duration-200"
                    onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click() }}>
                    اختيار ملف
                  </motion.button>
                  <p className="text-[10px] text-[#d1d5db] dark:text-muted-foreground/70 mt-3">الحد الأقصى لحجم الملف 50 ميجابايت</p>
                </motion.div>
              ) : uploadState === "uploading" ? (
                <motion.div key="upload-progress" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="border-2 border-[#006C35]/20 dark:border-[#34d399]/20 bg-[#f0faf4] dark:bg-muted rounded-2xl py-8 px-6 text-center">
                  <div className="w-12 h-12 bg-[#006C35]/10 dark:bg-[#006C35]/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <File className="w-6 h-6 text-[#006C35] dark:text-[#34d399]" />
                  </div>
                  <p className="text-[14px] font-semibold text-[#1a202c] dark:text-foreground mb-1 truncate">{uploadedFile?.name}</p>
                  <p className="text-[12px] text-[#9ca3af] dark:text-muted-foreground mb-4">{uploadedFile?.size}</p>
                  <div className="w-full h-2.5 bg-[#d1e7dd] dark:bg-muted rounded-full overflow-hidden mb-2">
                    <motion.div animate={{ width: `${uploadProgress}%` }} className="h-full bg-gradient-to-l from-[#006C35] to-[#00A651] rounded-full" transition={{ duration: 0.3 }} />
                  </div>
                  <p className="text-[12px] text-[#006C35] dark:text-[#34d399] font-medium">جارِ الرفع... {Math.round(uploadProgress)}%</p>
                </motion.div>
              ) : (
                <motion.div key="upload-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="border-2 border-[#006C35]/20 dark:border-[#34d399]/20 bg-[#f0faf4] dark:bg-muted rounded-2xl py-8 px-6 text-center relative">
                  <button onClick={resetUpload} className="absolute top-3 left-3 w-6 h-6 rounded-full bg-white dark:bg-muted shadow-sm flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors">
                    <X className="w-3.5 h-3.5 text-[#9ca3af] dark:text-foreground/90" />
                  </button>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 bg-[#006C35] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#006C35]/25">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </motion.div>
                  <p className="text-[15px] font-bold text-[#006C35] dark:text-[#34d399] mb-1">تم الرفع بنجاح!</p>
                  <p className="text-[12px] text-[#6b7280] dark:text-muted-foreground mb-4">{uploadedFile?.name}</p>
                  <div className="flex gap-2 justify-center">
                    <Link href="/dashboard/chat">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-l from-[#006C35] to-[#00A651] text-white text-[12px] font-semibold rounded-xl">
                        💬 ابدأ محادثة
                      </motion.button>
                    </Link>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={resetUpload}
                      className="px-4 py-2 bg-white dark:bg-muted border border-[#e8ecf1] dark:border-slate-600 text-[#6b7280] dark:text-foreground/90 text-[12px] font-semibold rounded-xl hover:bg-[#f4f6f9] dark:hover:bg-slate-600 transition-colors">
                      رفع ملف آخر
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <input ref={fileInputRef} type="file" accept=".pdf" className="hidden" onChange={handleFileSelect} />
          </div>

          {/* Welcome text */}
          <div className="flex-1 text-center lg:text-right order-1 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#006C35]/8 dark:bg-[#006C35]/20 text-[#006C35] dark:text-[#34d399] px-4 py-1.5 rounded-full text-[12px] font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              مدعوم بالذكاء الاصطناعي
            </motion.div>
            <h1 className="text-[28px] lg:text-[34px] font-black text-[#1a202c] dark:text-white mb-3 leading-tight">
              مرحبًا بك في{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#006C35] to-[#00A651]">مستندك الذكي</span>
            </h1>
            <p className="text-[15px] text-[#6b7280] dark:text-muted-foreground leading-relaxed max-w-lg lg:mr-0 mx-auto">
              ارفع ملفات PDF واسأل أي سؤال عن محتواها
              <br />
              واحصل على إجابات دقيقة وسريعة بالذكاء الاصطناعي
            </p>
            <div className="flex gap-3 mt-5 justify-center lg:justify-start">
              <Link href="/dashboard/chat">
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-gradient-to-l from-[#006C35] to-[#00A651] text-white text-[13px] font-semibold rounded-xl shadow-md shadow-[#006C35]/20 hover:shadow-lg hover:shadow-[#006C35]/30 transition-shadow">
                  ابدأ محادثة جديدة
                </motion.button>
              </Link>
              <Link href="/dashboard/documents">
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-white dark:bg-muted border border-[#e8ecf1] dark:border-border text-[#374151] dark:text-foreground/90 text-[13px] font-semibold rounded-xl hover:bg-[#f4f6f9] dark:hover:bg-muted transition-all">
                  عرض المستندات
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ═══════ Smart Actions ═══════ */}
      <motion.section variants={itemVariants}>
        <h2 className="text-[16px] font-bold text-[#1a202c] dark:text-foreground mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#006C35] dark:text-[#34d399]" />
          إجراءات ذكية
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {smartActions.map((action, i) => (
            <Link key={action.label} href={action.href}>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-br ${action.bg} ${action.darkBg} rounded-2xl p-4 border border-white/60 dark:border-white/5 cursor-pointer hover:shadow-lg transition-all`}>
                <div className="w-10 h-10 rounded-xl bg-white/70 dark:bg-white/10 flex items-center justify-center mb-3 shadow-sm">
                  <action.icon className="w-5 h-5 dark:opacity-80" style={{ color: action.color }} />
                </div>
                <h3 className="text-[13px] font-bold text-[#1a202c] dark:text-foreground mb-0.5">{action.label}</h3>
                <p className="text-[11px] text-[#6b7280] dark:text-muted-foreground leading-relaxed">{action.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* ═══════ Quick Actions ═══════ */}
      <motion.section variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, i) => (
          <Link key={action.label} href={action.href}>
            <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="group bg-white dark:bg-card rounded-2xl p-5 border border-[#e8ecf1] dark:border-border hover:shadow-lg hover:shadow-[#006C35]/5 dark:hover:shadow-black/50 hover:border-[#006C35]/20 dark:hover:border-slate-700 transition-all duration-300 text-center cursor-pointer">
              <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center bg-[#f0faf4] dark:bg-muted transition-transform group-hover:scale-110 duration-300">
                <action.icon className="w-5 h-5 dark:hidden" style={{ color: action.color }} />
                <action.icon className="w-5 h-5 hidden dark:block" style={{ color: action.darkColor }} />
              </div>
              <h3 className="text-[14px] font-bold text-[#1a202c] dark:text-foreground mb-1">{action.label}</h3>
              <p className="text-[11px] text-[#9ca3af] dark:text-muted-foreground leading-relaxed">{action.description}</p>
            </motion.div>
          </Link>
        ))}
      </motion.section>

      {/* ═══════ Bottom Grid ═══════ */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Recent Documents */}
        <section className="lg:col-span-3 bg-white dark:bg-card rounded-2xl border border-[#e8ecf1] dark:border-border overflow-hidden hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8ecf1] dark:border-border">
            <h2 className="text-[16px] font-bold text-[#1a202c] dark:text-foreground">المستندات الأخيرة</h2>
            <Link href="/dashboard/documents" className="text-[13px] text-[#006C35] dark:text-[#34d399] font-medium hover:underline flex items-center gap-1">
              عرض الكل <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-[#f0f2f5] dark:divide-slate-800/50">
            {recentDocuments.map((doc, index) => (
              <motion.div key={index} whileHover={{ backgroundColor: "var(--hover-bg)" }}
                className="flex items-center gap-4 px-6 py-4 cursor-pointer group transition-colors [--hover-bg:#fafbfc] dark:[--hover-bg:#33415550]">
                <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-sm transition-shadow">
                  <span className="text-[10px] font-black text-red-500 dark:text-red-400 tracking-wide">PDF</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold text-[#1a202c] dark:text-foreground truncate group-hover:text-[#006C35] dark:group-hover:text-[#34d399] transition-colors">{doc.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] text-[#9ca3af] dark:text-muted-foreground">{doc.pages} صفحة</p>
                    {doc.status === "analyzed" && (
                      <span className="text-[10px] text-[#006C35] dark:text-[#34d399] bg-[#f0faf4] dark:bg-[#006C35]/20 px-2 py-0.5 rounded-full font-medium">✓ جاهز</span>
                    )}
                    {doc.status === "processing" && (
                      <span className="text-[10px] text-[#ea580c] dark:text-orange-400 bg-[#fff7ed] dark:bg-orange-900/20 px-2 py-0.5 rounded-full font-medium animate-pulse">⏳ جارِ التحليل</span>
                    )}
                  </div>
                </div>
                <div className="text-left shrink-0">
                  <p className="text-[12px] text-[#6b7280] dark:text-muted-foreground">{doc.date}</p>
                  <p className="text-[11px] text-[#d1d5db] dark:text-muted-foreground/70">{doc.time}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted dark:hover:bg-slate-800 outline-none">
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 bg-white dark:bg-card border-border">
                      <DropdownMenuItem onClick={() => router.push("/dashboard/chat")} className="cursor-pointer dark:focus:bg-muted dark:text-slate-200">
                        <Eye className="h-4 w-4 ml-2" /> عرض المستند
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/dashboard/chat")} className="cursor-pointer dark:focus:bg-muted dark:text-slate-200">
                        <MessageSquare className="h-4 w-4 ml-2" /> اسأل الملف
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/dashboard/chat")} className="cursor-pointer dark:focus:bg-muted dark:text-slate-200">
                        <Brain className="h-4 w-4 ml-2" /> لخص الملف
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/dashboard/quiz")} className="cursor-pointer dark:focus:bg-muted dark:text-slate-200">
                        <ClipboardList className="h-4 w-4 ml-2" /> أنشئ اختبار
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-border" />
                      <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10 cursor-pointer">
                        <Trash2 className="h-4 w-4 ml-2" /> حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Usage Stats + Tip */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white dark:bg-card rounded-2xl border border-[#e8ecf1] dark:border-border p-6 hover:shadow-md transition-shadow">
            <h2 className="text-[16px] font-bold text-[#1a202c] dark:text-foreground mb-5">ملخص استخدامك</h2>
            <div className="grid grid-cols-2 gap-4">
              {usageStats.map((stat, i) => (
                <motion.div key={stat.label} whileHover={{ y: -2, scale: 1.03 }}
                  className="text-center p-4 rounded-xl bg-[#f8f9fb] dark:bg-muted border border-[#e8ecf1] dark:border-border hover:shadow-sm transition-all cursor-default">
                  <stat.icon className="w-5 h-5 mx-auto mb-2 dark:hidden" style={{ color: stat.color }} />
                  <stat.icon className="w-5 h-5 mx-auto mb-2 hidden dark:block" style={{ color: stat.darkColor }} />
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-[26px] font-black leading-none mb-1 dark:hidden" style={{ color: stat.color }}>
                    {stat.value}
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-[26px] font-black leading-none mb-1 hidden dark:block" style={{ color: stat.darkColor }}>
                    {stat.value}
                  </motion.p>
                  <p className="text-[13px] font-semibold text-[#374151] dark:text-foreground/90">{stat.label}</p>
                  <p className="text-[10px] text-[#9ca3af] dark:text-muted-foreground/70">{stat.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tip */}
          <motion.section whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-[#f0faf4] to-[#e6f7ed] dark:from-[#006C35]/10 dark:to-[#00A651]/5 rounded-2xl border border-[#d1e7dd] dark:border-[#006C35]/20 p-5 relative overflow-hidden">
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#006C35]/5 dark:bg-[#006C35]/20 rounded-full pointer-events-none" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-[#006C35] dark:text-[#34d399]" />
                  <h3 className="text-[14px] font-bold text-[#006C35] dark:text-[#34d399]">نصيحة</h3>
                </div>
                <p className="text-[13px] text-[#374151] dark:text-foreground/90 leading-relaxed">
                  يمكنك تحسين دقة الإجابات من خلال طرح أسئلة محددة والإشارة إلى أجزاء معينة في المستند.
                </p>
              </div>
              <div className="w-16 h-16 bg-white/60 dark:bg-muted/60 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-white/50 dark:border-white/5">
                <div className="relative">
                  <MessageCircle className="w-8 h-8 text-[#006C35] dark:text-[#34d399]" />
                  <div className="absolute -bottom-1 -right-1 flex gap-0.5">
                    <span className="w-1.5 h-1.5 bg-[#006C35] dark:bg-[#34d399] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#006C35] dark:bg-[#34d399] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#006C35] dark:bg-[#34d399] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </motion.div>
  )
}
