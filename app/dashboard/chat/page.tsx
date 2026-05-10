"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"
import {
  Send,
  Bot,
  User,
  FileText,
  MoreVertical,
  ChevronDown,
  Sparkles,
  Zap,
  List,
  BookOpen,
  Maximize2,
  Minimize2,
  FileSearch,
  CheckCheck,
  Search
} from "lucide-react"

/* ─── Mock Data ─── */
const mockPdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" // Just a placeholder for visual effect

type Message = {
  id: string
  role: "user" | "ai"
  content: string
  timestamp: string
  sources?: { title: string; page: parseInt }[]
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "ai",
    content: "مرحباً! أنا مساعدك الذكي. لقد قمت بتحليل مستند **«استراتيجية التحول الرقمي 2030»** وهو جاهز الآن. كيف يمكنني مساعدتك؟",
    timestamp: "10:00 ص"
  }
]

const quickPrompts = [
  { icon: List, label: "لخص الملف" },
  { icon: FileSearch, label: "ما هي أهم النقاط؟" },
  { icon: BookOpen, label: "أنشئ اختبار" },
  { icon: Zap, label: "اشرح لي باختصار" }
]

const explanationLevels = [
  { id: "basic", label: "شرح مبسط" },
  { id: "advanced", label: "شرح متعمق" },
  { id: "summary", label: "ملخص سريع" }
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState("basic")
  const [showLevels, setShowLevels] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })
    }

    setMessages(prev => [...prev, newUserMsg])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false)
      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: `بناءً على طلبك (${text})، إليك الإجابة من المستند. تم الاعتماد على مستوى الشرح المختار.`,
        timestamp: new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" }),
        sources: [
          { title: "المقدمة والتمهيد", page: 3 },
          { title: "الأهداف الاستراتيجية", page: 12 }
        ]
      }
      setMessages(prev => [...prev, newAiMsg])
    }, 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className={`h-[calc(100vh-6rem)] bg-white rounded-2xl border border-[#e8ecf1] shadow-sm overflow-hidden flex flex-col ${isFullscreen ? "fixed inset-4 z-50 h-auto" : ""}`}>
      
      {/* ═══════ Header ═══════ */}
      <header className="h-16 px-6 border-b border-[#e8ecf1] flex items-center justify-between bg-[#fcfdfd] shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
            <FileText className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h2 className="text-[14px] font-bold text-[#1a202c]">استراتيجية التحول الرقمي 2030.pdf</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="flex items-center gap-1 text-[11px] text-[#006C35] bg-[#f0faf4] px-2 py-0.5 rounded-full font-medium">
                <CheckCheck className="w-3 h-3" />
                جاهز للمحادثة
              </span>
              <span className="text-[11px] text-[#9ca3af]">45 صفحة</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Explanation Level Selector */}
          <div className="relative">
            <button 
              onClick={() => setShowLevels(!showLevels)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#e8ecf1] bg-white hover:bg-[#f4f6f9] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#006C35]" />
              <span className="text-[12px] font-semibold text-[#374151]">
                {explanationLevels.find(l => l.id === selectedLevel)?.label}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#9ca3af]" />
            </button>
            
            <AnimatePresence>
              {showLevels && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#e8ecf1] rounded-xl shadow-lg p-1.5 z-20"
                >
                  {explanationLevels.map(level => (
                    <button
                      key={level.id}
                      onClick={() => { setSelectedLevel(level.id); setShowLevels(false) }}
                      className={`w-full text-right px-3 py-2 rounded-lg text-[13px] font-medium transition-colors
                        ${selectedLevel === level.id ? "bg-[#f0faf4] text-[#006C35]" : "text-[#374151] hover:bg-[#f4f6f9]"}`}
                    >
                      {level.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#e8ecf1] hover:bg-[#f4f6f9] text-[#6b7280]">
            <Search className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#e8ecf1] hover:bg-[#f4f6f9] text-[#6b7280]"
            title={isFullscreen ? "تصغير" : "ملء الشاشة"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#e8ecf1] hover:bg-[#f4f6f9] text-[#6b7280]">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ═══════ Main Content (Resizable Pane) ═══════ */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          
          {/* Right Panel: Chat Interface (in RTL, first panel is on the right visually if dir=rtl) */}
          <ResizablePanel defaultSize={55} minSize={30} className="flex flex-col h-full relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#006C35 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 relative z-10">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {/* Avatar */}
                    <div className="shrink-0">
                      {msg.role === "ai" ? (
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A651] flex items-center justify-center shadow-sm">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-[#f4f6f9] border border-[#e8ecf1] flex items-center justify-center shadow-sm">
                          <User className="w-5 h-5 text-[#374151]" />
                        </div>
                      )}
                    </div>

                    {/* Bubble */}
                    <div className={`flex flex-col max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                      <div className="flex items-center gap-2 mb-1.5 px-1">
                        <span className="text-[12px] font-bold text-[#1a202c]">
                          {msg.role === "ai" ? "المساعد الذكي" : "أنت"}
                        </span>
                        <span className="text-[10px] text-[#9ca3af]">{msg.timestamp}</span>
                      </div>
                      
                      <div className={`p-4 rounded-2xl text-[14px] leading-relaxed shadow-sm
                        ${msg.role === "user" 
                          ? "bg-[#006C35] text-white rounded-tl-sm" 
                          : "bg-white border border-[#e8ecf1] text-[#374151] rounded-tr-sm"}`}
                      >
                        {msg.content}
                      </div>

                      {/* Sources (if any) */}
                      {msg.sources && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {msg.sources.map((source, idx) => (
                            <button key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f9fb] border border-[#e8ecf1] rounded-lg hover:bg-[#f0faf4] hover:border-[#006C35]/30 hover:text-[#006C35] transition-colors group">
                              <FileText className="w-3.5 h-3.5 text-[#9ca3af] group-hover:text-[#006C35]" />
                              <span className="text-[11px] font-semibold text-[#6b7280] group-hover:text-[#006C35]">
                                ص {source.page}: {source.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A651] flex items-center justify-center shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 px-1">
                        <span className="text-[12px] font-bold text-[#1a202c]">المساعد الذكي</span>
                      </div>
                      <div className="bg-white border border-[#e8ecf1] p-4 rounded-2xl rounded-tr-sm flex items-center gap-1.5 w-fit">
                        <span className="w-2 h-2 bg-[#006C35]/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-[#006C35]/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-[#006C35]/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-[#e8ecf1] z-20">
              {/* Quick Prompts */}
              {messages.length <= 1 && !isTyping && (
                <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
                  {quickPrompts.map((prompt, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSendMessage(prompt.label)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#f0faf4] to-white border border-[#d1e7dd] rounded-xl shrink-0 hover:shadow-md transition-shadow text-[#006C35]"
                    >
                      <prompt.icon className="w-4 h-4" />
                      <span className="text-[12px] font-bold">{prompt.label}</span>
                    </motion.button>
                  ))}
                </div>
              )}

              <div className="relative flex items-end gap-2">
                <div className="relative flex-1 bg-[#f8f9fb] border border-[#e8ecf1] rounded-2xl focus-within:border-[#006C35]/50 focus-within:bg-white focus-within:shadow-sm transition-all overflow-hidden">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="اسألني أي شيء عن المستند..."
                    className="w-full max-h-32 min-h-[56px] p-4 pr-4 pl-12 bg-transparent resize-none outline-none text-[14px] text-[#1a202c] placeholder:text-[#9ca3af] leading-relaxed"
                    rows={1}
                  />
                  <div className="absolute left-3 bottom-3 flex items-center gap-2 text-[#9ca3af]">
                    <span className="text-[10px] font-mono font-medium tracking-tighter">Enter ↵</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-14 h-[56px] shrink-0 bg-gradient-to-br from-[#006C35] to-[#00A651] rounded-2xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-[#006C35]/20 hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5 rtl:-scale-x-100" />
                </motion.button>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle className="w-2 bg-[#f4f6f9] hover:bg-[#e8ecf1] transition-colors" />

          {/* Left Panel: PDF Preview */}
          <ResizablePanel defaultSize={45} minSize={30} className="hidden lg:flex flex-col bg-[#f4f6f9]">
            <div className="flex-1 m-4 rounded-xl overflow-hidden border border-[#e8ecf1] bg-white shadow-sm relative flex flex-col">
              {/* PDF Toolbar */}
              <div className="h-10 bg-[#1a202c] flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-white/80 font-mono">1 / 45</span>
                  <div className="w-px h-4 bg-white/20" />
                  <span className="text-[11px] text-white/80">75%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
              </div>
              
              {/* PDF Viewer Placeholder (Mock) */}
              <div className="flex-1 p-8 overflow-y-auto flex justify-center bg-gray-100">
                <div className="w-full max-w-lg bg-white shadow-md p-12 text-[#1a202c] font-sans h-[1000px] border border-gray-200">
                  <h1 className="text-2xl font-bold text-center mb-10 text-[#006C35]">استراتيجية التحول الرقمي 2030</h1>
                  <h2 className="text-xl font-bold mb-4">المقدمة والتمهيد</h2>
                  <p className="text-sm leading-loose mb-6 text-justify">
                    تماشياً مع رؤية المملكة 2030، تهدف هذه الاستراتيجية إلى تسريع عملية التحول الرقمي في القطاع الحكومي والخاص.
                    تم إعداد هذه الوثيقة لتكون خارطة طريق واضحة المعالم لتحقيق الريادة الرقمية.
                  </p>
                  
                  {/* Highlight Example */}
                  <div className="bg-yellow-100 border-r-4 border-yellow-400 p-4 mb-6">
                    <p className="text-sm leading-loose">
                      <strong className="text-[#006C35]">الهدف الاستراتيجي الأول:</strong> بناء بنية تحتية رقمية قوية ومرنة قادرة على استيعاب التقنيات الناشئة.
                    </p>
                  </div>

                  <p className="text-sm leading-loose mb-6 text-justify">
                    ويتطلب تحقيق ذلك تضافر الجهود بين كافة القطاعات، وتحديث الأنظمة والتشريعات الداعمة للابتكار الرقمي.
                  </p>
                </div>
              </div>
            </div>
          </ResizablePanel>

        </ResizablePanelGroup>
      </div>
    </div>
  )
}
