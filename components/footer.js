import Twitter from './icons/twitter'
import Facebook from './icons/facebook'

export default () => (	    
    <footer className="footer">
    	<ul className="socialIconList">
    		<li className="socialIcon"><Twitter size="24" color="#9e9e9e" /></li>
      		<li className="socialIcon"><Facebook size="24" color="#9e9e9e" /></li>
    	</ul>
    	<style jsx>{`
		    .socialIconList {
		    	margin-bottom: 0;
		    }
		    .socialIcon {
		    	display:inline-block;
		    	padding:0 8px;
		    }
		    .footer {
		    	margin-top: 1rem;
		    	background: #e2e2e2;
			    box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);
			    border-radius: 3px;
	   		    padding: 10px;
			    color: #000;
			    border: #0077e2;
			}
	    `}</style>
    </footer>
)