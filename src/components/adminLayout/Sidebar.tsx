import * as React from 'react'
import Link from 'next/link'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ListGroup } from 'react-bootstrap'
import { AdminLayoutNavItem } from '@/types'
import { useTranslation } from '@/hooks'
import Brand from '../brand'
const Sidebar = () => {
    const router = useRouter()
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const { languageCode } = useTranslation()
    const navItems = React.useMemo<AdminLayoutNavItem[]>(
        () => [
            {
                title: t.pages.adminDashboard.title,
                href: '/',
            },
            {
                title: t.pages.adminUserManagement.title,
                href: '/user-management',
            },
            {
                title: t.pages.adminProductManagement.title,
                href: '/product-management',
            },
            {
                title: t.pages.adminOrderManagement.title,
                href: '/order-management',
                disabled: true,
            },
            {
                title: t.pages.adminBrandSettings.title,
                href: '/brand-settings',
                disabled: true,
            },
            {
                title: t.pages.adminApiSettings.title,
                href: '/api-settings',
                disabled: true,
            },
        ],
        [t]
    )

    const logout = React.useCallback(() => {
        localStorage.removeItem('token')
        queryClient.setQueryData(['auth'], null)
        router.replace('/sign-in')
    }, [queryClient, router])

    return (
        <div className="flex-grow-1 d-flex flex-column py-4 px-4 ">
            <div className="mb-4">
                <Brand />
            </div>
            <ListGroup>
                {navItems.map((item, index) => {
                    if (item.disabled) {
                        return (
                            <ListGroup.Item key={index} disabled>
                                {item.title}
                            </ListGroup.Item>
                        )
                    }
                    return (
                        <Link key={index} href={item.href}>
                            <ListGroup.Item as="a" href={item.href} action active={router.pathname === item.href}>
                                {item.title}
                            </ListGroup.Item>
                        </Link>
                    )
                })}
            </ListGroup>
            <div className="flex-grow-1" />
            <ListGroup className="mb-3">
                <Link href={router.pathname} locale={'tr'}>
                    <ListGroup.Item as="a" href={router.pathname} action active={languageCode === 'tr'}>
                        Türkçe
                    </ListGroup.Item>
                </Link>
                <Link href={router.pathname} locale={'en'}>
                    <ListGroup.Item as="a" href={router.pathname} action active={languageCode === 'en'}>
                        English
                    </ListGroup.Item>
                </Link>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item disabled>{t.common.settings}</ListGroup.Item>
                <ListGroup.Item action onClick={logout}>
                    {t.common.logout}
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Sidebar
