import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
  ar: {
    translation: {
      "language": "اللغة",
      "arabic": "العربية",
      "english": "الإنجليزية",
      "login_title": "تسجيل الدخول",
      "login_subtitle": "مرحبًا بك مجددًا! يرجى تسجيل الدخول لمتابعة عملك",
      "email": "البريد الإلكتروني",
      "password": "كلمة المرور",
      "forgot_password": "نسيت كلمة المرور؟",
      "login_btn": "تسجيل الدخول",
      "or_login_with": "أو تسجيل الدخول باستخدام",
      "no_account": "ليس لديك حساب؟",
      "create_account": "إنشاء حساب جديد",
      "security_note": "نحمي بياناتك وفق أعلى معايير الأمان",
      "hero_welcome": "مرحبًا بك في",
      "hero_title": "مستندك الذكي",
      "hero_desc": "منصة ذكية تتيح لك رفع ملفات PDF\nوالحصول على إجابات دقيقة وسريعة\nباستخدام الذكاء الاصطناعي",
      "nav_brand": "مساعد PDF الذكي",
      "nav_features": "المميزات",
      "nav_about": "عن المنتج",
      "nav_vision": "رؤية 2030",
      "nav_signup": "إنشاء حساب",
      "landing_title_highlight": "مساعدك الذكي",
      "landing_title_main": "لتحليل ملفات PDF",
      "landing_subtitle": "استخدم قوة الذكاء الاصطناعي لفهم وتحليل مستنداتك بسرعة ودقة. اطرح أسئلتك واحصل على إجابات فورية من ملفاتك.",
      "landing_cta": "اكتشف المميزات",
      "stat_users": "مستخدم نشط",
      "stat_files": "ملف تم تحليله",
      "stat_accuracy": "دقة التحليل",
      "email_placeholder": "أدخل بريدك الإلكتروني",
      "password_placeholder": "أدخل كلمة المرور",
      "ai_subtitle": "للذكاء الاصطناعي",
      "register_title": "إنشاء حساب جديد",
      "register_subtitle": "انضم إلينا وابدأ رحلتك الذكية مع مستنداتك",
      "full_name": "الاسم الكامل",
      "full_name_placeholder": "أدخل اسمك الكامل",
      "confirm_password": "تأكيد كلمة المرور",
      "confirm_password_placeholder": "أعد إدخال كلمة المرور",
      "agree_to": "أوافق على ",
      "terms": "الشروط والأحكام",
      "and": " و ",
      "privacy": "سياسة الخصوصية",
      "register_btn": "إنشاء حساب",
      "have_account": "لديك حساب بالفعل؟",
      "login_link": "تسجيل الدخول"
    }
  },
  en: {
    translation: {
      "language": "Language",
      "arabic": "Arabic",
      "english": "English",
      "login_title": "Login",
      "login_subtitle": "Welcome back! Please login to continue your work",
      "email": "Email Address",
      "password": "Password",
      "forgot_password": "Forgot Password?",
      "login_btn": "Login",
      "or_login_with": "Or login with",
      "no_account": "Don't have an account?",
      "create_account": "Create a new account",
      "security_note": "We protect your data with the highest security standards",
      "hero_welcome": "Welcome to",
      "hero_title": "Smart Document",
      "hero_desc": "A smart platform that allows you to upload PDF files\nand get fast and accurate answers\nusing Artificial Intelligence",
      "nav_brand": "Smart PDF Assistant",
      "nav_features": "Features",
      "nav_about": "About",
      "nav_vision": "Vision 2030",
      "nav_signup": "Sign Up",
      "landing_title_highlight": "Your Smart Assistant",
      "landing_title_main": "for Analyzing PDFs",
      "landing_subtitle": "Use the power of AI to understand and analyze your documents quickly and accurately. Ask questions and get instant answers from your files.",
      "landing_cta": "Discover Features",
      "stat_users": "Active Users",
      "stat_files": "Analyzed Files",
      "stat_accuracy": "Analysis Accuracy",
      "email_placeholder": "Enter your email",
      "password_placeholder": "Enter your password",
      "ai_subtitle": "for Artificial Intelligence",
      "register_title": "Create a New Account",
      "register_subtitle": "Join us and start your smart journey with your documents",
      "full_name": "Full Name",
      "full_name_placeholder": "Enter your full name",
      "confirm_password": "Confirm Password",
      "confirm_password_placeholder": "Re-enter your password",
      "agree_to": "I agree to the ",
      "terms": "Terms & Conditions",
      "and": " and ",
      "privacy": "Privacy Policy",
      "register_btn": "Sign Up",
      "have_account": "Already have an account?",
      "login_link": "Sign In"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en'],
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
