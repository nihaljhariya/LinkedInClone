import DashboardLayout from '@/layout/DashboardLayout'
import UserLayout from '@/layout/UserLayout'
import React from 'react'

export default function MyConnectionsPage() {
  return (
    <UserLayout>
    <DashboardLayout >
        <div>
            <h1>MyConnections</h1>
        </div>
    </DashboardLayout>

   </UserLayout>
  )
}
