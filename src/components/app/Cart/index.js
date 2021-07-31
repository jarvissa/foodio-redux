import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import Dialog from "../../ui/Dialog";
import Checkout from "../Checkout";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const [checkoutState, setCheckoutState] = useState(false);

  const handleClick = () => {
    setCheckoutState(true);
  };

  return (
    <Fragment>
      <Dialog
        large
        state={props.state}
        title="Your cart"
        onChange={props.onChange}
      >
        <main className="mt-5">
          {cartItems.length === 0 && (
            <div className="p-4 bg-red-500 text-white font-bold rounded-xl text-center">
              Empty!
            </div>
          )}
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id}></CartItem>
          ))}
        </main>

        {cartItems.length > 0 && (
          <footer className="mt-4">
            <div className="flex justify-between mb-4 text-xl font-bold">
              <span>Total:</span>
              <span>≈ ${Math.round(totalPrice)}</span>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                medium
                rounded
                color="red"
                shade="500"
                text
                onClick={props.onChange}
              >
                <span>Cancel</span>
              </Button>
              <Button medium rounded onClick={handleClick}>
                <span>Order</span>
              </Button>
            </div>
          </footer>
        )}
      </Dialog>

      {checkoutState && (
        <Checkout
          state={checkoutState}
          onChange={() => setCheckoutState(!checkoutState)}
        ></Checkout>
      )}
    </Fragment>
  );
};

export default Cart;
