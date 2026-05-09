"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log({ fullName, email, password, confirmPassword, agreeToTerms })
  }

  return (
    <div className="min-h-screen flex bg-[#F0FFF0]" dir="rtl">
      {/* Left Side - Registration Form */}
      <div className="w-full lg:w-[45%] flex flex-col min-h-screen bg-[#F0FFF0]">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a9d49] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#1a365d]">مستندك الذكي</h1>
              <p className="text-xs text-muted-foreground">للذكاء الاصطناعي</p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#1a365d] mb-3">
                إنشاء حساب جديد
              </h2>
              <p className="text-muted-foreground text-sm">
                انضم إلينا وابدأ رحلتك الذكية مع مستنداتك
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a365d]">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="h-12 pr-12 pl-4 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a365d]">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 pr-12 pl-4 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  // dir="ltr"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a365d]">
                  كلمة المرور
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-12 pl-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a365d]">
                  تأكيد كلمة المرور
                </label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="أعد إدخال كلمة المرور"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12 pr-12 pl-12 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-3">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                  className="border-gray-300 data-[state=checked]:bg-[#1a365d] data-[state=checked]:border-[#1a365d]"
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  أوافق على{" "}
                  <Link href="/terms" className="text-[#1a9d49] hover:underline">
                    الشروط والأحكام
                  </Link>
                  {" "}و{" "}
                  <Link href="/privacy" className="text-[#1a9d49] hover:underline">
                    سياسة الخصوصية
                  </Link>
                </label>
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                disabled={!agreeToTerms}
                className="w-full h-12 bg-[#1a365d] hover:bg-[#1a365d]/90 text-white font-medium rounded-xl transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                إنشاء حساب
              </Button>

              {/* Login Link */}
              <div className="text-center pt-4">
                <span className="text-muted-foreground">لديك حساب بالفعل؟</span>
                {" "}
                <Link
                  href="/login"
                  className="text-[#1a9d49] font-medium hover:text-[#1a9d49]/80 transition-colors"
                >
                  تسجيل الدخول
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Image Background */}
      <div className="hidden lg:block lg:w-[55%] relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/register1.png')`,
          }}
        />

        {/* Gradient Overlay - Reduced opacity for clarity */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#1a365d]/40 via-[#1a365d]/20 to-transparent" />

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between p-10">
          {/* Vision 2030 Logo */}
          <div className="flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex flex-col items-center">


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
          {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#1a9d49]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">فهم أعمق</h3>
                <p className="text-white/60 text-xs">حلل مستنداتك بذكاء</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#1a9d49]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">إجابات سريعة</h3>
                <p className="text-white/60 text-xs">نتائج فورية</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#1a9d49]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">آمن وموثوق</h3>
                <p className="text-white/60 text-xs">أعلى معايير الأمان</p>
              </div>
            </div>
          </div>  */}
        </div>
      </div>
    </div>
  )
}
