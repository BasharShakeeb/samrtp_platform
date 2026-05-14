"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Mail, Lock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen flex bg-[#F0FFF0]">
      {/* Right Side - Login Form (appears on right in RTL) */}
      <div className="w-full lg:w-[45%] flex flex-col min-h-screen bg-[#F0FFF0] relative z-10">
        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-md mt-6 lg:mt-0">
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
                {t('login_title')}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {t('login_subtitle')}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a365d]">
                  {t('email')}
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
                  {t('password')}
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
                  {t('forgot_password')}
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-14 bg-[#1a365d] hover:bg-[#1a365d]/90 hover:shadow-lg hover:shadow-[#1a365d]/20 text-white font-semibold rounded-2xl transition-all text-base"
              >
                {t('login_btn')}
              </Button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-muted-foreground">
                    {t('or_login_with')}
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => alert('سيتم تفعيل تسجيل الدخول باستخدام مايكروسوفت قريباً!')}
                  className="h-14 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 active:scale-95 active:bg-gray-100 rounded-2xl transition-all"
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
                  onClick={() => alert('سيتم تفعيل تسجيل الدخول باستخدام جوجل قريباً!')}
                  className="h-14 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 active:scale-95 active:bg-gray-100 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-[#1a365d] font-medium">Google</span>
                  </div>
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center pt-6">
                <span className="text-muted-foreground">{t('no_account')}</span>
                {" "}
                <Link
                  href="/register"
                  className="text-[#1a9d49] font-semibold hover:text-[#1a9d49]/80 transition-colors"
                >
                  {t('create_account')}
                </Link>
              </div>
            </form>

            {/* Security Note */}
            <div className="flex items-center justify-center gap-2 mt-10 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-[#1a9d49]" />
              <span>{t('security_note')}</span>
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

            <p className="text-white/90 text-xl mb-2">{t('hero_welcome')}</p>
            <h1 className="text-white text-5xl font-bold mb-6">{t('hero_title')}</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-md whitespace-pre-line">
              {t('hero_desc')}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
