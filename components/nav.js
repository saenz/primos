import Link from './activeLink'
import classnames from 'classnames'

// eslint-disable-next-line no-undef
export default class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    let collapseClasses = classnames('collapse navbar-collapse', { 'show': this.state.isOpen })

    return (
      <div>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
          <Link href='/'><a className='navbar-brand'>PRIMOS</a></Link>

          <button className='navbar-toggler' type='button' onClick={this.toggle} data-toggle='collapse' data-target='#TopNavbar' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className={collapseClasses} id='TopNavbar'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link href='/about' activeClassName='active'><a className='nav-item nav-link'>About</a></Link>
              </li>
              <li className='nav-item'>
                <Link href='/contact' activeClassName='active'><a className='nav-item nav-link'>Contact</a></Link>
              </li>
              <li className='nav-item'>
                <Link href='/login' activeClassName='active'><a className='nav-item nav-link'>Login</a></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
