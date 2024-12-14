import React,{useState} from "react";
import '../../../styles/Header_men_women_mobileservice.css'


const Header_Men_Women_MobileCover =({ title, options })=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Handle mouse enter and leave to open and close the dropdown
    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);
  
    return (
      <li 
        className="dropdown" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <span className="dropdown-title">{title}</span>
        
        <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
        {options.map((item, index) => (
          <li key={index} className="dropdown-item">
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
      </li>
    );
}

export {Header_Men_Women_MobileCover}