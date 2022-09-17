import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
type Props = {
    products?: Product[]
}

const SimilarProducts = ({ products }: Props) => {
    if (!products) {
        return null
    }
    return (
        <div>
            <h5>Similar Products</h5>
            <ScrollContainer vertical={false} className="d-flex gap-3">
                {products.map((product) => {
                    return (
                        <Link key={product.id} href={`/products/${product.id}`}>
                            <a className="position-relative text-decoration-none text-black" style={{ flexShrink: 0 }}>
                                <Image alt={product.name} src={product.imageURLs[0]} width={300} height={300} />
                                <div className="position-absolute bottom-0 start-0 end-0 p-2 d-flex flex-column bg-white bg-opacity-25">
                                    <p className="mb-0">{product.name}</p>
                                    <b className="opacity-75">{product.displayPriceText}</b>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </ScrollContainer>
        </div>
    )
}

export default SimilarProducts
