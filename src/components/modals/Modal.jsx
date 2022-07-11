export const Modal = ({ active, setActive, children }) => {
	const handleModalClose = () => {
		setActive(false);
		document.body.classList.toggle("active");
	};
	return (
		<div
			className={active ? "modal modal_active" : "modal"}
			onClick={handleModalClose}
		>
			<div
				className={active ? "modal__content modal__content_active" : "modal__content"}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};
