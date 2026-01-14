import React from 'react'
import "../../css/Shop.css"
const Products = () => {
  return (
    <section id="shop-container">

      <div className="side-filter">
        <h3>Filters</h3>
        <div className="line"></div>
        <div className="side-filter">
          <div className="accordion">
            <input type="checkbox" id="cat" className="acc-toggle" />
            <label htmlFor="cat" className="acc-title">Category</label>

            <div className="acc-content">
              <label><input type="checkbox" /> Hoodies</label><br />
              <label><input type="checkbox" /> T-Shirts</label><br />
              <label><input type="checkbox" /> Joggers</label><br />
              <label><input type="checkbox" /> Accessories</label>
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="sort" className="acc-toggle" />
            <label htmlFor="sort" className="acc-title">Sort By</label>

            <div className="acc-content">
              <label
                ><input type="radio" name="sort" /> Price: Low to High</label
              ><br />
              <label
                ><input type="radio" name="sort" /> Price: High to Low</label
              >
            </div>
          </div>

          <div className="accordion">
            <input type="checkbox" id="size" className="acc-toggle" />
            <label htmlFor="size" className="acc-title">Size</label>

            <div className="acc-content">
              <label><input type="checkbox" /> S</label><br />
              <label><input type="checkbox" /> M</label><br />
              <label><input type="checkbox" /> L</label><br />
              <label><input type="checkbox" /> XL</label><br />
              <label><input type="checkbox" /> XXL</label>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-items">
        <div className="shop-heading-filter">
          <h3 style={{marginBottom: '10px', padding: '5px'}}>
            Mens Hoodies and Sweatshirts
          </h3>
          {/* <div className="product-filter">
            <div className="accordion">
              <input type="checkbox" id="sort" className="acc-toggle" />
              <label htmlFor="sort" className="acc-title">Sort By</label>

              <div className="acc-content">
                <label
                  ><input type="radio" name="sort" /> Price: Low to High</label
                ><br />
                <label
                  ><input type="radio" name="sort" /> Price: High to Low</label
                >
              </div>
            </div>
          </div> */}
        </div>

        <div className="card">
          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 <strike>₹2,599</strike> 52% off</p>
            </div>
          </div>

          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 ₹2,599 52% off</p>
            </div>
          </div>

          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 ₹2,599 52% off</p>
            </div>
          </div>

          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 ₹2,599 52% off</p>
            </div>
          </div>

          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 ₹2,599 52% off</p>
            </div>
          </div>

          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 ₹2,599 52% off</p>
            </div>
          </div>

          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 ₹2,599 52% off</p>
            </div>
          </div>

          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 ₹2,599 52% off</p>
            </div>
          </div>

          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 ₹2,599 52% off</p>
            </div>
          </div>

          <div className="card-box">
            <div className="card-img">
              <img
                src="https://images.bewakoof.com/t320/men-s-grey-mickey-graphic-printed-oversized-hoodies-596779-1760101460-1.jpg"
                alt=""
              />
            </div>
            <div className="card-text">
              <h3>bewakoof x disney</h3>
              <button className="wishlist-btn">
                <i className="fa-regular fa-heart"></i>
              </button>
              <p>Price: ₹1,229 ₹2,599 52% off</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
