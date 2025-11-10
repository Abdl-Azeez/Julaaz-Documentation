import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRoleStore, type RoleType } from '@/shared/store/role.store'
import { ROUTES } from '@/shared/constants/routes'
import toast from 'react-hot-toast'

interface RoleGuardProps {
  children: React.ReactNode
  allowedRoles: RoleType[]
  redirectTo?: string
}

export function RoleGuard({ children, allowedRoles, redirectTo }: RoleGuardProps) {
  const navigate = useNavigate()
  const { activeRole } = useRoleStore()

  useEffect(() => {
    if (activeRole && !allowedRoles.includes(activeRole)) {
      toast.error(`This page is not accessible in ${activeRole} mode`)
      navigate(redirectTo ?? ROUTES.HOME, { replace: true })
    }
  }, [activeRole, allowedRoles, navigate, redirectTo])

  if (!activeRole || !allowedRoles.includes(activeRole)) {
    return null
  }

  return <>{children}</>
}

