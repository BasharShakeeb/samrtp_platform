"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, ChevronDown, Globe, Search, Sparkles, X, Sun, Moon, Menu, Bot } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { menuItems } from "./sidebar"

const notifications = [
  {
    id: 1,
    title: "تم تحليل مستند جديد",
    description: "تقرير أداء الربع الأول 2024.pdf جاهز للأسئلة",
    time: "منذ 5 دقائق",
    read: false,
  },
  {
    id: 2,
    title: "اختبار جديد متاح",
    description: "تم إنشاء اختبار من ملف اللائحة التنفيذية",
    time: "منذ ساعة",
    read: false,
  },
  {
    id: 3,
    title: "تلخيص مكتمل",
    description: "تم تلخيص استراتيجية التحول الرقمي 2030",
    time: "منذ 3 ساعات",
    read: true,
  },
]

export function DashboardTopbar() {
  const pathname = usePathname()
  const [showNotifications, setShowNotifications] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const notifRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure hydration matches for theme toggle
  useEffect(() => setMounted(true), [])

  // Close notification dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <header className="h-16 bg-white dark:bg-card border-b border-[#e8ecf1] dark:border-border flex items-center justify-between px-4 sm:px-6 shrink-0 transition-colors duration-300">
      {/* Right side — Mobile Menu, User info & Notifications */}
      <div className="flex items-center gap-2 sm:gap-3">
        
        {/* Mobile Menu Toggle */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl
                         hover:bg-[#f4f6f9] dark:hover:bg-muted transition-colors text-[#6b7280] dark:text-muted-foreground"
              aria-label="القائمة"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 border-l border-[#e8ecf1] dark:border-border w-[280px] bg-white dark:bg-card">
            <SheetHeader className="sr-only">
              <SheetTitle>القائمة الرئيسية</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-full">
              {/* Mobile Sidebar Header */}
              <div className="flex items-center gap-3 px-5 pt-6 pb-5 border-b border-[#e8ecf1] dark:border-border">
                <div className="w-10 h-10 bg-gradient-to-br from-[#006C35] to-[#00A651] rounded-xl flex items-center justify-center shadow-md shadow-[#006C35]/20">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-[15px] font-bold text-[#1a202c] dark:text-foreground leading-tight">مستندك الذكي</h2>
                  <p className="text-[11px] text-[#9ca3af] dark:text-muted-foreground leading-tight">مساعدك الذكي</p>
                </div>
              </div>

              {/* Mobile Sidebar Links */}
              <nav className="flex-1 py-4 px-3 overflow-y-auto">
                <ul className="space-y-1">
                  {menuItems.map((item) => {
                    const isActive =
                      item.href === "/dashboard"
                        ? pathname === "/dashboard"
                        : pathname?.startsWith(item.href)
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`
                            flex items-center gap-3 px-3 py-3 rounded-xl text-[14px]
                            transition-all duration-200 relative
                            ${isActive
                              ? "bg-gradient-to-l from-[#006C35]/12 to-[#006C35]/5 dark:from-[#006C35]/20 dark:to-transparent text-[#006C35] dark:text-[#34d399] font-semibold shadow-sm"
                              : "text-[#6b7280] dark:text-muted-foreground hover:bg-[#f4f6f9] dark:hover:bg-muted/50 hover:text-[#374151] dark:hover:text-foreground"
                            }
                          `}
                        >
                          {isActive && (
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-gradient-to-b from-[#006C35] to-[#00A651] rounded-l-full" />
                          )}
                          <item.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-[#006C35] dark:text-[#34d399]" : "text-[#9ca3af] dark:text-muted-foreground/70"}`} />
                          <span className="flex-1">{item.label}</span>
                          {item.badge && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${item.badge === "جديد" ? "bg-gradient-to-l from-[#006C35] to-[#00A651] text-white" : "bg-[#f0faf4] dark:bg-[#006C35]/20 text-[#006C35] dark:text-[#34d399] border border-[#d1e7dd] dark:border-[#006C35]/30"}`}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Notification bell */}
        <div className="relative" ref={notifRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowNotifications(!showNotifications)}
            className="w-10 h-10 flex items-center justify-center rounded-xl
                       hover:bg-[#f4f6f9] dark:hover:bg-muted transition-colors relative"
            aria-label="الإشعارات"
          >
            <Bell className="w-5 h-5 text-[#6b7280] dark:text-muted-foreground" />
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1
                           bg-[#ef4444] rounded-full text-white text-[10px] font-bold
                           flex items-center justify-center"
              >
                {unreadCount}
              </motion.span>
            )}
          </motion.button>

          {/* Notifications dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-12 right-0 sm:-right-4 w-[calc(100vw-32px)] sm:w-80 bg-white dark:bg-card rounded-2xl shadow-2xl
                           border border-[#e8ecf1] dark:border-border z-50 overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#e8ecf1] dark:border-border">
                  <p className="text-[14px] font-bold text-[#1a202c] dark:text-white">الإشعارات</p>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-muted transition-colors"
                  >
                    <X className="w-3.5 h-3.5 text-[#9ca3af]" />
                  </button>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.map((notif, i) => (
                    <motion.div
                      key={notif.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`px-4 py-3 border-b border-[#f0f2f5] dark:border-border/50 last:border-0
                                  hover:bg-[#fafbfc] dark:hover:bg-muted/50 cursor-pointer transition-colors
                                  ${!notif.read ? "bg-[#f0faf4]/50 dark:bg-[#006C35]/10" : ""}`}
                    >
                      <div className="flex items-start gap-3">
                        {!notif.read && (
                          <span className="w-2 h-2 bg-[#006C35] rounded-full mt-2 shrink-0" />
                        )}
                        <div className={!notif.read ? "" : "mr-5"}>
                          <p className="text-[13px] font-semibold text-[#1a202c] dark:text-foreground mb-0.5">
                            {notif.title}
                          </p>
                          <p className="text-[12px] text-[#6b7280] dark:text-muted-foreground leading-relaxed">
                            {notif.description}
                          </p>
                          <p className="text-[11px] text-[#9ca3af] dark:text-muted-foreground/70 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="px-4 py-2.5 border-t border-[#e8ecf1] dark:border-border bg-[#fafbfc] dark:bg-muted/20">
                  <button className="text-[12px] text-[#006C35] font-semibold hover:underline w-full text-center">
                    عرض جميع الإشعارات
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User avatar & name */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-[#f4f6f9] dark:hover:bg-muted
                      px-2 sm:px-3 py-2 rounded-xl transition-colors"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#006C35] to-[#00A651]
                          flex items-center justify-center text-white text-[13px] sm:text-[14px] font-bold
                          shadow-md shadow-[#006C35]/20 ring-2 ring-white dark:ring-card">
            أ
          </div>
          <div className="hidden sm:block">
            <p className="text-[13px] font-semibold text-[#1a202c] dark:text-foreground leading-tight">
              مرحبا أحمد
            </p>
            <p className="text-[11px] text-[#9ca3af] dark:text-muted-foreground leading-tight">
              أحمد@example.com
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-[#9ca3af] hidden sm:block" />
        </motion.div>
      </div>

      {/* Center — Search */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
        <motion.div
          animate={{
            scale: searchFocused ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="relative w-full"
        >
          <Search className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors
                             ${searchFocused ? "text-[#006C35]" : "text-[#9ca3af]"}`} />
          <input
            type="text"
            placeholder="ابحث في مستنداتك..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full h-10 pr-10 pl-4 bg-[#f4f6f9] dark:bg-muted border border-transparent
                       rounded-xl text-[13px] text-[#374151] dark:text-foreground placeholder-[#9ca3af] dark:placeholder-slate-500
                       focus:border-[#006C35]/30 focus:bg-white dark:focus:bg-[#1e293b] focus:shadow-md focus:shadow-[#006C35]/5
                       transition-all outline-none"
          />
          {searchFocused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-[#006C35]" />
              <span className="text-[10px] text-[#006C35] font-medium">AI</span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Left side — Theme Toggle + Vision 2030 logo */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Theme Toggle */}
        {mounted && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl
                       hover:bg-[#f4f6f9] dark:hover:bg-muted transition-colors text-[#6b7280] dark:text-muted-foreground"
            title="تبديل المظهر"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>
        )}

        {/* Language toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl
                     hover:bg-[#f4f6f9] dark:hover:bg-muted transition-colors text-[#6b7280] dark:text-muted-foreground"
          title="تبديل اللغة"
        >
          <Globe className="w-4 h-4" />
          <span className="text-[12px] font-medium">عربي</span>
        </motion.button>

        {/* Vision 2030 branding */}
        <div className="flex items-center gap-2">
          <div className="text-left leading-tight hidden lg:block">
            <p className="text-[9px] text-[#9ca3af] dark:text-muted-foreground/70 tracking-wide">المملكة العربية السعودية</p>
            <p className="text-[9px] text-[#9ca3af] dark:text-muted-foreground/70 tracking-wide">KINGDOM OF SAUDI ARABIA</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-[#006C35] leading-none tracking-wider">
              رؤيـــــة
            </span>
            <span className="text-[18px] sm:text-[22px] font-black text-[#006C35] leading-none tracking-tight">
              2030
            </span>
          </div>
          <span className="text-[10px] font-bold text-[#006C35] tracking-wider hidden lg:block">
            VISION
          </span>
        </div>
      </div>
    </header>
  )
}
