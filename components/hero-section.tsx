"use client"

import { Upload, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { SaudiSkyline } from "./saudi-skyline"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/laptop.png"
          alt="Smart PDF Dashboard Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay: Transparent on the left (photo side) fading to solid on the right (text side) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background/50 dark:from-transparent dark:via-background/50 dark:to-background/20" />
      </div>

      {/* Decorative floating badge */}


      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:ml-auto">
          {/* Content */}
          <div className="text-center lg:text-right">
            {/* Spacer to maintain layout instead of the badge */}
            <div className="h-[36px] mb-8" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 drop-shadow-sm">
              <span className="text-primary">مساعدك الذكي</span>
              <br />
              لتحليل ملفات PDF
            </h1>

            <p className="text-lg sm:text-xl text-foreground/80 dark:text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 lg:mr-0 font-medium drop-shadow-sm">
              استخدم قوة الذكاء الاصطناعي لفهم وتحليل مستنداتك بسرعة ودقة. اطرح أسئلتك واحصل على إجابات فورية من ملفاتك.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="h-14 px-10 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                <Link href="/dashboard">
                  اكتشف المميزات
                  <MessageSquare className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center bg-background/60 dark:bg-background/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-border/50 shadow-lg">
                <div className="text-3xl font-black text-primary mb-1">+50K</div>
                <div className="text-sm font-medium text-foreground/80">مستخدم نشط</div>
              </div>
              <div className="text-center bg-background/60 dark:bg-background/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-border/50 shadow-lg">
                <div className="text-3xl font-black text-secondary mb-1">+1M</div>
                <div className="text-sm font-medium text-foreground/80">ملف تم تحليله</div>
              </div>
              <div className="text-center bg-background/60 dark:bg-background/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-border/50 shadow-lg">
                <div className="text-3xl font-black text-primary mb-1">99%</div>
                <div className="text-sm font-medium text-foreground/80">دقة التحليل</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
