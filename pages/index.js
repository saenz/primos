import Page from '../components/page'
import Button from 'reactstrap/lib/Button'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  	<Page title={"Home"}>
	    <h3>Home - Batman TV Shows</h3>
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

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index

