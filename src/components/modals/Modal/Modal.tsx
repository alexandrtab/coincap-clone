import { IModalProps } from "./types";

export const Modal: React.FC<IModalProps> = ({ active, setActive, children }) => {
	const handleModalClose = () => {
		setActive(false);
		document.body.classList.toggle("active");
	};

	return (
		<div
			data-testid="modal"
			className={ active ? "modal modal-active" : "modal" }
			onClick={ handleModalClose }
		>
			<div
				data-testid="modal-content"
				className={ active ? "modal__content modal__content-active" : "modal__content" }
				onClick={ (e) => e.stopPropagation() }
			>
				{children}
			</div>
		</div>
	);
};
