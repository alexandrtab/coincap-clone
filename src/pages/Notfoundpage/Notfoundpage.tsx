import React from "react";
import { Link } from "react-router-dom";

export const Notfoundpage: React.FC = () => (
	<div data-testid="notFound-page"className="not-found">
		<h3>
			This page does not exist :( Return back to
			<Link data-testid="notFound__home-link"to="/">
				<p className="not-found__home">HOME</p>
			</Link>
		</h3>
	</div>
);
