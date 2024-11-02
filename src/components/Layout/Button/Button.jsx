import "./button.scss";

export default function Button({ children }) {
  return (
    <button>
      <span>{children}</span>
    </button>
  );
}
