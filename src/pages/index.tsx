import * as React from 'react'
import { AdminLayout, AuthGuard, DashboardCard, Page } from '@/components'
import { NextPageExtended } from '@/types'

const AdminDashboardPage: NextPageExtended = () => {
    return (
        <Page>
            <DashboardCard />
        </Page>
    )
}

AdminDashboardPage.getLayout = (page) => (
    <AuthGuard>
        <AdminLayout>{page}</AdminLayout>
    </AuthGuard>
)

export default AdminDashboardPage
