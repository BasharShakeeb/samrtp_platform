import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  FileSearch, 
  MessageSquareText 
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "ذكاء اصطناعي متقدم",
    description: "نستخدم أحدث تقنيات الذكاء الاصطناعي لفهم وتحليل مستنداتك بدقة عالية",
    color: "primary" as const,
  },
  {
    icon: Zap,
    title: "سرعة فائقة",
    description: "احصل على إجابات فورية لأسئلتك في ثوانٍ معدودة",
    color: "secondary" as const,
  },
  {
    icon: Shield,
    title: "أمان وخصوصية",
    description: "ملفاتك محمية بأعلى معايير الأمان والتشفير",
    color: "primary" as const,
  },
  {
    icon: Globe,
    title: "دعم اللغة العربية",
    description: "مصمم خصيصاً لفهم ومعالجة المحتوى العربي بكفاءة",
    color: "secondary" as const,
  },
  {
    icon: FileSearch,
    title: "تحليل شامل",
    description: "استخراج المعلومات والبيانات من أي نوع من ملفات PDF",
    color: "primary" as const,
  },
  {
    icon: MessageSquareText,
    title: "محادثة طبيعية",
    description: "اطرح أسئلتك بلغتك الطبيعية واحصل على إجابات واضحة",
    color: "secondary" as const,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            مميزات <span className="text-primary">استثنائية</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نوفر لك أدوات متقدمة تساعدك على الاستفادة القصوى من مستنداتك
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
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
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
