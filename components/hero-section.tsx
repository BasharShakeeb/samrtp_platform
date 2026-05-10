"use client"

import { Upload, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SaudiSkyline } from "./saudi-skyline"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            {/* Spacer to maintain layout instead of the badge */}
            <div className="h-[36px] mb-8" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-primary">مساعدك الذكي</span>
              <br />
              لتحليل ملفات PDF
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              استخدم قوة الذكاء الاصطناعي لفهم وتحليل مستنداتك بسرعة ودقة. اطرح أسئلتك واحصل على إجابات فورية من ملفاتك.
            </p>

            {/* Spacer to maintain layout instead of CTA Buttons */}
            <div className="h-[60px]" />

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">+50K</div>
                <div className="text-sm text-muted-foreground">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">+1M</div>
                <div className="text-sm text-muted-foreground">ملف تم تحليله</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">دقة التحليل</div>
              </div>
            </div>
          </div>

          {/* Spacer to maintain grid layout instead of Illustration */}
          <div className="relative lg:order-first hidden lg:block h-[400px]">
          </div>
        </div>

        {/* Saudi Skyline */}
        <div className="mt-16">
          <SaudiSkyline />
        </div>
      </div>
    </section>
  )
}
