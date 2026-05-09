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
        <div className="relative z-10 h-full flex flex-col justify-between p-10">
          {/* Vision 2030 Logo - Small and Professional */}
          <div className="flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-white/90 text-xs mb-1">
                  <span>رؤيـــة</span>
                  <span className="tracking-wide">VISION</span>
                </div>
                <div className="flex items-center text-2xl font-bold tracking-tight">
                  <span className="text-[#1a9d49]">2</span>
                  <span className="text-white">0</span>
                  <span className="text-[#1a9d49]">3</span>
                  <span className="text-white">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
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

          {/* Feature Cards */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#1a9d49]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">فهم أعمق</h3>
                <p className="text-white/60 text-xs">حلل محتوى مستنداتك بذكاء</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#1a9d49]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">إجابات سريعة</h3>
                <p className="text-white/60 text-xs">احصل على إجابات دقيقة في ثوان</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#1a9d49]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">آمن وموثوق</h3>
                <p className="text-white/60 text-xs">حماية بياناتك بأعلى المعايير</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
