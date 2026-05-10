"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export function NavigationControls() {
  const router = useRouter()

  return (
    <div data-nav-controls className="fixed top-20 left-4 z-[60] flex items-center gap-2 md:top-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => router.back()}
        className="bg-card/80 backdrop-blur-sm border-border hover:bg-muted shadow-lg rounded-full w-10 h-10 transition-all hover:scale-110 active:scale-95"
        title="الخلف"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => router.forward()}
        className="bg-card/80 backdrop-blur-sm border-border hover:bg-muted shadow-lg rounded-full w-10 h-10 transition-all hover:scale-110 active:scale-95"
        title="للأمام"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  )
}
