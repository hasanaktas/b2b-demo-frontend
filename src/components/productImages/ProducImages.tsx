import Image from 'next/image'
import * as React from 'react'

type Props = {
    images: string[]
}

const ProductImages = ({ images }: Props) => {
    const [selected, setSelected] = React.useState<number>(0)
    return (
        <div className="d-flex gap-2 flex-column">
            <div className="w-100 position-relative" style={{ paddingTop: '100%' }}>
                <Image alt={images[selected]} layout="fill" src={images[selected]} />
            </div>

            <div className="d-flex  gap-2">
                {images.map((imageUrl, imageIndex) => {
                    return (
                        <div
                            key={imageIndex}
                            className="btn rounded-0"
                            style={{ width: 100, height: 100, padding: 0 }}
                            onClick={() => setSelected(imageIndex)}
                        >
                            <Image alt={imageUrl} src={imageUrl} width={100} height={100} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductImages
