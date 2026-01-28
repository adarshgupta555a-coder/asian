import { useEffect, useState } from "react"
import ProductCard from "../shop/productCard"
import supabase from "../../Database/supabase";
import { Link } from "react-router";

const FeaturedProduct = () => {
    const [products, setProduct] = useState(null);

    useEffect(() => {
        getProducts()
        return()=>{
            console.log("closed")
        }
    }, [])

    const getProducts = async () => {

        let { data: product, error } = await supabase
            .from('product')
            .select(`
        id,
        name,
        image_url,
        price,
        category(
        name
        )
        `)
        console.log(product)
        setProduct(product)

    }
    return (
        <section className="featured">
            <h1>Featured Product</h1>
            <div className="products">
                {products?.map((product) => (
                    <Link to={`/product-page/${product.id}`} style={{textDecoration:"none"}} key={product.id}>
                        <ProductCard  {...product} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProduct
