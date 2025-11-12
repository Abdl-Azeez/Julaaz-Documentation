import { useEffect, useState } from 'react'
import { Dialog, DialogContent } from '@/shared/ui/dialog'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/shared/ui/sheet'
import { DialogHeader, DialogTitle } from '@/shared/ui/dialog'
import { cn } from '@/shared/lib/utils/cn'

interface ResponsiveDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  title?: string
  className?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
}

export function ResponsiveDrawer({
  open,
  onOpenChange,
  children,
  title,
  className,
  side = 'bottom',
}: ResponsiveDrawerProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent 
          side={side} 
          className={cn(
            'w-full h-[85vh] max-h-[85vh] flex flex-col p-0',
            className
          )}
        >
          {title && (
            <SheetHeader className="px-6 pt-6 pb-4 border-b border-border/60 flex-shrink-0">
              <SheetTitle className="text-lg font-semibold">{title}</SheetTitle>
            </SheetHeader>
          )}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            {children}
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('max-w-2xl max-h-[90vh] overflow-y-auto', className)}>
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  )
}

