import { Image } from "./Image";
// import { buttonProps } from "./button.types";

export const Button = ({ className, icon, text, onclick }) => {
  return (
    <button
      className={`px-8 py-2 bg-lightBlue rounded-full flex justify-center items-center ${
        className || ""
      }`}
      onClick={onclick}
    >
      {icon && (
        <Image
          height="1.2rem"
          width="1.2rem"
          src={icon}
          style={{
            marginRight: "18px",
          }}
        />
      )}
      <span className="text-base font-normal">{text}</span>
    </button>
  );
};
