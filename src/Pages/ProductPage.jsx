import React, { useEffect, useState } from 'react'
import "../css/ProductPage.css"
import { useParams } from 'react-router'
import supabase from '../Database/supabase'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../store/CartSlice'
import SyncCartThunk, { FetchCartThunk } from '../store/cartThunk'

const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(0);
    const [mainImg, setMainImg] = useState("")
    const cartData = useSelector((state) => state?.Cart)
    const userData = useSelector((state) => state?.Auth?.value)
    const dispatch = useDispatch()


    useEffect(() => {
        getProduct()
        console.log(id)
        //for realtime insert , update in supabase
        const channel = supabase
            .channel("cart-realtime")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "cart" },
                payload => {
                    console.log("Cart updated:", payload);
                    // optional: refetch cart
                }
            )
            .subscribe();

        return () => supabase.removeChannel(channel);

    }, [])

    useEffect(()=>{
                setMainImg(product?.image_url)
           let cartfilter = cartData.findIndex((item) => item.id == id);
        if (cartfilter >= 0) {
            setQty(cartData[cartfilter]?.qty)
            console.log(cartData[cartfilter]?.qty)
        }

    },[cartData])


    const OnImageMain = (e) =>{
        setMainImg(e.target.src)
    }


    const DeleteCart = async (userId, productId) => {

        const { error } = await supabase
            .from('cart')
            .delete()
            .eq('user_id', userId)
            .eq("product_id", productId)

        console.log(error)
        setQty(0);
        dispatch(FetchCartThunk(userData?.id))

    }



    const getProduct = async () => {
        let { data, error } = await supabase
            .from('product')
            .select("*")
            .eq('id', id)
        // console.log(JSON.parse(data[0].Images))
        setProduct(data[0])
    }


    const increaseQty = () => {
        if (qty <= 10) {
            setQty(prev => ++prev);
            const cartItem = { id: id, qty: qty + 1, price: product?.price }
            dispatch(cartAction.addToCart(cartItem))
            dispatch(SyncCartThunk({ userId: userData?.id, cartItem }))
        }
    }

    const decreaseQty = () => {
        if (qty > 0) {
            setQty(prev => --prev);
            dispatch(cartAction.removeFromCart(id))
            if (qty - 1 !== 0) {
                const cartItem = { id: id, qty: qty - 1, price: product?.price }
                dispatch(SyncCartThunk({ userId: userData?.id, cartItem }))
            } else {
                //delete function active
                DeleteCart(userData?.id, product?.id)
            }


        }
    }
    return (
        <>
            <div class="product-container">
                <div className="product-layout">
                    {/* Product Images */}
                    <div className="product-images">
                        <div className="main-image">
                            <img
                                src={mainImg || product?.image_url}
                                alt="Product"
                            />
                        </div>
                        <div className="thumbnail-container">
                           <div className="thumbnail" onClick={OnImageMain}>
                                <img
                                    src={product?.image_url}
                                    alt="Thumb 1"
                                />
                            </div> 
                            {product?.Images && JSON.parse(product?.Images).map((item, index) => (<div className="thumbnail" key={index} onClick={OnImageMain}>
                                <img
                                    src={item}
                                    alt="Thumb 1"
                                />
                            </div>))}


                        </div>
                    </div>
                    {/* Product Info */}
                    <div className="product-info">
                        <div className="brand">PREMIUM COLLECTION</div>
                        <h1 className="product-title">{product?.name}</h1>
                        <div className="rating">
                            <span className="stars">★★★★★</span>
                            <span className="reviews">(256 Reviews)</span>
                        </div>
                        <div className="price-section">
                            <span className="current-price">₹{product?.price}</span>
                            <span className="original-price">₹{product?.price * 2}</span>
                            <span className="discount-badge">50% OFF</span>
                        </div>
                        <p className="product-description">
                            {product?.description}
                        </p>
                        {/* Size Selection */}
                        <div className="size-section">
                            <h4>Select Size</h4>
                            <div className="size-options">
                                <input type="radio" name="size" id="size-s" className="size-input" />
                                <label htmlFor="size-s" className="size-label">
                                    S
                                </label>
                                <input
                                    type="radio"
                                    name="size"
                                    id="size-m"
                                    className="size-input"
                                    defaultChecked=""
                                />
                                <label htmlFor="size-m" className="size-label">
                                    M
                                </label>
                                <input type="radio" name="size" id="size-l" className="size-input" />
                                <label htmlFor="size-l" className="size-label">
                                    L
                                </label>
                                <input type="radio" name="size" id="size-xl" className="size-input" />
                                <label htmlFor="size-xl" className="size-label">
                                    XL
                                </label>
                                <input
                                    type="radio"
                                    name="size"
                                    id="size-xxl"
                                    className="size-input"
                                />
                                <label htmlFor="size-xxl" className="size-label">
                                    XXL
                                </label>
                            </div>
                        </div>
                        {/* Color Selection */}
                        <div className="color-section">
                            <h4>Select Color</h4>
                            <div className="color-options">
                                <input
                                    type="radio"
                                    name="color"
                                    id="color-black"
                                    className="color-input"
                                    defaultChecked=""
                                />
                                <label
                                    htmlFor="color-black"
                                    className="color-label"
                                    style={{ background: "#000000" }}
                                />
                                <input
                                    type="radio"
                                    name="color"
                                    id="color-grey"
                                    className="color-input"
                                />
                                <label
                                    htmlFor="color-grey"
                                    className="color-label"
                                    style={{ background: "#808080" }}
                                />
                                <input
                                    type="radio"
                                    name="color"
                                    id="color-navy"
                                    className="color-input"
                                />
                                <label
                                    htmlFor="color-navy"
                                    className="color-label"
                                    style={{ background: "#001f3f" }}
                                />
                                <input
                                    type="radio"
                                    name="color"
                                    id="color-white"
                                    className="color-input"
                                />
                                <label
                                    htmlFor="color-white"
                                    className="color-label"
                                    style={{ background: "#ffffff" }}
                                />
                            </div>
                        </div>
                        {/* Quantity */}
                        <div className="quantity-section">
                            <h4>Quantity</h4>
                            <div className="quantity-counter">
                                <button className="qty-btn" onClick={decreaseQty}>
                                    −
                                </button>
                                <input
                                    type="number"
                                    id="quantity"
                                    className="qty-input"
                                    value={qty}
                                    readOnly=""

                                />
                                <button className="qty-btn" onClick={increaseQty}>
                                    +
                                </button>
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="action-buttons">
                           {qty > 0? <button className="add-to-cart-btn" onClick={()=>DeleteCart(userData?.id,id)}>
                                Remove from Cart
                            </button>: <button className="add-to-cart-btn" onClick={increaseQty}>
                                Add to Cart
                            </button>}
                            <button className="wishlist-btn">♥</button>
                        </div>
                        {/* Product Features */}
                        <div className="product-features">
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span>Free shipping on orders above ₹999</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">↻</span>
                                <span>Easy 30-day returns &amp; exchanges</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">★</span>
                                <span>100% authentic products</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🔒</span>
                                <span>Secure payment options</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductPage
