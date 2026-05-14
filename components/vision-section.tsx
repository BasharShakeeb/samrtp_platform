"use client"

import { Target, Lightbulb, TrendingUp } from "lucide-react"
import { useTranslation } from "react-i18next"

export function VisionSection() {
  const { t } = useTranslation()
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Vision 2030 Logo representation */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">2030</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">2030</h3>
                <p className="text-muted-foreground">{t('vision_subtitle')}</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t('vision_title1')}
              <br />
              <span className="text-primary">{t('vision_title2')}</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('vision_desc')}
            </p>

            {/* Vision pillars */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{t('vision_1_title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('vision_1_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{t('vision_2_title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('vision_2_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{t('vision_3_title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('vision_3_desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-border">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Content cards */}
              <div className="relative space-y-4">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">{t('vision_stat_progress')}</span>
                    <span className="text-2xl font-bold text-primary">85%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-l from-primary to-secondary rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-2xl p-5 shadow-lg border border-border text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">+200</div>
                    <div className="text-xs text-muted-foreground">{t('vision_stat_gov')}</div>
                  </div>
                  <div className="bg-card rounded-2xl p-5 shadow-lg border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-1">+500</div>
                    <div className="text-xs text-muted-foreground">{t('vision_stat_private')}</div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{t('vision_stat_transform')}</div>
                      <div className="text-xs text-muted-foreground">{t('vision_stat_engine')}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('vision_stat_proud')}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 rtl:-right-4 rtl:-left-auto bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-lg">
              {t('vision_stat_partner')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
