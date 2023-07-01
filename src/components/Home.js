import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/product.actions";
import { addToCart } from "../redux/actions/cart.actions";

const Home = () => {
  const { loading, products, error } = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
    
      
    const handleAddToCart = (product) => {
        const isProductInCart = cartItems.some((item) => item.id === product.id);
            if (isProductInCart) {
               console.log("Product already in cart");
            } else {
                dispatch(addToCart(product));
               console.log("Add to cart");
            }
    }

  return (
    <div>
      <h1>All Items</h1>
      <section className="productFlex" >
        {products.length > 0 &&
          products.map((product) => (
            <div
              key={product.id}
              className="outLine"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <p style={{marginLeft: "1rem"}}>Title: {product.title}</p>
              <p style={{marginLeft: "1rem"}}>Price: ${product.price}</p>

              <button className="Btn"  
                onClick={()=> handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Home;
