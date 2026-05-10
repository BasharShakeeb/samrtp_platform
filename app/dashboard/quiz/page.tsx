"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpen,
  Settings,
  BrainCircuit,
  CheckCircle2,
  XCircle,
  RefreshCw,
  ArrowRight,
  Sparkles,
  Trophy,
} from "lucide-react"

type QuizState = "setup" | "generating" | "taking" | "results"

const mockQuestions = [
  {
    id: 1,
    type: "mcq",
    question: "ما هو الهدف الرئيسي من استراتيجية التحول الرقمي 2030؟",
    options: [
      "تقليل الاعتماد على التكنولوجيا",
      "بناء بنية تحتية رقمية قوية ومرنة",
      "زيادة عدد الموظفين في القطاع الحكومي",
      "الاستغناء عن المعاملات الورقية فقط"
    ],
    correctAnswer: 1,
    explanation: "ينص المستند في صفحة 12 بوضوح أن الهدف الأساسي والأول هو بناء بنية تحتية رقمية قادرة على استيعاب التقنيات الناشئة وتكون الأساس المتين للتحول."
  },
  {
    id: 2,
    type: "tf",
    question: "التحول الرقمي يستهدف القطاع الحكومي فقط دون القطاع الخاص.",
    options: ["صح", "خطأ"],
    correctAnswer: 1,
    explanation: "في الصفحة 4، تم التأكيد على أن الاستراتيجية تتطلب تضافر الجهود بين القطاعين الحكومي والخاص لتحقيق تكامل شامل."
  },
  {
    id: 3,
    type: "mcq",
    question: "من أهم ركائز الابتكار الرقمي المذكورة في المستند:",
    options: [
      "تحديث الأنظمة والتشريعات",
      "استيراد أجهزة حاسب جديدة",
      "تقليل ساعات العمل",
      "إلغاء التدريب"
    ],
    correctAnswer: 0,
    explanation: "تم ذكر تحديث الأنظمة والتشريعات كركيزة أساسية لدعم الابتكار في الصفحة 15."
  }
]

