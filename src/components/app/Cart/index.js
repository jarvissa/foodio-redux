import { useSelector } from "react-redux";
import Dialog from "../../ui/Dialog";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Dialog
      large
      state={props.state}
      title="Your cart"
      onChange={props.onChange}
    >
      <main className="mt-5">
        {cartItems.length === 0 && (
          <div className="p-4 bg-red-500 text-white font-bold rounded-xl text-center">
            Your cart is empty!
          </div>
        )}
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id}></CartItem>
        ))}
      </main>

      {/* {ctx.checkoutItems.length > 0 && (
        <footer className="mt-4">
          <div className="flex justify-between mb-4 text-xl font-bold">
            <span>Total:</span>
            <span>≈ ${Math.round(ctx.total)}</span>
          </div>
          <div className="flex justify-end gap-2">
            <Button color="red" shade="500" text onClick={props.onChangeState}>
              <span>Cancel</span>
            </Button>
            <Button onClick={handleClick}>
              <span>Order</span>
            </Button>
          </div>
        </footer>
      )} */}
    </Dialog>
  );
};

export default Cart;
