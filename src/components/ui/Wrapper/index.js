function Wrapper(props) {
  let className = "";

  if (props.className) {
    className = `${props.className}`;
  }

  return <div className={className}>{props.children}</div>;
}

export default Wrapper;
