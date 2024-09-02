
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import DropdownForm from './DropdownForm';

type ButtonFormProps = {
  title: string;
  variant: string;
};

const ButtonForm = ({ title, variant }: ButtonFormProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative"> 
      <button
        className={`flex items-center gap-2 rounded-full border ${variant} px-4 py-2`}
        onClick={toggleDropdown}
      >
        <span className="font-semibold">{title}</span>
        {isDropdownOpen ? (
          <IoIosArrowUp className="text-black w-4 h-4" /> 
        ) : (
          <IoIosArrowDown className="text-black w-4 h-4" /> 
        )}
      </button>

      
      {isDropdownOpen && <DropdownForm />}
    </div>
  );
};

export default ButtonForm;
