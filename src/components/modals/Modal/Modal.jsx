export const Modal = ({ active, setActive, children }) => {
  const handleModalClose = () => {
    setActive(false);
    document.body.classList.toggle("active");
  };
  return (
    <div
      className={active ? "modal modal-active" : "modal"}
      onClick={handleModalClose}
    >
      <div
        className={active ? "modal__content modal__content-active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
