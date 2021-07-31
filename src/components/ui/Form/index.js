import React from "react";

const Form = React.forwardRef((props, ref) => {
  let className = "";

  if (props.className) {
    className = `${props.className}`;
  }

  return (
    <form ref={ref} className={className} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
});

export default Form;
