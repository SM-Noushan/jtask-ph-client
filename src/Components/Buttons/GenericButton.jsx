/* eslint-disable react/prop-types */
const GenericButton = ({
  children,
  className: btnCSS,
  onClick,
  loading,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={`py-2.5 flex items-center justify-center px-8 xl:px-10 gap-x-2 rounded-[10px] hover:brightness-90 disabled:hover:brightness-100 disabled:cursor-not-allowed text-white ${btnCSS}`}
    >
      {children}
    </button>
  );
};

export default GenericButton;
