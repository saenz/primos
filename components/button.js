const Button = props => (
  <button {...props}>
    {props.children}
    <style jsx>{`
      background: #0077e2;
      box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);
      border-radius: 3px;
      text-transform: uppercase;
      padding: 10px;
      color: #fff;
      border: #0077e2;
    `}</style>
  </button>
);
export default Button;