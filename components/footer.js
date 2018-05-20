import Twitter from "./icons/twitter";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Button from "reactstrap/lib/Button";
import Link from "next/link";

const ICON_SIZE = 16;

export default () => (
	<div className="container">
		<div className="top">
			<ul className="primary-list">
				<li>
					<Link href="/about" as={process.env.BACKEND_URL + "/about"}>
						<a>ABOUT</a>
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						as={process.env.BACKEND_URL + "/contact"}
					>
						<a>CONTACT</a>
					</Link>
				</li>
				<li>
					<a href="/careers/culture">Our Culture</a>
				</li>
				<li>
					<a href="https://auth0.com">Auth0.com</a>
				</li>
			</ul>
			<ul className="social-list">
				<li>
					<button className="btn btn-sm">
						<Twitter size={ICON_SIZE} />
					</button>
				</li>
				<li>
					<button className="btn btn-sm">
						<Facebook size={ICON_SIZE} />
					</button>
				</li>
				<li>
					<button className="btn btn-sm">
						<Instagram size={ICON_SIZE} />
					</button>
				</li>
			</ul>
		</div>
		<div className="bottom">
			<span>Thanks for playing..</span>
		</div>
		<style jsx>{`
			button {
				border-radius: 50%;
				border: 1px solid #e8e8e8;
				background-color: transparent;
			}

			.top {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				margin-bottom: 40px;
			}

			@media (max-width: 992px) {
				.top {
					flex-direction: column;
				}
			}

			.primary-list {
				list-style-type: none;
				padding: 0;
				margin: 0;
				display: inline-flex;
			}
			@media (max-width: 992px) {
				.primary-list {
					margin-bottom: 32px;
				}
			}

			.primary-list li {
				font-size: 14px;
				font-weight: 500;
				text-align: center;
				margin: 0 16px;
			}
			@media (max-width: 768px) {
				.primary-list li {
					margin: 0 0.5em;
				}
			}

			.primary-list li a {
				color: #333333;
				line-height: 1.4;
				display: block;
				padding: 0.25em 0.5em;
			}

			.social-list {
				list-style-type: none;
				margin: 0;
				padding: 0;
				display: flex;
			}

			.social-list li {
				margin: 0 8px;
			}

			.bottom {
				width: 100%;
				display: flex;
				justify-content: center;
				color: rgba(0, 0, 0, 0.64);
			}
			.bottom {
			}
		`}</style>
	</div>
);