export default function QuizPage() {
  const [state, setState] = useState<QuizState>("setup")
  const [answers, setAnswers] = useState<Record<number, number>>({})
  
  // Setup Options
  const [qType, setQType] = useState("mcq")
  const [qLevel, setQLevel] = useState("basic")
  const [qCount, setQCount] = useState(3)

  const handleGenerate = () => {
    setState("generating")
    setTimeout(() => setState("taking"), 2500)
  }

  const handleSubmit = () => {
    setState("results")
  }

  const handleRetry = () => {
    setAnswers({})
    setState("setup")
  }

  const score = Object.keys(answers).filter(
    (qId) => answers[Number(qId)] === mockQuestions.find((q) => q.id === Number(qId))?.correctAnswer
  ).length

  return (
    <div className="max-w-[800px] mx-auto min-h-[calc(100vh-8rem)] py-6 px-4 sm:px-0">
      
      <AnimatePresence mode="wait">
        
        {/* ═══════ 1. Setup State ═══════ */}
        {state === "setup" && (
          <motion.div
            key="setup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8 sm:mb-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#006C35] to-[#00A651] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#006C35]/20">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h1 className="text-[24px] sm:text-[28px] font-black text-[#1a202c] dark:text-white mb-2">توليد اختبار ذكي</h1>
              <p className="text-[13px] sm:text-[14px] text-[#6b7280] dark:text-muted-foreground">
                اختبر فهمك لمستند <strong className="dark:text-foreground/90">"استراتيجية التحول الرقمي 2030.pdf"</strong>
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-3xl p-5 sm:p-8 border border-[#e8ecf1] dark:border-border shadow-sm transition-colors">
              <div className="flex items-center gap-2 mb-6 border-b border-[#e8ecf1] dark:border-border pb-4">
                <Settings className="w-5 h-5 text-[#006C35] dark:text-[#34d399]" />
                <h2 className="text-[15px] sm:text-[16px] font-bold text-[#1a202c] dark:text-foreground">إعدادات الاختبار</h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {/* Type */}
                <div>
                  <label className="block text-[13px] font-bold text-[#374151] dark:text-foreground/90 mb-3">نوع الأسئلة</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {[{ id: "mcq", label: "خيارات متعددة" }, { id: "tf", label: "صح وخطأ" }, { id: "mixed", label: "متنوع" }].map(t => (
                      <button key={t.id} onClick={() => setQType(t.id)}
                        className={`py-3 px-3 sm:px-4 rounded-xl text-[12px] sm:text-[13px] font-semibold transition-all border
                          ${qType === t.id 
                            ? "bg-[#006C35] border-[#006C35] text-white shadow-md shadow-[#006C35]/20" 
                            : "bg-white dark:bg-muted border-[#e8ecf1] dark:border-border text-[#6b7280] dark:text-muted-foreground hover:bg-[#f8f9fb] dark:hover:bg-muted"}`}>
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Level */}
                <div>
                  <label className="block text-[13px] font-bold text-[#374151] dark:text-foreground/90 mb-3">مستوى الصعوبة</label>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[{ id: "basic", label: "أساسي" }, { id: "advanced", label: "متقدم" }].map(l => (
                      <button key={l.id} onClick={() => setQLevel(l.id)}
                        className={`py-3 px-3 sm:px-4 rounded-xl text-[12px] sm:text-[13px] font-semibold transition-all border
                          ${qLevel === l.id 
                            ? "bg-[#006C35] border-[#006C35] text-white shadow-md shadow-[#006C35]/20" 
                            : "bg-white dark:bg-muted border-[#e8ecf1] dark:border-border text-[#6b7280] dark:text-muted-foreground hover:bg-[#f8f9fb] dark:hover:bg-muted"}`}>
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Count */}
                <div>
                  <label className="block text-[13px] font-bold text-[#374151] dark:text-foreground/90 mb-3">عدد الأسئلة: <span className="text-[#006C35] dark:text-[#34d399]">{qCount}</span></label>
                  <input type="range" min="3" max="15" value={qCount} onChange={(e) => setQCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#e8ecf1] dark:bg-muted rounded-lg appearance-none cursor-pointer accent-[#006C35] dark:accent-[#34d399]" />
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleGenerate}
                className="w-full mt-8 sm:mt-10 py-4 bg-gradient-to-l from-[#006C35] to-[#00A651] text-white text-[14px] sm:text-[15px] font-bold rounded-xl shadow-lg shadow-[#006C35]/25 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                توليد الاختبار الآن
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* ═══════ 2. Generating State ═══════ */}
        {state === "generating" && (
          <motion.div
            key="generating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-[400px] text-center"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 border-4 border-dashed border-[#006C35]/30 dark:border-[#34d399]/30 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit className="w-8 h-8 sm:w-10 sm:h-10 text-[#006C35] dark:text-[#34d399] animate-pulse" />
              </div>
            </div>
            <h2 className="text-[16px] sm:text-[18px] font-bold text-[#1a202c] dark:text-white mb-2">يتم تحليل المستند وتوليد الأسئلة...</h2>
            <p className="text-[12px] sm:text-[13px] text-[#6b7280] dark:text-muted-foreground max-w-[250px] sm:max-w-none">يستخدم الذكاء الاصطناعي أفضل الممارسات لاستخراج الأسئلة</p>
          </motion.div>
        )}

        {/* ═══════ 3. Taking State ═══════ */}
        {state === "taking" && (
          <motion.div
            key="taking"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <h1 className="text-[18px] sm:text-[20px] font-black text-[#1a202c] dark:text-white">اختبار: استراتيجية التحول الرقمي</h1>
                <p className="text-[12px] sm:text-[13px] text-[#6b7280] dark:text-muted-foreground mt-1">{mockQuestions.length} أسئلة • {qLevel === "basic" ? "مستوى أساسي" : "مستوى متقدم"}</p>
              </div>
              <div className="px-3 sm:px-4 py-2 bg-[#f0faf4] dark:bg-[#006C35]/20 text-[#006C35] dark:text-[#34d399] rounded-xl font-bold text-[13px] sm:text-[14px] w-fit">
                {Object.keys(answers).length} / {mockQuestions.length} تم الإجابة
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {mockQuestions.map((q, index) => (
                <div key={q.id} className="bg-white dark:bg-card rounded-2xl p-5 sm:p-6 border border-[#e8ecf1] dark:border-border shadow-sm transition-colors">
                  <h3 className="text-[14px] sm:text-[15px] font-bold text-[#1a202c] dark:text-foreground mb-4 sm:mb-5 flex gap-3">
                    <span className="w-6 h-6 rounded-md bg-[#f4f6f9] dark:bg-muted text-[#6b7280] dark:text-muted-foreground flex items-center justify-center shrink-0 text-[12px]">{index + 1}</span>
                    <span className="leading-relaxed">{q.question}</span>
                  </h3>
                  
                  <div className="grid gap-2 sm:gap-3">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = answers[q.id] === optIndex
                      return (
                        <button key={optIndex} onClick={() => setAnswers(prev => ({ ...prev, [q.id]: optIndex }))}
                          className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl border text-right transition-all
                            ${isSelected 
                              ? "bg-[#006C35]/5 dark:bg-[#006C35]/20 border-[#006C35] dark:border-[#34d399] shadow-sm" 
                              : "bg-white dark:bg-muted border-[#e8ecf1] dark:border-border hover:bg-[#f8f9fb] dark:hover:bg-muted"}`}>
                          <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center shrink-0
                            ${isSelected ? "border-[#006C35] dark:border-[#34d399]" : "border-[#d1d5db] dark:border-slate-500"}`}>
                            {isSelected && <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#006C35] dark:bg-[#34d399]" />}
                          </div>
                          <span className={`text-[13px] sm:text-[14px] ${isSelected ? "text-[#006C35] dark:text-[#34d399] font-semibold" : "text-[#374151] dark:text-foreground/90"}`}>
                            {opt}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} 
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < mockQuestions.length}
              className="w-full py-4 mt-6 sm:mt-8 bg-gradient-to-l from-[#006C35] to-[#00A651] text-white text-[14px] sm:text-[15px] font-bold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              تصحيح الاختبار <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rtl:-scale-x-100" />
            </motion.button>
          </motion.div>
        )}

        {/* ═══════ 4. Results State ═══════ */}
        {state === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Score Card */}
            <div className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] dark:from-slate-900 dark:to-slate-800 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-xl border border-slate-700/50">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#00A651]/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/20">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A651]" />
                </div>
                <h2 className="text-[28px] sm:text-[32px] font-black text-white mb-2">{score} / {mockQuestions.length}</h2>
                <p className="text-[#9ca3af] text-[13px] sm:text-[15px] max-w-sm mx-auto">
                  {score === mockQuestions.length ? "أداء ممتاز! لقد فهمت المستند بشكل كامل." : "أداء جيد، راجع الإجابات الخاطئة لتعزيز فهمك."}
                </p>
              </div>
            </div>

            {/* Detailed Answers */}
            <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
              <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1a202c] dark:text-white">مراجعة الإجابات</h3>
              {mockQuestions.map((q, index) => {
                const isCorrect = answers[q.id] === q.correctAnswer
                const userAnswer = q.options[answers[q.id]]
                const correctAnswer = q.options[q.correctAnswer]

                return (
                  <div key={q.id} className={`bg-white dark:bg-card rounded-2xl p-4 sm:p-6 border-l-4 shadow-sm border-t border-b border-r transition-colors
                    ${isCorrect 
                      ? "border-l-[#006C35] dark:border-l-[#34d399] border-y-[#e8ecf1] border-r-[#e8ecf1] dark:border-y-slate-800 dark:border-r-slate-800" 
                      : "border-l-[#ef4444] border-y-[#e8ecf1] border-r-[#e8ecf1] dark:border-y-slate-800 dark:border-r-slate-800"}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      <div className="shrink-0 hidden sm:block mt-1">
                        {isCorrect ? <CheckCircle2 className="w-6 h-6 text-[#006C35] dark:text-[#34d399]" /> : <XCircle className="w-6 h-6 text-[#ef4444]" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2 sm:hidden mb-2">
                           {isCorrect ? <CheckCircle2 className="w-5 h-5 text-[#006C35] dark:text-[#34d399] shrink-0" /> : <XCircle className="w-5 h-5 text-[#ef4444] shrink-0" />}
                           <h4 className="text-[14px] font-bold text-[#1a202c] dark:text-foreground leading-relaxed">{q.question}</h4>
                        </div>
                        <h4 className="hidden sm:block text-[15px] font-bold text-[#1a202c] dark:text-foreground mb-4 leading-relaxed">{q.question}</h4>
                        
                        <div className="space-y-2 mb-4">
                          {!isCorrect && (
                            <div className="p-2.5 sm:p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl text-[12px] sm:text-[13px] font-medium border border-red-100 dark:border-red-900/30 flex gap-2">
                              <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                              إجابتك: {userAnswer}
                            </div>
                          )}
                          <div className="p-2.5 sm:p-3 bg-[#f0faf4] dark:bg-[#006C35]/20 text-[#006C35] dark:text-[#34d399] rounded-xl text-[12px] sm:text-[13px] font-bold border border-[#d1e7dd] dark:border-[#006C35]/30 flex gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                            الإجابة الصحيحة: {correctAnswer}
                          </div>
                        </div>

                        {/* AI Explanation */}
                        <div className="mt-4 p-3 sm:p-4 bg-[#f8f9fb] dark:bg-muted/50 rounded-xl border border-[#e8ecf1] dark:border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-[#0b88db]" />
                            <span className="text-[11px] sm:text-[12px] font-bold text-[#374151] dark:text-foreground/90">شرح الذكاء الاصطناعي</span>
                          </div>
                          <p className="text-[12px] sm:text-[13px] text-[#6b7280] dark:text-muted-foreground leading-relaxed">
                            {q.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button onClick={handleRetry} className="flex-1 py-3.5 sm:py-4 bg-white dark:bg-card border border-[#e8ecf1] dark:border-border text-[#374151] dark:text-foreground text-[13px] sm:text-[14px] font-bold rounded-xl shadow-sm hover:bg-[#f4f6f9] dark:hover:bg-muted flex items-center justify-center gap-2 transition-colors">
                <RefreshCw className="w-4 h-4" /> إعاداة الاختبار
              </button>
              <button onClick={() => window.location.href = '/dashboard'} className="flex-1 py-3.5 sm:py-4 bg-[#f4f6f9] dark:bg-muted border border-transparent text-[#6b7280] dark:text-muted-foreground text-[13px] sm:text-[14px] font-bold rounded-xl hover:bg-[#e8ecf1] dark:hover:bg-muted transition-colors">
                العودة للرئيسية
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
