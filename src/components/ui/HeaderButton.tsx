import Image from "next/image";
import { ReactNode } from "react";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: ReactNode; // Change to ReactNode to support components
  variant: string;
};

const HeaderButton = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant}`} type={type}>
      {icon && (
        typeof icon === "string" ? (
          <Image src={icon} alt={title} width={24} height={24} />
        ) : (
          icon // Render icon component if it's not a string
        )
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default HeaderButton;
