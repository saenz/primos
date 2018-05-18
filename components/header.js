import Link from './activeLink'
import classnames from 'classnames'
import Search from './icons/search'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
        let collapseClasses = classnames("collapse navbar-collapse", { "show": this.state.isOpen });

        return (
      		<div>
	            <nav className="navbar navbar-expand-md navbar-light bg-light">
					<Link href="/" as={process.env.BACKEND_URL + '/'}><a className="navbar-brand">PRIMOS</a></Link>
				  	<button className="navbar-toggler" type="button" onClick={this.toggle} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    	<span className="navbar-toggler-icon"></span>
				  	</button>

				  	<div className={collapseClasses} id="navbarSupportedContent">
				    	<ul className="navbar-nav mr-auto">
				      		<li className="nav-item">
				        		<Link href="/about" as={process.env.BACKEND_URL + '/about'} activeClassName='active'>
				        			<a className="nav-link">About</a>
				        		</Link>
				      		</li>
				      		<li className="nav-item">
				        		<Link href="/contact" as={process.env.BACKEND_URL + '/contact'} activeClassName='active'>
				        			<a className="nav-link">Contact</a>
				        		</Link>
				      		</li>
				      		<li className="nav-item">
				        		<Link href="/login" as={process.env.BACKEND_URL + '/login'} activeClassName='active'>
				        			<a className="nav-link">Login</a>
				        		</Link>
				      		</li>
				    	</ul>
				    	<form className="form-inline my-2 my-lg-0">
				      		<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				      		<button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Search /></button>
				    	</form>
				  	</div>
				</nav>
      		</div>
        )
    }
}