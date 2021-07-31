function Button(props) {
  const color = props.color ? props.color : "blue";
  const shade = props.shade ? props.shade : 500;

  const base = props.text
    ? `bg-transparent text-${color}-${shade} hover:bg-${color}-100`
    : `bg-${color}-${shade} text-white hover:bg-${color}-${shade + 100}`;

  const rounded = props.rounded && "rounded-3xl";
  const small = props.small && "px-4 py-1";
  const medium = props.medium && "px-6 py-1";
  const large = props.large && "px-8 py-2";
  const block = props.block && "w-full";

  const classes = {
    base,
    rounded,
    small,
    medium,
    large,
    block,
  };

  function generateButton() {
    let className = "flex transition-all";

    for (const prop in classes) {
      if (classes[prop]) {
        className += " " + classes[prop];
      }
    }

    className += " disabled:bg-blue-500 disabled:opacity-50";

    return className;
  }

  let className = generateButton();

  if (props.className) {
    className = `${className} ${props.className}`;
  }

  return (
    <button
      type={props.type ? props.type : "button"}
      className={className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
