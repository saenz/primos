import Header from './header'
import Meta from './meta'
import Footer from './footer'

//import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
//import nprogress from 'nprogress/nprogress.css'

export default ({ children, title = 'This is the default title' }) => (
	<div className="main">
		<Meta title={ title }/>
		<Header />

		<div className="page">
      		{ children }
    	</div>

    	<Footer />

	    <style jsx>{`
	      .main {
	        width: 85%;
	        margin: auto;
	        padding: 10px 0 0 0;
	      }
	      .page {
	        color: #828282;
	        background: #fff;
	        padding: 3px 10px;
	      }
	      @media (max-width: 750px) {
	        .main {
	          padding: 0;
	          width: auto;
	        }
	      }
	    `}</style>
	    
    	{/*<style jsx global>{bootstrap}</style>*/}
	    {/*<style jsx global>{nprogress}</style>*/}

	</div>
)