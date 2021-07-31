import { useState } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Cart from "../../app/Cart";

function Header() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [cartState, setCartState] = useState(false);

  const changeState = () => {
    setCartState(!cartState);
  };

  return (
    <Fragment>
      <header className="w-full flex flex-col justify-center items-center gap-4 px-5 py-2.5 bg-gray-800 text-white sm:flex-row sm:justify-between sm:gap-0">
        <h1 className="text-4xl font-bold">Foodio</h1>
        <div
          className="flex justify-center items-center px-10 py-3 rounded-3xl bg-gray-700 font-bold cursor-pointer"
          onClick={changeState}
        >
          <span className="material-icons mr-2">shopping_cart</span>
          <span className="mr-3">Your cart</span>
          <span className="px-3 rounded-xl bg-blue-500">{totalAmount}</span>
        </div>
      </header>

      {cartState && <Cart state={cartState} onChange={changeState}></Cart>}
    </Fragment>
  );
}

export default Header;
