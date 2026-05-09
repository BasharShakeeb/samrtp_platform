"use client"

import { Upload, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
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
            {/* Vision 2030 Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">مستوحى من رؤية السعودية 2030</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-primary">مساعدك الذكي</span>
              <br />
              لتحليل ملفات PDF
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              استخدم قوة الذكاء الاصطناعي لفهم وتحليل مستنداتك بسرعة ودقة. اطرح أسئلتك واحصل على إجابات فورية من ملفاتك.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <Upload className="w-5 h-5" />
                رفع ملف PDF
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 px-8 py-6 text-lg rounded-xl border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                اسأل الذكاء الاصطناعي
              </Button>
            </div>

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

          {/* Illustration */}
          <div className="relative lg:order-first">
            <div className="relative">
              {/* Main illustration card */}
              <div className="relative bg-card rounded-3xl shadow-2xl p-8 border border-border">
                {/* PDF Preview mockup */}
                <div className="bg-muted rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">تقرير_المشروع.pdf</div>
                      <div className="text-xs text-muted-foreground">2.4 ميجابايت</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-border rounded-full w-full" />
                    <div className="h-2 bg-border rounded-full w-4/5" />
                    <div className="h-2 bg-border rounded-full w-3/5" />
                  </div>
                </div>

                {/* AI Chat mockup */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <span className="text-xs font-medium text-muted-foreground">أنت</span>
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tr-none px-4 py-3">
                      <p className="text-sm text-foreground">ما هي أهم النقاط في هذا التقرير؟</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-primary/10 rounded-2xl rounded-tr-none px-4 py-3">
                      <p className="text-sm text-foreground">بناءً على تحليلي للتقرير، أهم النقاط هي...</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                مدعوم بالذكاء الاصطناعي
              </div>
            </div>
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
