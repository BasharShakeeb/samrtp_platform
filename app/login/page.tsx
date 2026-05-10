"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, Globe, ChevronDown, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen flex bg-[#F0FFF0]" dir="rtl">
      {/* Right Side - Login Form (appears on right in RTL) */}
      <div className="w-full lg:w-[45%] flex flex-col min-h-screen bg-[#F0FFF0] relative z-10">
        {/* Language Selector */}
        <div className="flex justify-start p-6">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="w-5 h-5" />
            <span className="text-sm">العربية</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
                تسجيل الدخول
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                مرحبًا بك مجددًا! يرجى تسجيل الدخول لمتابعة عملك
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a365d]">
                  البريد الإلكتروني
                </label>
                <div className="relative group">
                  <Input
                    type="email"
                    placeholder="email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 pr-14 pl-15  bg-gray-50/50 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#1a9d49]/20 focus:border-[#1a9d49] focus:bg-white transition-all text-base"
                  // dir="ltr"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gray-100 group-focus-within:bg-[#1a9d49]/10 flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-[#1a9d49] transition-colors" />
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a365d]">
                  كلمة المرور
                </label>
                <div className="relative group">
                  <Input
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-14 pr-15 pl-5 bg-gray-50/50 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#1a9d49]/20 focus:border-[#1a9d49] focus:bg-white transition-all text-base"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gray-100 group-focus-within:bg-[#1a9d49]/10 flex items-center justify-center transition-colors">
                    <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-[#1a9d49] transition-colors" />
                  </div>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-start">
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#1a9d49] hover:text-[#1a9d49]/80 font-medium transition-colors"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-14 bg-[#1a365d] hover:bg-[#1a365d]/90 hover:shadow-lg hover:shadow-[#1a365d]/20 text-white font-semibold rounded-2xl transition-all text-base"
              >
                تسجيل الدخول
              </Button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-muted-foreground">
                    أو تسجيل الدخول باستخدام
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="h-14 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 23 23">
                      <path fill="#f35325" d="M1 1h10v10H1z" />
                      <path fill="#81bc06" d="M12 1h10v10H12z" />
                      <path fill="#05a6f0" d="M1 12h10v10H1z" />
                      <path fill="#ffba08" d="M12 12h10v10H12z" />
                    </svg>
                    <span className="text-[#1a365d] font-medium">Microsoft</span>
                  </div>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-14 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11" fill="#1a9d49" />
                      <path d="M12 5.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zm0 11c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" fill="white" />
                      <circle cx="12" cy="12" r="2" fill="white" />
                    </svg>
                    <span className="text-[#1a365d] font-medium">نفاذ</span>
                  </div>
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center pt-6">
                <span className="text-muted-foreground">ليس لديك حساب؟</span>
                {" "}
                <Link
                  href="/register"
                  className="text-[#1a9d49] font-semibold hover:text-[#1a9d49]/80 transition-colors"
                >
                  إنشاء حساب جديد
                </Link>
              </div>
            </form>

            {/* Security Note */}
            <div className="flex items-center justify-center gap-2 mt-10 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-[#1a9d49]" />
              <span>نحمي بياناتك وفق أعلى معايير الأمان</span>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side - Image Background (appears on left in RTL) */}
      <div className="hidden lg:block lg:w-[55%] relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#1a365d]/80 via-[#1a365d]/60 to-transparent" />

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-end p-10 pb-20">

          {/* Center Content */}
          <div className="flex flex-col items-center text-center">

            <p className="text-white/90 text-xl mb-2">مرحبًا بك في</p>
            <h1 className="text-white text-5xl font-bold mb-6">مستندك الذكي</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              منصة ذكية تتيح لك رفع ملفات PDF
              <br />
              والحصول على إجابات دقيقة وسريعة
              <br />
              باستخدام الذكاء الاصطناعي
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
