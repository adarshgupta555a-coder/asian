import { useEffect, useState } from "react"
import ProductCard from "../shop/productCard"
import supabase from "../../Database/supabase";
import { Link } from "react-router";

const FeaturedProduct = () => {
    const [products, setProduct] = useState(null);
    const [loading , setLoading] = useState(false);
    const [Error , setError] = useState(false);

    useEffect(() => {
        getProducts()
        return()=>{
            console.log("closed")
        }
    }, [])

    const getProducts = async () => {
        setLoading(true);
        let { data: product, error } = await supabase
            .from('product')
            .select(`
        id,
        name,
        image_url,
        price,
        featured,
        category(
        name
        )
        `)
        .eq("featured", true)
        console.log(product)
        if (error) {
            console.log(error)
            setLoading(false);
            setError(true)
            return;
        } else{
        setProduct(product)
        setLoading(false)
        }
        

    }
    return (
        <section className="featured">
            <h1>Featured Product</h1>
            <div className="products">
             { loading ? (<center><h1>Loading...</h1></center>):Error ? (<center><h1>Products not found.</h1></center>):  (<>{products?.map((product, index) => (
                    
                       <ProductCard  {...product} key={index} />
                ))}
                </>)}
            </div>
        </section>
    )
}

export default FeaturedProduct
