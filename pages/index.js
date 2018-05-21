import Page from '../components/page'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Home = (props) => (
  <Page title={'About'}>
    <h3>Batman TV Shows</h3>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className='page-item disabled'>
          <a className='page-link' href='#' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
            <span className='sr-only'>Previous</span>
          </a>
        </li>
        <li className='page-item'><a className='page-link' href='#'>1</a></li>
        <li className='page-item active'><a className='page-link' href='#'>2</a></li>
        <li className='page-item'><a className='page-link' href='#'>3</a></li>
        <li className='page-item'>
          <a className='page-link' href='#' aria-label='Next'>
            <span aria-hidden='true'>&raquo;</span>
            <span className='sr-only'>Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </Page>
)

Home.getInitialProps = async function ({ req, query }) {
  const isServer = !!req
  console.log('getInitialProps called:', isServer ? 'server' : 'client')

  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Home
