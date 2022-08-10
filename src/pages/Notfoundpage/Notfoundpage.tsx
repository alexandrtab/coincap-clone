import React from "react";
import { Link } from "react-router-dom";

export const Notfoundpage: React.FC = () => (
	<div className="not-found">
		<h3>
			This page does not exist: :( Return back to
			<Link to="/">
				<p className="not-found__home">HOME</p>
			</Link>
		</h3>
	</div>
);
