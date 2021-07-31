import ReactDOM from "react-dom";
import styles from "./index.module.css";

function Loading() {
  return ReactDOM.createPortal(
    <div className="overlay fixed inset-0 z-50 bg-black bg-opacity-60 transition-all">
      <div className={styles.loading}></div>
    </div>,
    document.getElementById("loading")
  );
}

export default Loading;
