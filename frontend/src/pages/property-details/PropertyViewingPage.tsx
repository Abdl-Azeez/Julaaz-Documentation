import { FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CalendarDays, Clock, Send, ArrowLeft } from 'lucide-react'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { Sidebar } from '@/widgets/sidebar'
import { AuthDrawer } from '@/widgets/auth-drawer'
import { useAuthStore } from '@/shared/store/auth.store'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { samplePropertyDetails } from './data/sample-property-details'
import { format } from 'date-fns'
import { ROUTES } from '@/shared/constants/routes'
import { Badge } from '@/shared/ui/badge'
import { cn } from '@/shared/lib/utils/cn'
import toast from 'react-hot-toast'

const viewingSlots = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM']

export function PropertyViewingPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string>(() => format(new Date(), 'yyyy-MM-dd'))
  const [selectedSlot, setSelectedSlot] = useState<string>(viewingSlots[0])
  const [note, setNote] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const property = id ? samplePropertyDetails[id] : undefined

  const handleMenuClick = () => setIsSidebarOpen(true)

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate(ROUTES.PROFILE)
    } else {
      setIsDrawerOpen(true)
    }
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header className="hidden lg:block" onMenuClick={handleMenuClick} onProfileClick={handleProfileClick} />
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
          <h1 className="text-2xl font-bold text-foreground">Property not found</h1>
          <p className="text-muted-foreground max-w-md">
            We couldn&apos;t locate this property. It may have been removed or the link is incorrect.
          </p>
          <Button onClick={() => navigate(ROUTES.PROPERTIES)} className="rounded-xl">
            Browse Properties
          </Button>
        </main>
        <Footer />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <AuthDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
      </div>
    )
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isAuthenticated) {
      setIsDrawerOpen(true)
      toast.error('Sign in to request a viewing')
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Viewing request sent! Our team will contact you shortly.')
      navigate(ROUTES.PROPERTIES)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header className="hidden lg:block" onMenuClick={handleMenuClick} onProfileClick={handleProfileClick} />

      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8 py-6 lg:py-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-icon-bg text-foreground hover:bg-primary/10 hover:text-primary rounded-full"
              onClick={() => navigate(-1)}
              aria-label="Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <p className="text-xs uppercase tracking-wide text-primary">Viewing Request</p>
              <h1 className="text-2xl font-bold text-foreground">Schedule a viewing</h1>
            </div>
          </div>

          <Card className="p-4 md:p-6 rounded-2xl border border-border bg-surface mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-40 rounded-xl overflow-hidden bg-muted">
                <img src={property.image} alt={property.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-foreground">{property.name}</h2>
                  <Badge className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
                    {property.neighbourhood}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {property.address}, {property.city}
                </p>
                <p className="text-base font-semibold text-primary">
                  ₦{new Intl.NumberFormat('en-NG').format(property.price)}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>{property.bedrooms} Beds</span>
                  <span>|</span>
                  <span>{property.bathrooms} Baths</span>
                  <span>|</span>
                  <span>{property.area} sqft</span>
                </div>
              </div>
            </div>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="p-5 rounded-2xl border border-border bg-surface space-y-5">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Select preferred date</h2>
                <p className="text-sm text-muted-foreground">
                  Choose a date and time that works best for you. We&apos;ll confirm availability shortly.
                </p>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-foreground">Date</label>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(event) => setSelectedDate(event.target.value)}
                    className="border-0 bg-transparent px-0 text-sm text-foreground"
                    required
                  />
                </div>

                <label className="block text-sm font-medium text-foreground">Time slot</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {viewingSlots.map((slot) => {
                    const isSelected = selectedSlot === slot
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={cn(
                          'flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm transition-all',
                          isSelected
                            ? 'border-primary bg-primary/10 text-primary shadow-sm'
                            : 'border-border bg-background text-foreground hover:border-primary/40'
                        )}
                      >
                        <Clock className="h-4 w-4" />
                        {slot}
                      </button>
                    )
                  })}
                </div>
              </div>
            </Card>

            <Card className="p-5 rounded-2xl border border-border bg-surface space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Additional details</h2>
                <p className="text-sm text-muted-foreground">Let us know any specific preferences or questions.</p>
              </div>
              <div className="space-y-2">
                <label htmlFor="note" className="block text-sm font-medium text-foreground">
                  Message (optional)
                </label>
                <textarea
                  id="note"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="e.g., I’d love to confirm parking availability before the viewing."
                />
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                We&apos;ll notify the property manager and confirm the viewing within 24 hours.
              </p>
              <Button
                type="submit"
                className="rounded-xl px-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <span className="inline-flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Submit Request
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <AuthDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </div>
  )
}

