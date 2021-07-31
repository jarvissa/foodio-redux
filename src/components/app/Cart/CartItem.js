const CartItem = (props) => {
  return (
    <div className="flex justify-between items-center mb-5 pb-3 border-b-2 border-blue-500">
      <div>
        <h4 className="mb-2 text-xl font-bold">{props.item.name}</h4>
        <div className="flex items-center gap-2">
          <h6 className="text-blue-500 font-bold">${props.item.price}</h6>
          <div className="px-2 py-0.5 text-sm font-bold border-2 rounded-md">
            x {props.item.amount}
          </div>
        </div>
      </div>

      <div className="sm:flex sm:gap-2">
        <div className="mb-2 px-4 text-blue-500 text-center border-2 border-blue-500 font-bold cursor-pointer select-none transition-all sm:mb-0 hover:bg-blue-500 hover:text-white">
          -
        </div>
        <div className="px-4 text-blue-500 text-center border-2 border-blue-500 font-bold cursor-pointer select-none transition-all hover:bg-blue-500 hover:text-white">
          +
        </div>
      </div>
    </div>
  );
};

export default CartItem;
