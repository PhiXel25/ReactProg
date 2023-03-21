import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PrdctDetails() {
    const params = useParams()

    const [product, setProduct] = useState()

    useEffect(() => {
        fetch('https:///dummyjson.com/products/' + params.id)
            .then(async (res) => await res.json())
            .then(i => setProduct(i))
    }, [])


    return (
        <div>
            {product == null ?
                <p>loading....</p>
                :
                <>
                    <div className="card2">
                        <div className="product">
                            <h1>{product.title}</h1>
                            <img src={product.images[0]} alt="" />
                            <h3>{product.description}</h3>
                            <h2>Price: ${product.price}</h2>
                            <h1>Discount: {product.discountPercentage}%</h1>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default PrdctDetails