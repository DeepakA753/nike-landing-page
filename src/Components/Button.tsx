const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  // fullWidth
}: {
  label: string;
  iconURL: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  // fullWidth: string
}) => {
  console.log(iconURL);
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${backgroundColor ? 
          `${backgroundColor} ${textColor} ${borderColor}` 
          :  "bg-coral-red text-white border-coral-red"
        // } rounded-full ${fullWidth && 'w-full'}"}`}
      } rounded-full 'w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrowRight"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
