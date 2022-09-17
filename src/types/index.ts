import * as React from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { DehydratedState } from '@tanstack/react-query'

export type Nullable<T> = T | null
export type UseStateDispatcher<S> = React.Dispatch<React.SetStateAction<S>>

// #region NextJs
export type NextPageExtended<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}

export type ExtendedAppProps = AppProps<{ dehydratedState?: DehydratedState }> & {
    Component: NextPageExtended<{ dehydratedState?: DehydratedState }>
}

// #endregion

// #region Service
export type ServiceResponse<T> = {
    data: T
}

export type ServiceErrorResponse = {
    error: {
        httpStatus: number
        code: string
        message: string
        uri: string
        transactionId: string
        timestamp: string
    }
}

export type Product = {
    id: string
    name: string
    deliveryDayText: string
    brand: string
    displayPrice: number
    displayPriceText: string
    imageURLs: string[]
    productStoryText: string
    stockCount: number
    stockCode: string
}

export type Member = {
    id: string
    name: string
    surname: string
    email: string
    privileges: Nullable<string[]>
    details: Nullable<string[]>
    executor: string
    authorizationType: string
}

export type Auth = {
    authToken: string
    member: Member
}

// #endregion

// #region Common
export type LanguageCode = 'tr' | 'en'
export type AdminLayoutNavItem = { title: string; href: string; disabled?: boolean }

export type Locale = {
    common: {
        name: string
        surname: string
        brand: string
        price: string
        stock: string
        email: string
        logout: string
        settings: string
        image: string
        createdBy: string
        similiarProducts: string
        fashion: string
        electronic: string
        living: string
        loading: string
        productNotFound: string
        addBasket: string
    }
    pages: {
        adminDashboard: {
            title: string
        }
        adminUserManagement: {
            title: string
        }
        adminProductManagement: {
            title: string
        }
        adminOrderManagement: {
            title: string
        }
        adminBrandSettings: {
            title: string
        }
        adminApiSettings: {
            title: string
        }
    }
}

// #endregion
