import React,{useState} from 'react'
import "../../css/Shop.css"
import ProductCard from './productCard'
const Products = () => {
   const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    { id: 1, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', title: 'Classic Black Hoodie', price: 1299, discount: 20 },
    { id: 2, image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400', title: 'Grey Pullover', price: 1499, discount: 15 },
    { id: 3, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400', title: 'Navy Blue Sweatshirt', price: 1199, discount: null },
    { id: 4, image: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400', title: 'White Hoodie', price: 1399, discount: 25 },
    { id: 5, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', title: 'Olive Green Hoodie', price: 1599, discount: null },
    { id: 6, image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400', title: 'Maroon Sweatshirt', price: 1249, discount: 30 },
    { id: 7, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400', title: 'Charcoal Hoodie', price: 1449, discount: null },
    { id: 8, image: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400', title: 'Beige Pullover', price: 1349, discount: 10 },
    { id: 9, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', title: 'Black Premium Hoodie', price: 1799, discount: null },
  ];
  return (
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
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
