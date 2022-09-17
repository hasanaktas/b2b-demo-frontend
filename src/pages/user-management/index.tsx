import * as React from 'react'
import { AdminLayout, AuthGuard, DataTable, Page } from '@/components'
import { useMembers, useTranslation } from '@/hooks'
import { Member, NextPageExtended } from '@/types'
import { ColumnDef } from '@tanstack/react-table'

const AdminUserManagementPage: NextPageExtended = () => {
    const { data: users, isLoading } = useMembers()
    const { t } = useTranslation()
    const columns = React.useMemo<ColumnDef<Member>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'Id',
            },
            {
                accessorKey: 'name',
                header: t.common.name,
            },
            {
                accessorKey: 'surname',
                header: t.common.surname,
            },
            {
                accessorKey: 'email',
                header: t.common.email,
            },
        ],
        [t]
    )

    return (
        <Page loading={isLoading}>
            <DataTable data={users} columns={columns} />
        </Page>
    )
}

AdminUserManagementPage.getLayout = (page) => (
    <AuthGuard>
        <AdminLayout>{page}</AdminLayout>
    </AuthGuard>
)

export default AdminUserManagementPage
