import * as React from 'react'

type Props = {
    images: string[]
}

const ProductImages = ({ images }: Props) => {
    const [selected, setSelected] = React.useState<number>(0)
    return (
        <div className="d-flex gap-2 flex-column">
            <img src={images[selected]} style={{ width: '100%', height: 'auto' }} />
            <div className="d-flex  gap-2">
                {images.map((imageUrl, imageIndex) => {
                    return (
                        <div
                            key={imageIndex}
                            className="btn rounded-0"
                            style={{ width: 100, height: 100, padding: 0 }}
                            onClick={() => setSelected(imageIndex)}
                        >
                            <img src={imageUrl} className="w-100 h-100" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductImages
