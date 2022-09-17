import * as React from 'react'
import { useProduct, useSimilarProducts, useTranslation } from '@/hooks'
import services from '@/services'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { NextPageExtended } from '@/types'
import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { MainLayout, Page, ProductImages, ProductInfo, SimiliarProducts } from '@/components'
import { Col, Container, Row } from 'react-bootstrap'

const ProductDetailPage: NextPageExtended = () => {
    const router = useRouter()
    const { t } = useTranslation()
    const id = router.query.id as string | undefined
    const { data: product, status } = useProduct(id)
    const { data: similiarProducts } = useSimilarProducts(id)

    if (status === 'error') {
        return (
            <Container>
                <div className="mt-4">{t.common.productNotFound}</div>
            </Container>
        )
    }

    if (status === 'loading') {
        return (
            <Container>
                <div className="mt-4">{t.common.loading}</div>
            </Container>
        )
    }

    return (
        <Page>
            <Row>
                <Col xs={12} lg={6} className="mb-2">
                    <ProductImages images={product.imageURLs} />
                </Col>
                <Col xs={12} lg={6} className="mb-2">
                    <ProductInfo product={product} />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col xs={12}>
                    <SimiliarProducts products={similiarProducts} />
                </Col>
            </Row>
        </Page>
    )
}

ProductDetailPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default ProductDetailPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const queryClient = new QueryClient()
    const params = ctx.params
    const id = params?.id as string

    await Promise.all([
        queryClient.prefetchQuery(['products', id], () => services.products.get({ id })),
        queryClient.prefetchQuery(['similiar-products', id], () => services.products.getSimilar({ id })),
    ])

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}
