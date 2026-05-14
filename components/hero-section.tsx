"use client"

import { Upload, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { SaudiSkyline } from "./saudi-skyline"

export function HeroSection() {
  const { t } = useTranslation()
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Desktop Background Image (Hidden on Mobile) */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/laptop.png"
          alt="Smart PDF Dashboard Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background/80 dark:from-transparent dark:via-background/50 dark:to-background/90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Mobile Image (Visible only on mobile/tablet) */}
          <div className="w-full lg:hidden relative h-[250px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl mt-4">
            <Image
              src="/laptop.png"
              alt="Smart PDF Dashboard Background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-[55%] lg:ml-auto text-center lg:text-right">
            <div className="h-[20px] lg:h-[36px] mb-4 lg:mb-8" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 drop-shadow-sm">
              <span className="text-primary">{t('landing_title_highlight')}</span>
              <br />
              {t('landing_title_main')}
            </h1>

            <p className="text-lg sm:text-xl text-foreground/80 dark:text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 lg:mr-0 font-medium drop-shadow-sm">
              {t('landing_subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                <Link href="/dashboard">
                  {t('landing_cta')}
                  <MessageSquare className="mx-2 h-5 w-5 rtl:ml-2 rtl:mr-0 ltr:mr-2 ltr:ml-0" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center bg-background/80 dark:bg-background/60 backdrop-blur-md px-4 sm:px-6 py-4 rounded-2xl border border-border/50 shadow-lg flex-1 sm:flex-none min-w-[120px]">
                <div className="text-2xl sm:text-3xl font-black text-primary mb-1">+50K</div>
                <div className="text-xs sm:text-sm font-medium text-foreground/80">{t('stat_users')}</div>
              </div>
              <div className="text-center bg-background/80 dark:bg-background/60 backdrop-blur-md px-4 sm:px-6 py-4 rounded-2xl border border-border/50 shadow-lg flex-1 sm:flex-none min-w-[120px]">
                <div className="text-2xl sm:text-3xl font-black text-secondary mb-1">+1M</div>
                <div className="text-xs sm:text-sm font-medium text-foreground/80">{t('stat_files')}</div>
              </div>
              <div className="text-center bg-background/80 dark:bg-background/60 backdrop-blur-md px-4 sm:px-6 py-4 rounded-2xl border border-border/50 shadow-lg flex-1 sm:flex-none min-w-[120px]">
                <div className="text-2xl sm:text-3xl font-black text-primary mb-1">99%</div>
                <div className="text-xs sm:text-sm font-medium text-foreground/80">{t('stat_accuracy')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
