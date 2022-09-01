import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { clearCart, getCartTotal } from "./redux/features/cartSlice";

const CartContainer = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);
  return (
    <>
      <h2 className="lead-mb-0 mt-2">Your shopping cart</h2>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
        </div>
        <MDBBtn
          color="danger"
          style={{
            width: "140px",
            marginTop: "50px",
          }}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </MDBBtn>
      </footer>
    </>
  );
};

export default CartContainer;
