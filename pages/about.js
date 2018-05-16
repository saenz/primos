import Page from '../components/page'
import Button from 'reactstrap/lib/Button'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const About = (props) => (
  	<Page title={"About"}>
	    <h3>About - Batman TV Shows</h3>
	    <ul>
	      {props.shows.map(({show}) => (
	        <li key={show.id}>
	          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
	            <a>{show.name}</a>
	          </Link>
	        </li>
	      ))}
	    </ul>
  	</Page>
)

About.getInitialProps = async function({ req, query }) {

	const isServer = !!req
	console.log('getInitialProps called:', isServer ? 'server' : 'client')

  	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  	const data = await res.json()

  	console.log(`Show data fetched. Count: ${data.length}`)

  	return {
    	shows: data
  	}
}

export default About

