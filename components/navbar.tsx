"use client"

import { useState } from "react"
import { Menu, X, FileText, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { LanguageSelector } from "@/components/language-selector"

export function Navbar() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#006C35] to-[#1a9d49] flex items-center justify-center shadow-lg shadow-[#006C35]/20 group-hover:shadow-[#006C35]/40 group-hover:scale-105 transition-all duration-300">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1a365d] to-[#006C35] dark:from-white dark:to-gray-300">
              {t('nav_brand')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#006C35] dark:hover:text-[#34d399] transition-colors">
              {t('nav_features')}
            </a>
            <a href="#about" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#006C35] dark:hover:text-[#34d399] transition-colors">
              {t('nav_about')}
            </a>
            <a href="#vision" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#006C35] dark:hover:text-[#34d399] transition-colors">
              {t('nav_vision')}
            </a>
          </div>

          {/* Auth Buttons & Language */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hover:bg-gray-100 dark:hover:bg-white/5 rounded-full px-2 py-1 transition-colors">
              <LanguageSelector />
            </div>
            <div className="w-px h-8 bg-gray-200 dark:bg-white/10 mx-1"></div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="rounded-full border-gray-300 dark:border-white/20 hover:border-[#006C35] dark:hover:border-[#34d399] hover:bg-[#006C35]/5 dark:hover:bg-[#34d399]/10 text-[#1a365d] dark:text-white font-semibold px-6 h-11 transition-all duration-300" 
                asChild
              >
                <Link href="/login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  {t('login_btn')}
                </Link>
              </Button>
              
              <Button 
                className="rounded-full bg-gradient-to-r from-[#006C35] to-[#1a9d49] hover:from-[#005a2c] hover:to-[#168a3e] text-white font-semibold px-6 h-11 shadow-lg shadow-[#006C35]/20 hover:shadow-xl hover:shadow-[#006C35]/40 hover:-translate-y-0.5 transition-all duration-300 border-0" 
                asChild
              >
                <Link href="/register" className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  {t('nav_signup')}
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#1a365d] dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a365d] dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[400px] opacity-100 border-b border-gray-200/50 dark:border-white/10" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="bg-white dark:bg-background px-4 py-6 space-y-5">
          <div className="flex flex-col gap-4 px-2">
            <a href="#features" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-[#006C35] transition-colors">
              {t('nav_features')}
            </a>
            <a href="#about" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-[#006C35] transition-colors">
              {t('nav_about')}
            </a>
            <a href="#vision" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-[#006C35] transition-colors">
              {t('nav_vision')}
            </a>
          </div>
          
          <div className="flex flex-col gap-4 pt-5 border-t border-gray-100 dark:border-white/10">
            <div className="flex justify-between items-center px-2 pb-2">
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{t('language')}</span>
              <LanguageSelector />
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                variant="outline" 
                className="w-full rounded-2xl border-gray-300 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 text-[#1a365d] dark:text-white font-semibold h-12 flex items-center justify-center gap-2" 
                asChild
              >
                <Link href="/login">
                  <LogIn className="w-5 h-5" />
                  {t('login_btn')}
                </Link>
              </Button>
              <Button 
                className="w-full rounded-2xl bg-gradient-to-r from-[#006C35] to-[#1a9d49] text-white font-semibold h-12 shadow-lg shadow-[#006C35]/20 flex items-center justify-center gap-2" 
                asChild
              >
                <Link href="/register">
                  <UserPlus className="w-5 h-5" />
                  {t('nav_signup')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
