function Card(props) {
  let className = "rounded-xl shadow";

  if (props.className) {
    className = `${className} ${props.className}`;
  }

  return <div className={className}>{props.children}</div>;
}

export default Card;
