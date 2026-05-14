"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useTranslation } from "react-i18next"

export default function RegisterPage() {
  const { t } = useTranslation()
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
    <div className="min-h-screen flex bg-[#F0FFF0]">
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
              <h1 className="text-lg font-bold text-[#1a365d]">{t('nav_brand')}</h1>
              <p className="text-xs text-muted-foreground">{t('ai_subtitle')}</p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-6">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#1a365d] mb-3">
                {t('register_title')}
              </h2>
              <p className="text-muted-foreground text-sm">
                {t('register_subtitle')}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1a365d]">
                  {t('full_name')}
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={t('full_name_placeholder')}
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
                  {t('email')}
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder={t('email_placeholder')}
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
                  {t('password')}
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={t('password_placeholder')}
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
                  {t('confirm_password')}
                </label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder={t('confirm_password_placeholder')}
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
                  {t('agree_to')}
                  <Link href="/terms" className="text-[#1a9d49] hover:underline">
                    {t('terms')}
                  </Link>
                  {t('and')}
                  <Link href="/privacy" className="text-[#1a9d49] hover:underline">
                    {t('privacy')}
                  </Link>
                </label>
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                disabled={!agreeToTerms}
                className="w-full h-12 bg-[#1a365d] hover:bg-[#1a365d]/90 text-white font-medium rounded-xl transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('register_btn')}
              </Button>

              {/* Login Link */}
              <div className="text-center pt-4">
                <span className="text-muted-foreground">{t('have_account')}</span>
                {" "}
                <Link
                  href="/login"
                  className="text-[#1a9d49] font-medium hover:text-[#1a9d49]/80 transition-colors"
                >
                  {t('login_link')}
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
