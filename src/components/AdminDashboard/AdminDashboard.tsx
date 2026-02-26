'use client'

import { useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowUpIcon } from 'lucide-react'
import './styles/admin-tailwind.css'
import { Button } from '../admin-ui/button'
import { Card } from '../admin-ui/card'
import { Label } from '../admin-ui/label'

export function AdminDashboard() {
  const portalRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const currentView = searchParams.get('view') || 'overview'

  return (
    <Card className="adm:p-8 adm:space-y-6">
      <Label asChild className="adm:text-3xl adm:font-semibold adm:mb-4">
        <h1>Admin Dashboard Component Rendered</h1>
      </Label>
      <div className="adm:flex adm:flex-wrap adm:items-center adm:gap-2 md:adm:flex-row">
        <Button variant="outline">Button</Button>
        <Button variant="outline" size="icon" aria-label="Submit">
          <ArrowUpIcon />
        </Button>
      </div>
    </Card>
  )
}
