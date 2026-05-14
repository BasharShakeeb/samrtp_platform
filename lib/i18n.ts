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
      "nav_signup": "إنشاء حساب"
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
      "nav_signup": "Sign Up"
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
