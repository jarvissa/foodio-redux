import Dialog from "../../ui/Dialog";
import Form from "../../ui/Form";
import Input from "../../ui/Form/Input";
import Button from "../../ui/Button";
import { useInput } from "../../../hooks/form/useInput";
import { useCollection } from "../../../hooks/firebase/firestore/useCollection";
import { useSelector } from "react-redux";
import Loading from "../../ui/Loading";
import { Fragment } from "react";

const Checkout = (props) => {
  const {
    state: nameState,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
    reset: resetName,
  } = useInput(["required"]);

  const {
    state: addressState,
    handleChange: handleAddressChange,
    handleBlur: handleAddressBlur,
    reset: resetAddress,
  } = useInput(["required"]);

  const {
    state: zipState,
    handleChange: handleZipChange,
    handleBlur: handleZipBlur,
    reset: resetZip,
  } = useInput(["required"]);

  const { error, loading, add } = useCollection("orders");

  const { cartItems, totalAmount, totalPrice } = useSelector(
    (state) => state.cart
  );

  const handleSubmit = async () => {
    try {
      await add({
        name: nameState.value,
        address: addressState.value,
        zip: zipState.value,
        items: cartItems,
        amount: totalAmount,
        price: totalPrice,
      });

      alert("Successful order!");
    } catch (err) {
      alert("An error occurred!");
    } finally {
      resetName();
      resetAddress();
      resetZip();

      props.onChange("");
    }
  };

  return (
    <Fragment>
      {loading && <Loading></Loading>}
      {error && alert("An error occurred!")}
      <Dialog
        large
        state={props.state}
        title="Checkout"
        onChange={props.onChange}
      >
        <main className="mt-5">
          <Form className="flex flex-col gap-3">
            <div>
              <label className="text-sm">Name</label>
              <Input
                name="Name"
                value={nameState.value}
                className={`px-1 border-2 outline-none transition-all ${
                  nameState.error
                    ? "border-red-500 focus:border-red-500"
                    : "focus:border-blue-500"
                }`}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                message={nameState.error}
              ></Input>
            </div>

            <div>
              <label className="text-sm">Address</label>
              <Input
                name="Address"
                value={addressState.value}
                className={`px-1 border-2 outline-none transition-all ${
                  addressState.error
                    ? "border-red-500 focus:border-red-500"
                    : "focus:border-blue-500"
                }`}
                onChange={handleAddressChange}
                onBlur={handleAddressBlur}
                message={addressState.error}
              ></Input>
            </div>

            <div>
              <label className="text-sm">ZIP code</label>
              <Input
                name="ZIP code"
                value={zipState.value}
                className={`px-1 border-2 outline-none transition-all ${
                  zipState.error
                    ? "border-red-500 focus:border-red-500"
                    : "focus:border-blue-500"
                }`}
                onChange={handleZipChange}
                onBlur={handleZipBlur}
                message={zipState.error}
              ></Input>
            </div>
          </Form>
        </main>

        <footer className="mt-4">
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
            <Button type="submit" medium rounded onClick={handleSubmit}>
              <span>Submit</span>
            </Button>
          </div>
        </footer>
      </Dialog>
    </Fragment>
  );
};

export default Checkout;
