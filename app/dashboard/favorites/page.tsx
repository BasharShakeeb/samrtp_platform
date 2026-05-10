"use client"

import { motion } from "framer-motion"
import { Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FavoritesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="relative w-32 h-32 mx-auto mb-8">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full blur-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-xl shadow-yellow-100 flex items-center justify-center rotate-12">
              <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </div>

        <h1 className="text-[24px] font-black text-[#1a202c] mb-3">
          لا توجد عناصر مفضلة بعد
        </h1>
        <p className="text-[14px] text-[#6b7280] leading-relaxed mb-8">
          يمكنك إضافة المستندات، المحادثات المهمة، أو الاختبارات إلى المفضلة للوصول إليها بسرعة لاحقاً.
        </p>

        <Link href="/dashboard">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-[#006C35] to-[#00A651] text-white text-[14px] font-bold rounded-xl shadow-lg shadow-[#006C35]/20"
          >
            استكشف مستنداتك <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}
