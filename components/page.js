// @flow

import * as React from 'react'
import Header from './header'
import Meta from './meta'
import Footer from './footer'

//import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
//import nprogress from 'nprogress/nprogress.css'

type Props = {
  children?: React.Node,
  title?: string
};

export default ({ children, title = 'This is the default title' } : Props) => (
	<div className="container">
		<Meta title={ title }/>

		<div className="wrapper">
		  	<header className="header">
		  		<Header />
		  	</header>
		  	<article className="main">
				{children}		  
			</article>
		  	<aside className="aside aside-1">
		  		Aside 1
		  	</aside>
		  	<aside className="aside aside-2">
		  		Aside 2
		  	</aside>
		  	<footer className="footer">
		  		<Footer />
		  	</footer>
		</div>
	
		<style jsx>{`
			.wrapper {
			  display: flex;  
			  flex-flow: row wrap;
			  font-weight: bold;
			}

			/* this does not work with style-jsx
			.wrapper > * {
			  padding: 10px;
			  flex: 1 100%;
			}
			*/

			.header {
			  	background: #e2e2e2;
			  	padding: 10px;
			  	flex: 1 100%;
			}

			.footer {
			  	background: #c2c2c2;
			  	padding: 10px;
			  	flex: 1 100%;
			}

			.main {
			  	text-align: left;
			  	background: #fff;
			  	padding: 10px;
			  	flex: 1 100%;
			}

			.aside-1 {
			  	background: #efefef;
			  	padding: 10px;
			  	flex: 1 100%;
			}

			.aside-2 {
			  	background: #efefef;
				padding: 10px;
			  	flex: 1 100%;
			}

			@media all and (min-width: 600px) {
			  	.aside { flex: 1 auto; }
			}

			@media all and (min-width: 800px) {
			  	.main    { flex: 3 0px; }
			  	.aside-1 { order: 1; } 
			  	.main    { order: 2; }
			  	.aside-2 { order: 3; }
			  	.footer  { order: 4; }
			}

			body {
			  	padding: 2em; 
			}
		`}</style>	

		<style jsx>{`
			headerx {
				padding: 5px;
				margin-bottom: 5px;
				background-color: #e2e2e2;
			}
		`}</style>	

	    <style jsx>{`
	      .mainx {
	        width: 85%;
	        margin: auto;
	        padding: 10px 0 0 0;
	      }
	      .pagex {
	        color: #828282;
	        background: #fff;
	        padding: 3px 10px;
	      }
	      @media (max-width: 750px) {
	        .mainx {
	          padding: 0;
	          width: auto;
	        }
	      }
	    `}</style>
	    
    	{/*<style jsx global>{bootstrap}</style>*/}
	    {/*<style jsx global>{nprogress}</style>*/}

	</div>
)