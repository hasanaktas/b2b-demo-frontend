import { useTranslation } from '@/hooks'
import * as React from 'react'

const DashboardCard = () => {
    const { t } = useTranslation()
    return (
        <div className="border bg-white p-4 rounded-2">
            <h1 className="text-primary">B2B</h1>
            <h4>{t.pages.adminDashboard.title}</h4>
        </div>
    )
}

export default DashboardCard
