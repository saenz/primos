import Page from '../components/page'
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import 'isomorphic-unfetch'
import Error from 'next/error'

export default class Contact extends React.Component {
	static async getInitialProps({ req }) {
		console.log('inside getInitialProps')

	    await new Promise((resolve) => {
      		setTimeout(resolve, 3000)
    	})

	    const res = await fetch('https://api.github.com/repos/zeit/next.js')
	    const statusCode = res.statusCode > 200 ? res.statusCode : false
	    const json = await res.json()
   	 	// const statusCode = 0
    	// const json = { stargazers_count : 500}

	   	console.log("stars=" + json.stargazers_count)
	   	return { statusCode, stars: json.stargazers_count }
  	}

  	render() {
  		if (this.props.statusCode) {
      		return <Error statusCode={this.props.statusCode} />
    	}
  		
  		return (
			<Page title='Contact'>
		    	{this.props.stars}
		        <Row>
		          	<Col>.col</Col>
		        </Row>
		        <Row>
		          	<Col>.col</Col>
		          	<Col>.col</Col>
		          	<Col>.col</Col>
		          	<Col>.col</Col>
		        </Row>
		        <Row>
		          	<Col xs="3">.col-3</Col>
		          	<Col xs="auto">.col-auto - variable width content</Col>
		         	<Col xs="3">.col-3</Col>
		        </Row>
			</Page>
		)
	}
}