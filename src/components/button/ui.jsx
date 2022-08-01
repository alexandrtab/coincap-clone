export const Button = ({
  children,
  type,
  onClickButton,
  isSubmit,
  className,
}) => {
  return (
    <>
      {isSubmit ? (
        <input value={children} type={type} className={"btn" + " " + className} onSubmit={onClickButton} />
      ) : (
        <button
          className={"btn" + " " + className}
          type={type}
          onClick={onClickButton}
        >
          {children}
        </button>
      )}
    </>
  );
};