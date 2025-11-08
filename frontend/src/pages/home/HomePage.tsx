import { useState } from 'react'
import { LayoutGrid, List } from 'lucide-react'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { SearchBar } from '@/widgets/search-bar'
import { PropertyCard } from '@/widgets/property-card'
import { AuthDrawer } from '@/widgets/auth-drawer'
import { Sidebar } from '@/widgets/sidebar'
import { sampleProperties } from './data/sample-properties'
import { ROUTES } from '@/shared/constants/routes'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/shared/store/auth.store'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils/cn'

type LayoutType = 'grid' | 'row'

export function HomePage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [layout, setLayout] = useState<LayoutType>('grid')

  const handleSearch = (query: string) => {
    // Navigate to search page with query
    navigate(`${ROUTES.PROPERTY_SEARCH}?q=${encodeURIComponent(query)}`)
  }

  const handleShare = (propertyId: string) => {
    const shareUrl = `${window.location.origin}${ROUTES.PROPERTY_DETAILS(propertyId)}`
    if (navigator.share) {
      navigator.share({
        title: 'Check out this property on JulaazNG',
        text: 'I found this amazing property!',
        url: shareUrl,
      })
    } else {
      navigator.clipboard.writeText(shareUrl)
    }
  }

  const handleViewDetails = (propertyId: string) => {
    navigate(ROUTES.PROPERTY_DETAILS(propertyId))
  }

  const handleMenuClick = () => {
    setIsSidebarOpen(true)
  }

  const handleProfileClick = () => {
    if (isAuthenticated) {
      // Navigate to profile if logged in
      navigate(ROUTES.PROFILE)
    } else {
      // Open drawer if not logged in
      setIsDrawerOpen(true)
    }
  }

  const handleRequestViewing = (propertyId: string) => {
    navigate(ROUTES.PROPERTY_BOOKING(propertyId))
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuClick={handleMenuClick} onProfileClick={handleProfileClick} />
      
      <main className="flex-1">
        {/* Hero Section - Enhanced for Desktop */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="container mx-auto px-4 lg:px-6 xl:px-8 py-8 md:py-12 lg:py-16 xl:py-20 max-w-7xl relative">
            <div className="max-w-5xl mx-auto">
              {/* Mobile Hero */}
              <div className="text-center lg:hidden mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Find Your Next Home
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  The best place to find rentals and services in Nigeria
                </p>
                <div className="max-w-2xl mx-auto">
                  <SearchBar onSearch={handleSearch} onFilterClick={() => console.log('Filter clicked')} />
                </div>
              </div>

              {/* Desktop Hero */}
              <div className="hidden lg:block">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                      <span>🏠</span>
                      <span>Your Trusted Property Platform</span>
                    </div>
                    <h1 className="text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                      Find Your Perfect
                      <span className="block text-primary">Home in Nigeria</span>
                    </h1>
                    <p className="text-lg xl:text-xl text-muted-foreground leading-relaxed">
                      Discover verified properties, trusted services, and professional artisans all in one place. 
                      Your journey to finding the perfect rental starts here.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>1,000+ Verified Properties</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>200+ Service Providers</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Secure Payments</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                    <div className="relative bg-surface/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50">
                      <SearchBar onSearch={handleSearch} onFilterClick={() => console.log('Filter clicked')} />
                      <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="text-center p-4 rounded-xl bg-background/50">
                          <div className="text-2xl font-bold text-primary">1K+</div>
                          <div className="text-xs text-muted-foreground mt-1">Properties</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-background/50">
                          <div className="text-2xl font-bold text-primary">500+</div>
                          <div className="text-xs text-muted-foreground mt-1">Active Listings</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-background/50">
                          <div className="text-2xl font-bold text-primary">98%</div>
                          <div className="text-xs text-muted-foreground mt-1">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Properties Section */}
        <section className="container mx-auto px-4 lg:px-6 xl:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6 lg:mb-10 gap-4">
            <div className="space-y-2 lg:flex-1">
              {/* Mobile: Title and Layout Toggle on same row */}
              <div className="flex items-center justify-between gap-4 lg:block">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
                  Trending Properties
                </h2>
                
                {/* Mobile Layout Toggle - Same row as title */}
                <div className="flex items-center gap-2 lg:hidden shrink-0">
                  <Button
                    variant={layout === 'grid' ? 'default' : 'ghost'}
                    size="icon"
                    className={cn(
                      "h-9 w-9 rounded-[10px]",
                      layout !== 'grid' && 'text-foreground hover:text-primary'
                    )}
                    onClick={() => setLayout('grid')}
                    aria-label="Grid layout"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={layout === 'row' ? 'default' : 'ghost'}
                    size="icon"
                    className={cn(
                      "h-9 w-9 rounded-[10px]",
                      layout !== 'row' && 'text-foreground hover:text-primary'
                    )}
                    onClick={() => setLayout('row')}
                    aria-label="Row layout"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                Discover the most popular listings in your area
              </p>
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="lg"
                className="h-11 px-6 rounded-xl"
                onClick={() => navigate(ROUTES.PROPERTIES)}
              >
                View All Properties
              </Button>
            </div>
          </div>
          
          {/* Mobile Grid */}
          <div className={`
            ${layout === 'grid' 
              ? 'grid grid-cols-2 gap-4' 
              : 'flex flex-col gap-4'
            } 
            lg:hidden
          `}>
            {sampleProperties.slice(0, 4).map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onRequestViewing={handleRequestViewing}
                onShare={handleShare}
                onSelect={handleViewDetails}
                layout={layout}
              />
            ))}
          </div>

          {/* Desktop Grid - Enhanced layout */}
          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {sampleProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onRequestViewing={handleRequestViewing}
                onShare={handleShare}
                onSelect={handleViewDetails}
                layout="grid"
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <AuthDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </div>
  )
}
