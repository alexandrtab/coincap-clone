export interface IButtonProps {
	children?: React.ReactNode;
	text: string;
	type: "button" | "reset" | "submit" | undefined;
	onClickButton: () => void;
	isSubmit: boolean;
	className: string;
}
