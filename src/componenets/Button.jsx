import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;




// import ButtonSvg from "../assets/svg/ButtonSvg";

// const Button = ({ className, href, onClick, children, px, white }) => {
//   const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-[#00ff00] ${px || "px-7"} ${
//     white ? "text-n-8" : "text-n-1"
//   } ${className || ""}`;

//   const spanClasses = "relative z-10";

//   const sciFiClasses = `relative px-6 py-3 text-[#d1d1d1] font-bold bg-[#0a0f1f] border-2 
//     rounded-lg rounded-tr-[40px] border-transparent transition-all duration-300 
//     before:absolute before:inset-0 before:rounded-lg before:rounded-tr-[40px] 
//     before:border-2 before:border-transparent before:bg-gradient-to-r 
//     before:from-[#202548] before:via-[#3A6EE8] before:to-[#E73EC2] 
//     before:p-[2px] before:-z-10 before:content-[''] hover:text-[#00ff00]`;

//   const renderButton = () => (
//     <button className={`${classes} ${sciFiClasses}`} onClick={onClick}>
//       <span className={spanClasses}>{children}</span>
//       {ButtonSvg(white)}
//     </button>
//   );

//   const renderLink = () => (
//     <a href={href} className={`${classes} ${sciFiClasses}`}>
//       <span className={spanClasses}>{children}</span>
//       {ButtonSvg(white)}
//     </a>
//   );

//   return href ? renderLink() : renderButton();
// };

// export default Button;

