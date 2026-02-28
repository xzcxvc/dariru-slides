const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={`${className} relative border-[5px] border-black z-10 block transition-all duration-200`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
