import React from 'react'

const WishList = () => {
  return (
    <div className="content-section active" id="wishlist">
        <div className="section-card">
          <h2 className="section-title">My Wishlist (5 Items)</h2>
          <div className="wishlist-grid">
            <div className="wishlist-item">
              <div className="wishlist-image">
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"
                  alt="Product"
                />
              </div>
              <div className="wishlist-info">
                <h4>Black Hoodie</h4>
                <div className="wishlist-price">₹1,299</div>
                <div className="wishlist-actions">
                  <button className="wishlist-btn add-cart-btn">
                    Add to Cart
                  </button>
                  <button className="wishlist-btn remove-wishlist-btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="wishlist-item">
              <div className="wishlist-image">
                <img
                  src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400"
                  alt="Product"
                />
              </div>
              <div className="wishlist-info">
                <h4>Grey Pullover</h4>
                <div className="wishlist-price">₹1,499</div>
                <div className="wishlist-actions">
                  <button className="wishlist-btn add-cart-btn">
                    Add to Cart
                  </button>
                  <button className="wishlist-btn remove-wishlist-btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="wishlist-item">
              <div className="wishlist-image">
                <img
                  src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400"
                  alt="Product"
                />
              </div>
              <div className="wishlist-info">
                <h4>Navy Sweatshirt</h4>
                <div className="wishlist-price">₹1,199</div>
                <div className="wishlist-actions">
                  <button className="wishlist-btn add-cart-btn">
                    Add to Cart
                  </button>
                  <button className="wishlist-btn remove-wishlist-btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="wishlist-item">
              <div className="wishlist-image">
                <img
                  src="https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400"
                  alt="Product"
                />
              </div>
              <div className="wishlist-info">
                <h4>White Hoodie</h4>
                <div className="wishlist-price">₹1,399</div>
                <div className="wishlist-actions">
                  <button className="wishlist-btn add-cart-btn">
                    Add to Cart
                  </button>
                  <button className="wishlist-btn remove-wishlist-btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="wishlist-item">
              <div className="wishlist-image">
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"
                  alt="Product"
                />
              </div>
              <div className="wishlist-info">
                <h4>Olive Green Hoodie</h4>
                <div className="wishlist-price">₹1,599</div>
                <div className="wishlist-actions">
                  <button className="wishlist-btn add-cart-btn">
                    Add to Cart
                  </button>
                  <button className="wishlist-btn remove-wishlist-btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WishList
