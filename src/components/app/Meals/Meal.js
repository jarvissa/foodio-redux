import { useRef } from "react";
import { useDispatch } from "react-redux";
import { required } from "../../../common/validations";
import { useInput } from "../../../hooks/form/useInput";
import { updateCart } from "../../../store/modules/cart";
import Button from "../../ui/Button";
import Input from "../../ui/Form/Input";

function Meal(props) {
  const { name, description, price } = props.meal;
  const amount = useRef("");

  const { state, handleChange, handleBlur } = useInput(amount.current, [
    "required",
  ]);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (required(amount.current)) {
      return;
    }

    dispatch(updateCart({ ...props.meal, amount: +amount.current.value }));
  };

  return (
    <div className="flex flex-col gap-2 mb-5 pb-3 border-b-2 last:mb-0 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
      <div>
        <h5 className="text-lg font-bold">{name}</h5>
        <h6 className="text-sm italic">{description}</h6>
        <h5 className="text-lg font-bold text-blue-500">${price}</h5>
      </div>

      <div className="flex justify-between items-end flex-wrap gap-2 sm:flex-col">
        <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center">
          <label>Amount</label>
          <Input
            type="number"
            name="Amount"
            min="1"
            ref={amount}
            className="w-20 border-2 outline-none sm:w-32"
            onChange={handleChange}
            onBlur={handleBlur}
            message={state.error}
          ></Input>
        </div>
        <Button small disabled={!state.valid} onClick={handleClick}>
          <span className="material-icons mr-1">add</span>
          <span>Add</span>
        </Button>
      </div>
    </div>
  );
}

export default Meal;
