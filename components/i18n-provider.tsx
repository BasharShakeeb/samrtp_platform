"use client"

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { useEffect, useState } from 'react';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    i18n.on('languageChanged', handleLanguageChange);
    handleLanguageChange(i18n.language || 'ar');
    setMounted(true);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
