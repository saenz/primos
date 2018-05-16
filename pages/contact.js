import Page from '../components/page'
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import 'isomorphic-unfetch'
import ContactForm from '../components/contact-form'
import { Values } from "redux-form-website-template"

export default class Contact extends React.Component {
	onSubmit = (e) => {
		e.preventDefault()
		console.log('inside on submit')
	}

  	render() {
  		return (
			<Page title='Contact'>
				<h5>Contact</h5>
				<ContactForm onSubmit={this.onSubmit}/>
			</Page>
		)
	}
}