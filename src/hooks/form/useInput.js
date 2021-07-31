import { useReducer } from "react";
import validations from "../../common/validations";

const validate = (field, rules) => {
  let state = { valid: false, error: null };

  if (rules) {
    rules.forEach((rule) => {
      const res = validations[rule](field);

      state = {
        valid: !res,
        error: res,
      };
      return;
    });
  }

  return state;
};

const initialState = {
  value: null,
  valid: false,
  touched: false,
  error: null,
};

const reducer = (state, action) => {
  const { valid, error } = validate(action.field, action.rules);

  switch (action.type) {
    case "change":
    case "blur":
      return {
        value: action.field.value,
        valid,
        touched: true,
        error,
      };

    default:
      return state;
  }
};

export const useInput = (field, rules) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    dispatch({ type: "change", value: event.target.value, field, rules });
  };

  const handleBlur = (event) => {
    dispatch({ type: "blur", value: event.target.value, field, rules });
  };

  return { state, handleChange, handleBlur };
};
