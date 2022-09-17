import * as React from 'react'
import { AdminLayout, AuthGuard, DataTable, Page } from '@/components'
import { useProducts, useTranslation } from '@/hooks'
import { NextPageExtended, Product } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import Link from 'next/link'
import { Link2 as Link2Icon } from 'react-feather'
import Image from 'next/image'
const AdminProductManagementPage: NextPageExtended = () => {
    const { data: products, isLoading } = useProducts()
    const { t } = useTranslation()

    const columns = React.useMemo<ColumnDef<Product>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'Id',
                cell: (params) => (
                    <Link href={`/products/${params.getValue()}`}>
                        <a target="_blank" className="user-select-none d-flex gap-3 text-decoration-none">
                            <span style={{ width: 30 }}>{params.getValue() as string}</span> <Link2Icon size={20} />
                        </a>
                    </Link>
                ),
            },
            {
                header: t.common.image,
                cell: (params) => {
                    return (
                        <div>
                            <Image
                                alt={params.row.original.name}
                                width={40}
                                height={40}
                                src={params.row.original.imageURLs[0]}
                            />
                        </div>
                    )
                },
            },
            {
                accessorKey: 'name',
                header: t.common.name,
            },
            {
                accessorKey: 'brand',
                header: t.common.brand,
            },
            {
                accessorKey: 'displayPrice',
                header: t.common.price,
                cell: (params) => {
                    return params.row.original.displayPriceText
                },
            },
            {
                accessorKey: 'stockCount',
                header: t.common.stock,
            },
        ],
        [t]
    )

    return (
        <Page loading={isLoading}>
            <DataTable data={products} columns={columns} />
        </Page>
    )
}

AdminProductManagementPage.getLayout = (page) => (
    <AuthGuard>
        <AdminLayout>{page}</AdminLayout>
    </AuthGuard>
)

export default AdminProductManagementPage
