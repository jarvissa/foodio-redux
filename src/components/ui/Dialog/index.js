import Card from "../Card";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Dialog = (props) => {
  const small = props.small && "max-w-sm";
  const medium = props.medium && "max-w-md";
  const large = props.large && "max-w-lg";

  const classes = {
    small,
    medium,
    large,
  };

  const generateDialog = () => {
    let className =
      "absolute w-11/12 top-1/2 left-1/2 p-5 transform -translate-x-1/2 -translate-y-1/2 bg-white";

    for (const prop in classes) {
      if (classes[prop]) {
        className += " " + classes[prop];
      }
    }

    return className;
  };

  let className = generateDialog();

  if (props.className) {
    className = `${className} ${props.className}`;
  }

  const handleClick = (event) => {
    if (event.target.classList.value.includes("overlay")) {
      props.onChange();
    }
  };

  return props.state ? (
    ReactDOM.createPortal(
      <div
        className="overlay fixed inset-0 z-50 bg-black bg-opacity-60 transition-all"
        onClick={handleClick}
      >
        <Card className={className}>
          <header className="text-2xl font-bold text-center">
            {props.title}
          </header>

          {props.children}
        </Card>
      </div>,
      document.getElementById("dialogs")
    )
  ) : (
    <Fragment></Fragment>
  );
};

export default Dialog;
