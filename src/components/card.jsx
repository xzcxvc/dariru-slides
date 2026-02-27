const Card = ({ className, children }) => {
  return (
    <div
      className={`${className} relative border-[5px] border-black z-10 block transition-all duration-200`}
    >
      {children}
    </div>
  );
};

export default Card;
