"use client"

import { useState } from "react"
import { Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { LanguageSelector } from "@/components/language-selector"

export function Navbar() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">{t('nav_brand')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav_features')}
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav_about')}
            </a>
            <a href="#vision" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav_vision')}
            </a>
          </div>

          {/* Auth Buttons & Language */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <div className="w-px h-6 bg-border mx-2"></div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/login">{t('login_btn')}</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/register">{t('nav_signup')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
              {t('nav_features')}
            </a>
            <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
              {t('nav_about')}
            </a>
            <a href="#vision" className="block text-muted-foreground hover:text-foreground transition-colors">
              {t('nav_vision')}
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <div className="flex justify-between items-center pb-2">
                <span className="text-muted-foreground text-sm">{t('language')}</span>
                <LanguageSelector />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/login">{t('login_btn')}</Link>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/register">{t('nav_signup')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
