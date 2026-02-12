import React, { useEffect, useState } from 'react';
import "../css/SearchPage.css";
import supabase from "../Database/supabase";
import { Link } from 'react-router';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [debounce, setDebounce] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDebounce(searchQuery);
    },500)

    return () => clearTimeout(timeout)
  },[searchQuery])

  useEffect(()=>{
    if (debounce) {
      fetchData()
    }
  },[debounce])

  const fetchData = async () =>{
    const {data, error} = await supabase 
    .from("product")
    .select(
      `
      id,
      image_url,
      name,
      price,
      category (
      name
      )
      `
    ).ilike("name",`%${debounce}%`)

    if (!error) {
      console.log(data);
      setFilteredProducts(data)
    }else{
      console.log(error)
    }
  }

  // const handleProductClick = (product) => {
   
  // };

  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      backgroundColor: '#ffffff',
      color: '#000000',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <div className="search-container">
        <div className="search-header">
          <h1>Search Products</h1>
          <p>Find your perfect hoodie or sweatshirt</p>
        </div>

        <div className="search-box">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="search"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, categories..."
            />
            {searchQuery && (
              <button 
                className="clear-btn" 
                onClick={() => { setSearchQuery(''); setShowResults(false); }}
              >
                ✕
              </button>
            )}
          </div>

          {showResults && (
            <div className="search-suggestions">
              {filteredProducts?.length > 0 ? (
                filteredProducts?.map(product => (
                  <div 
                    key={product.id} 
                    className="suggestion-item"
                    onClick={() => handleProductClick(product)}
                  >
                    <img 
                      src={product.image_url} 
                      alt={product.name} 
                      className="suggestion-image"
                    />
                    <div className="suggestion-details">
                      <div className="suggestion-name">{product.name}</div>
                      <div className="suggestion-category">{product.category.name}</div>
                    </div>
                    <div className="suggestion-price">₹{product.price}</div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>No products found for "{searchQuery}"</p>
                  <p style={{ fontSize: '12px', marginTop: '8px' }}>Try searching for hoodies, sweatshirts, or pullover</p>
                </div>
              )}
            </div>
          )}
        </div>

        {searchQuery && !showResults && (
          <div className="search-info">
            <h2>Search Results for "{searchQuery}"</h2>
            <p>{filteredProducts?.length} product{filteredProducts?.length !== 1 ? 's' : ''} found</p>
          </div>
        )}

        {searchQuery && !showResults && filteredProducts?.length > 0 && (
          <div className="results-grid">
            {filteredProducts?.map(product => (
              <Link to={`/product-page/${product.id}`} style={{textDecoration:"none",color:"inherit"}}  key={product.id}>
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image_url} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category.name}</p>
                  <div className="product-price">₹{product.price}</div>
                  {/* <button className="add-to-cart">Add to Cart</button> */}
                </div>
              </div>
              </Link>
            ))}
          </div>
        )}

        {!searchQuery && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Start Your Search</h3>
            <p style={{ fontSize: '14px' }}>Search for hoodies, sweatshirts, or browse by category</p>
          </div>
        )}
      </div>
    </div>
  );
}