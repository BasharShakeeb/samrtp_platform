"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  FileText,
  MessageCircle,
  Star,
  Share2,
  HelpCircle,
  Settings,
  LogOut,
  Crown,
  ChevronRight,
  ChevronLeft,
  Bot,
  BookOpen,
  Sparkles,
} from "lucide-react"

export const menuItems = [
  { label: "الرئيسية", icon: Home, href: "/dashboard", badge: null },
  { label: "مستنداتي", icon: FileText, href: "/dashboard/documents", badge: "7" },
  { label: "المحادثات", icon: MessageCircle, href: "/dashboard/chat", badge: "3" },
  { label: "الاختبارات", icon: BookOpen, href: "/dashboard/quiz", badge: "جديد" },
  { label: "المفضلة", icon: Star, href: "/dashboard/favorites", badge: null },
  { label: "مشاركاتي", icon: Share2, href: "/dashboard/shared", badge: null },
  { label: "سجل الأسئلة", icon: HelpCircle, href: "/dashboard/questions", badge: "156" },
  { label: "الإعدادات", icon: Settings, href: "/dashboard/settings", badge: null },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <motion.aside
      animate={{ width: collapsed ? 78 : 260 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col bg-white dark:bg-card border-l border-[#e8ecf1] dark:border-border shrink-0 transition-colors duration-300"
    >
      {/* Collapse toggle */}
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -left-3 top-20 z-10 w-6 h-6 bg-white dark:bg-muted border border-[#e0e4ea] dark:border-border
                   rounded-full flex items-center justify-center shadow-sm
                   hover:bg-[#f0f2f5] dark:hover:bg-muted hover:border-[#006C35]/30 transition-colors"
        aria-label={collapsed ? "توسيع القائمة" : "طي القائمة"}
      >
        {collapsed ? (
          <ChevronRight className="w-3.5 h-3.5 text-[#6b7280] dark:text-muted-foreground" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5 text-[#6b7280] dark:text-muted-foreground" />
        )}
      </motion.button>

      {/* Logo Section */}
      <div className="flex items-center gap-3 px-5 pt-6 pb-5 border-b border-[#e8ecf1] dark:border-border transition-colors duration-300">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 bg-gradient-to-br from-[#006C35] to-[#00A651] rounded-xl
                      flex items-center justify-center shrink-0 shadow-md shadow-[#006C35]/20"
        >
          <Bot className="w-5 h-5 text-white" />
        </motion.div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <h2 className="text-[15px] font-bold text-[#1a202c] dark:text-foreground leading-tight whitespace-nowrap">
                مستندك الذكي
              </h2>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#00A651]" />
                <p className="text-[11px] text-[#9ca3af] dark:text-muted-foreground leading-tight whitespace-nowrap">
                  مساعدك الذكي بالذكاء الاصطناعي
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname?.startsWith(item.href)
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px]
                    transition-all duration-200 group relative
                    ${
                      isActive
                        ? "bg-gradient-to-l from-[#006C35]/12 to-[#006C35]/5 dark:from-[#006C35]/20 dark:to-transparent text-[#006C35] dark:text-[#34d399] font-semibold shadow-sm"
                        : "text-[#6b7280] dark:text-muted-foreground hover:bg-[#f4f6f9] dark:hover:bg-muted/50 hover:text-[#374151] dark:hover:text-foreground"
                    }
                  `}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-gradient-to-b from-[#006C35] to-[#00A651] rounded-l-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon with hover effect */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <item.icon
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        isActive
                          ? "text-[#006C35] dark:text-[#34d399]"
                          : "text-[#9ca3af] dark:text-muted-foreground/70 group-hover:text-[#6b7280] dark:group-hover:text-slate-300"
                      }`}
                    />
                  </motion.div>

                  {/* Label */}
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="flex-1 whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Badge */}
                  {item.badge && !collapsed && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`
                        text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap
                        ${
                          item.badge === "جديد"
                            ? "bg-gradient-to-l from-[#006C35] to-[#00A651] text-white"
                            : "bg-[#f0faf4] dark:bg-[#006C35]/20 text-[#006C35] dark:text-[#34d399] border border-[#d1e7dd] dark:border-[#006C35]/30"
                        }
                      `}
                    >
                      {item.badge}
                    </motion.span>
                  )}

                  {/* Collapsed badge dot */}
                  {item.badge && collapsed && (
                    <span className="absolute top-1 left-1 w-2 h-2 bg-[#006C35] dark:bg-[#34d399] rounded-full" />
                  )}
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>

      {/* Plan Section */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mx-3 mb-3 p-4 bg-gradient-to-br from-[#f0faf4] to-[#e6f7ed] dark:from-[#006C35]/10 dark:to-[#00A651]/5 rounded-xl border border-[#d1e7dd] dark:border-[#006C35]/20 relative overflow-hidden transition-colors duration-300"
          >
            {/* Decorative circles */}
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#006C35]/5 dark:bg-[#006C35]/20 rounded-full" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#00A651]/5 dark:bg-[#00A651]/20 rounded-full" />

            <p className="text-[11px] text-[#6b7280] dark:text-muted-foreground mb-1 relative z-10">الخطة الحالية</p>
            <p className="text-[14px] font-bold text-[#1a202c] dark:text-foreground mb-2 relative z-10">الخطة المجانية</p>

            {/* Usage bar */}
            <div className="w-full h-2 bg-[#d1e7dd] dark:bg-muted rounded-full mb-1.5 overflow-hidden relative z-10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-l from-[#006C35] to-[#00A651] rounded-full"
              />
            </div>
            <p className="text-[11px] text-[#9ca3af] dark:text-muted-foreground mb-3 relative z-10">2 / 5 ملفات</p>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3
                         bg-gradient-to-l from-[#006C35] to-[#00A651] text-white
                         text-[13px] font-semibold rounded-xl relative z-10
                         hover:shadow-lg hover:shadow-[#006C35]/25
                         transition-all duration-200"
            >
              <Crown className="w-4 h-4" />
              ترقية الخطة
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {collapsed && (
        <div className="mx-auto mb-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gradient-to-br from-[#006C35] to-[#00A651]
                       rounded-xl flex items-center justify-center
                       hover:shadow-lg hover:shadow-[#006C35]/25 transition-all"
            title="ترقية الخطة"
          >
            <Crown className="w-4 h-4 text-white" />
          </motion.button>
        </div>
      )}

      {/* Logout */}
      <div className="border-t border-[#e8ecf1] dark:border-border px-3 py-3 transition-colors duration-300">
        <motion.button
          whileHover={{ x: -4 }}
          onClick={() => window.location.href = "/"}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px]
                     text-[#ef4444] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                تسجيل الخروج
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.aside>
  )
}
