import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, checkout } from "../redux/actions/cart.actions";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    dispatch(checkout());
  };

  const cartTotal = cartItems.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h1>Cart Page</h1>
      <div className="cartContainer">
        <div className="productList">
          
          <div className="productFlex">
            {cartItems.map((product) => (
              <div key={product.id} className="outLine">
                <img src={product.thumbnail} alt={product.title} />
                <p style={{marginLeft: "1rem"}}>{product.title}</p>
                <p style={{marginLeft: "1rem"}}>${product.price}</p>
                <button className="Btn" onClick={() => handleRemoveFromCart(product.id)}>
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cartSummary">
          <h2>Checkout List</h2>
          <div>

              {cartItems.map((product) => (
                <div key={product.id} className="seperator-column">
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                </div>
              ))}
              <hr />
              <div className="seperator">
              <p>Total:</p>
              <p>${cartTotal}</p>
              </div>
              <hr />
            </div>
            <button className="Btn2" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
  );
};

export default CartPage;
