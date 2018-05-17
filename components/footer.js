import Twitter from './icons/twitter'
import Facebook from './icons/facebook'
import Instagram from './icons/instagram'

const ICON_SIZE = 24

export default () => (	    
    <footer className="footer">
    	<ul className="social-icon-list">
    		<li><Twitter size={ICON_SIZE} color="#9e9e9e" /></li>
      		<li><Facebook size={ICON_SIZE} color="#9e9e9e" /></li>
      		<li><Instagram size={ICON_SIZE} color="#9e9e9e" /></li>
    	</ul>
    	<style jsx>{`
		    .social-icon-list {
		    	display: flex;
		    	flex-direction: row;
		    	flex-wrap: nowrap;
		    	justify-content: center;
		    	align-items: center;
		    	align-content: center;
		    	margin-bottom: 0;
		    	list-style: none;
		    	padding: 0;
		    }
		    .social-icon-list li {
		    	margin-bottom: 0;
		    	display: inline-block;
		    	padding: 1em;
		    }
		    .social-icon-list li:hover {
			  background: rgba(151, 151, 151, 0.23);
			}
		    .footer {
		    	margin-top: 1rem;
		    	background: #e2e2e2;
			    box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);
			    border-radius: 3px;
	   		    padding: 2px;
			    color: #000;
			    border: #0077e2;
			}
	    `}</style>
    </footer>
)