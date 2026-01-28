import React, { useEffect, useState } from 'react'
import "../css/Shop.css"
import ProductCard from '../Components/shop/productCard'
import { useSelector } from 'react-redux';
import supabase from "../Database/supabase"
import { Link } from 'react-router';
const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const authData = useSelector((state) => state.Auth.value);
  const [products, setProduct] = useState(null);

  useEffect(() => {
    getProducts()
    console.log(authData)
    console.log(products)
    // return()=>{
    //   console.log("closed")
    // }
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
    <>

      <div style={{
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: '#ffffff',
        color: '#000000',
        minHeight: '100vh'
      }}>
        <div className="shop-container">
          <button
            className="mobile-filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? '✕ Close Filters' : '☰ Show Filters'}
          </button>

          <div className={`side-filter ${showFilters ? 'active' : ''}`}>
            <h3>Filters</h3>
            <div className="line"></div>

            <div className="accordion">
              <input type="checkbox" id="cat" className="acc-toggle" />
              <label htmlFor="cat" className="acc-title">Category</label>
              <div className="acc-content">
                <label><input type="checkbox" /> Hoodies</label>
                <label><input type="checkbox" /> T-Shirts</label>
                <label><input type="checkbox" /> Joggers</label>
                <label><input type="checkbox" /> Accessories</label>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="sort-sidebar" className="acc-toggle" />
              <label htmlFor="sort-sidebar" className="acc-title">Sort By</label>
              <div className="acc-content">
                <label><input type="radio" name="sort-sidebar" /> Price: Low to High</label>
                <label><input type="radio" name="sort-sidebar" /> Price: High to Low</label>
                <label><input type="radio" name="sort-sidebar" /> Newest First</label>
                <label><input type="radio" name="sort-sidebar" /> Popular</label>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="size" className="acc-toggle" />
              <label htmlFor="size" className="acc-title">Size</label>
              <div className="acc-content">
                <label><input type="checkbox" /> S</label>
                <label><input type="checkbox" /> M</label>
                <label><input type="checkbox" /> L</label>
                <label><input type="checkbox" /> XL</label>
                <label><input type="checkbox" /> XXL</label>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="price" className="acc-toggle" />
              <label htmlFor="price" className="acc-title">Price Range</label>
              <div className="acc-content">
                <label><input type="checkbox" /> Under ₹1000</label>
                <label><input type="checkbox" /> ₹1000 - ₹1500</label>
                <label><input type="checkbox" /> ₹1500 - ₹2000</label>
                <label><input type="checkbox" /> Above ₹2000</label>
              </div>
            </div>
          </div>

          <div className="shop-items">
            <div className="shop-heading-filter">
              <h3>Mens Hoodies and Sweatshirts</h3>
              <div className="product-filter">
                <div className="accordion">
                  <input type="checkbox" id="sort-top" className="acc-toggle" />
                  <label htmlFor="sort-top" className="acc-title">Sort By</label>
                  <div className="acc-content">
                    <label><input type="radio" name="sort-top" /> Price: Low to High</label>
                    <label><input type="radio" name="sort-top" /> Price: High to Low</label>
                    <label><input type="radio" name="sort-top" /> Newest First</label>
                    <label><input type="radio" name="sort-top" /> Popular</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              {products?.map(product => (
                <ProductCard  {...product}  key={product?.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
