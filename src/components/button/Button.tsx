import React from "react";

import { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps> = ({
	text,
	type,
	onClickButton,
	isSubmit,
	className,
	children
}) => (
	<>
		{isSubmit ? (
			<input
				value={ text }
				type={ type }
				className={ "btn" + " " + className }
				onSubmit={ onClickButton }
			/>
		) : (
			<button
				className={ "btn" + " " + className }
				type={ type }
				onClick={ onClickButton }
			>
				{children}
				{text}
			</button>
		)}
	</>
);
