import React, { useState } from 'react'
import supabase from '../../../Database/supabase';
import { getAllproducts } from '../../../utils/getAllProduct';

const ProductsModal = ({ editItem, setShowModal, setProducts, categories }) => {
    const [product, setProduct] = useState({
        image_url: "",
        name: "",
        description: "",
        price: "",
        category: "",
        images: ""
    });

    const OnchangeProduct = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }))
    }

    const OnhandleProduct = async (e) => {
        e.preventDefault();
        console.log(product)
        if (!editItem) {
            const { error } = await supabase
                .from('product')
                .insert([
                    { image_url: product.image_url, name: product.name, description: product.description, stock: product.stock, price: product.price, category_id: product.category, Images: product.images },
                ])
                .select()
            if (!error) {



                if (!error) {
                    getAllproducts().then((res => {
                        setProducts(res)
                        setShowModal(false)
                    }))
                }
            } else {
                console.log(error)
            }
        } else {

            const UpdateProduct = {}

            for (const [key, value] of Object.entries(product)) {
                if (value != "" && editItem[key] != value.trim()) {
                    UpdateProduct[key] = value
                }
            }

            console.log(UpdateProduct)
            if (Object.entries(UpdateProduct).length == 0) {
                console.log(Object.entries(UpdateProduct).length)
                alert("please insert data")
                return;
            }


            const { error } = await supabase
                .from('product')
                .update(UpdateProduct)
                .eq('id', editItem.id)
                .select()

            if (!error) {
                getAllproducts().then((res => {
                    setProducts(res)
                    setShowModal(false)
                }))
            }

        }


    }




    return (
        <form onSubmit={OnhandleProduct}>
            <div className="form-group">
                <label>Product Image</label>
                <input type="text" name='image_url' value={product.image_url || editItem?.image_url || ''} onChange={OnchangeProduct} placeholder="Enter product Image" />
            </div>
            <div className="form-group">
                <label>Product Name</label>
                <input type="text" name='name' value={product.name || editItem?.name || ''} onChange={OnchangeProduct} placeholder="Enter product name" />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea name='description' value={product.description || editItem?.description || ''} onChange={OnchangeProduct} ></textarea>
            </div>
            <div className="form-group">
                <label>Stock</label>
                <input type='number' name='stock' value={product.stock || editItem?.stock || ''} onChange={OnchangeProduct} />
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" name='price' value={product.price || editItem?.price || ''} onChange={OnchangeProduct} placeholder="Enter price" />
            </div>
            <div className="form-group">
                <label>Category</label>
                <select value={product.category || editItem?.category || ''} name='category' onChange={OnchangeProduct}>
                    <option value="">Select category</option>
                    {categories?.map((item, index) => <option key={index} value={item?.id}>{item?.name}</option>)}

                </select>
            </div>
            <div className="form-group">
                <label>Images</label>
                <textarea name='images' value={product.images || ''} onChange={OnchangeProduct} ></textarea>
            </div>
            <button type='submit' className="btn btn-primary" >{editItem ? 'Update' : 'Add'} Product</button>
        </form>
    )
}

export default ProductsModal
