import React from "react";
import Wrapper from "../../Wrapper";

const Input = React.forwardRef((props, ref) => {
  let className = "";

  if (props.className) {
    className = `${props.className}`;
  }

  return (
    <Wrapper className="flex flex-col">
      <input
        type={props.type ? props.type : "text"}
        id={props.id}
        name={props.name}
        min={props.min}
        ref={ref}
        className={className}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
      {props.message && (
        <span className="text-red-500 text-xs">{props.message}</span>
      )}
    </Wrapper>
  );
});

export default Input;
