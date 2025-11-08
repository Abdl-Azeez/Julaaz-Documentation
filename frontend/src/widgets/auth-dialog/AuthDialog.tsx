import { useState, useEffect } from 'react'
import { AuthDrawer } from '@/widgets/auth-drawer'
import { AuthModal } from '@/widgets/auth-modal'

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

/**
 * Smart authentication dialog that automatically switches between
 * drawer (mobile) and modal (desktop) based on screen size
 */
export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Use modal on desktop, drawer on mobile
  if (isDesktop) {
    return <AuthModal open={open} onOpenChange={onOpenChange} />
  }

  return <AuthDrawer open={open} onOpenChange={onOpenChange} />
}

