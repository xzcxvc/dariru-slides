const Card = ({ className, children, isActive, ...props }) => {
  return (
    <>
      <div
        className={`absolute inset-0 bg-black z-0 transition-all duration-200  group-hover:translate-3 
                    ${isActive ? "translate-3 w-full" : "translate-2"}`}
      />
      <div
        className={`${className}  hover:cursor-pointer hover:-translate-3 relative border-[5px] border-black z-10 block transition-all duration-200`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
