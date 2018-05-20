import styled from 'styled-components'
const ButtonBase = props => <button {...props}>{props.children}</button>
const Button = styled(ButtonBase)`
  /* Rectangle 2: */
  background: #0077e2;
  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);
  border-radius: 3px;
  text-transform: uppercase;
  padding: 10px;
  color: #fff;
  border: #0077e2;
`
export default Button
