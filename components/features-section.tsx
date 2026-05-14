"use client"

import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  FileSearch, 
  MessageSquareText 
} from "lucide-react"
import { useTranslation } from "react-i18next"

const features = [
  {
    icon: Brain,
    titleKey: "feat_1_title",
    descKey: "feat_1_desc",
    color: "primary" as const,
  },
  {
    icon: Zap,
    titleKey: "feat_2_title",
    descKey: "feat_2_desc",
    color: "secondary" as const,
  },
  {
    icon: Shield,
    titleKey: "feat_3_title",
    descKey: "feat_3_desc",
    color: "primary" as const,
  },
  {
    icon: Globe,
    titleKey: "feat_4_title",
    descKey: "feat_4_desc",
    color: "secondary" as const,
  },
  {
    icon: FileSearch,
    titleKey: "feat_5_title",
    descKey: "feat_5_desc",
    color: "primary" as const,
  },
  {
    icon: MessageSquareText,
    titleKey: "feat_6_title",
    descKey: "feat_6_desc",
    color: "secondary" as const,
  },
]

export function FeaturesSection() {
  const { t } = useTranslation()
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('feat_title1')} <span className="text-primary">{t('feat_title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('feat_subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isSecondary = feature.color === "secondary"
            
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  isSecondary 
                    ? "bg-secondary/10 text-secondary" 
                    : "bg-primary/10 text-primary"
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>

                {/* Hover gradient */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity ${
                  isSecondary ? "bg-secondary" : "bg-primary"
                }`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
