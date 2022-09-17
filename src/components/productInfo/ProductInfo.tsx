import * as React from 'react'
import { Product } from '@/types'
import { ShoppingBag as ShoppingBagIcon, Heart as HeartIcon, Clock as ClockIcon } from 'react-feather'
import { useTranslation } from '@/hooks'

type Props = {
    product: Product
}
const ProductInfo = ({ product }: Props) => {
    const { t } = useTranslation()
    return (
        <div className="d-flex flex-column bg-white p-4 rounded-2">
            <h6> {product.brand}</h6>
            <h6 className="text-black-50 mb-4 ">{product.name}</h6>

            <h5>{product.displayPriceText}</h5>
            <p className="mb-3">{product.productStoryText}</p>
            <div className="d-flex gap-2 mb-4">
                <button className="btn btn-dark align-self-start px-4 py-3 d-flex gap-2">
                    {t.common.addBasket}
                    <ShoppingBagIcon />
                </button>
                <button className="btn btn-outline-danger align-self-start px-4 py-3 d-flex ">
                    <HeartIcon />
                </button>
            </div>
            <div className="d-flex gap-2 align-items-center text-black-50">
                <ClockIcon /> <div>{product.deliveryDayText}</div>
            </div>
        </div>
    )
}

export default ProductInfo
