"use client"

import * as React from "react"
import { useTranslation } from "react-i18next"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSelector() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  // To avoid hydration mismatch due to i18n initialization on client
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-gray-100">
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium">
            {i18n.language?.startsWith('ar') ? 'العربية' : 'English'}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={i18n.language?.startsWith('ar') ? 'end' : 'start'} className="min-w-[150px]">
        <DropdownMenuItem 
          onClick={() => changeLanguage('ar')}
          className={`cursor-pointer flex items-center justify-between gap-2 p-3 ${i18n.language?.startsWith('ar') ? 'bg-primary/10 font-bold' : ''}`}
        >
          <span>{t('arabic')}</span>
          <span className="text-xl">🇸🇦</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className={`cursor-pointer flex items-center justify-between gap-2 p-3 ${i18n.language?.startsWith('en') ? 'bg-primary/10 font-bold' : ''}`}
        >
          <span>{t('english')}</span>
          <span className="text-xl">🇺🇸</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
