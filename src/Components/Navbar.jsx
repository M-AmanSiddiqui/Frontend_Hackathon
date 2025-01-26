// import React from 'react';

// import { Link } from "react-router-dom";
// import { Menu } from 'antd';
// import { RxDividerVertical } from "react-icons/rx";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineMailOutline, MdArrowOutward } from "react-icons/md";
// import { BsTwitterX, BsSearch } from "react-icons/bs";
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { MdOutlineCancel } from "react-icons/md";
// import { FaYoutube } from "react-icons/fa6";


// const { SubMenu } = Menu;

// const Navbar = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const handleMailClick = () => {
//     window.open("mailto:info@stolidzonetechnologies.com", "_blank");
//   };

//   const openMap = () => {
//     window.open("https://maps.app.goo.gl/oM5gTosMRtTYH7zWA", "_blank");
//   };

//   const handleSearchClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };
// const menuItems = [
//     {
//       key: 'home',
//       title: 'HOME',
//       // Since HOME is just a simple link, you can handle it directly without children
//       link: '/' // Assuming this goes to the homepage
//     },
//     {
//       key: 'whereWeOperate',
//       title: 'WEDDING LOANS',
//       children: [
//         {
//           key: 'valima',
//           title: 'VALIMA',
//          },
//         {
//           key: 'furniture',
//           title: 'FURNITURE',
//         },
//         {
//           key: 'food',
//           title: 'FOOD',
        
//         },
//         {
//           key: 'jahez',
//           title: 'JAHEZ',
        
//         },
//       ],
//     },
//     {
//       key: 'home',
//       title: 'HOME CONSTRUCTION LOANS',
//       children: [
//         {
//           key: 'structure',
//           title: 'STRUCTURE',
          
//         },
//         {
//           key: 'finishing',
//           title: 'FINISHING',
         
//         },
//         {
//           key: 'loan',
//           title: 'LOAN',
         
//         },
//  ],
//  },
//  {
//   key: 'business',
//   title: 'BUSINESS STARTUP LOANS',
//   children: [
//     {
//       key: 'stall',
//       title: 'BUY STALL',
      
//     },
//     {
//       key: 'rent',
//       title: 'RENT FOR SHOP',
     
//     },
//     {
//       key: 'assests',
//       title: 'SHOP ASSSESTS',
     
//     },
//     {
//       key: 'machinery',
//       title: 'SHOP MACHINERY',
     
//     },
// ],
// },

// {
//   key: 'education',
//   title: 'EDUCATION LOANS',
//   children: [
//     {
//       key: 'unifee',
//       title: 'UNIVERSITY FEES',
      
//     },
//     {
//       key: 'childfee',
//       title: 'CHILD FEES',
     
//     },
//    ],
// },



//   ];
  

//   return (
//     <header className="fixed top-0  left-0 w-full  h-40 ">

// <div className="flex">
        
//         <div className="flex ml-96 gap-6 mt-2 mb-12">
//   <Link
//     to="https://www.facebook.com/stolidzonetechnologies"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
//   >
//     <FaFacebookF className="text-[#1877F2]" />
//     <span className="text-[#1877F2]">Facebook</span>
//   </Link>
//   <Link
//     to="https://x.com/StolidzoneT"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
//   >
//     <FaYoutube className='text-[#FF0000]'/>
//     <span className='text-[#FF0000]'>Youtube</span>
//   </Link>
//   <Link
//     to="https://www.instagram.com/stolidzone_technologies/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
//   >
//     <FaLinkedinIn className="text-[#0A66C2]" />
//     <span className="text-[#0A66C2]">LinkedIn</span>
//   </Link>
//   <Link
//     to="https://www.instagram.com/stolidzone_technologies/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
//   >
//     <FaInstagram  className="text-[#E4405F]"/>
//     <span className="text-[#E4405F]">Instagram</span>
//   </Link>
// </div> 

//       </div>


//     <div className="flex justify-between items-center   px-8">
//       {/* <Link to="/">
//         <img src={Smit} alt="StolidZone Logo" className="w-52" />
//       </Link> */}
//       <Menu
//   mode="horizontal"
//   className="flex-grow  text-sm justify-center font-bold"
//   triggerSubMenuAction="hover"
// >
//   {menuItems.map((item) => (
//     item.children ? (
//       <SubMenu
//         key={item.key}
//         title={item.title}
//         icon={null}
//         style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
//       >
//         {item.children.map((subItem) => (
//           subItem.children ? (
//             <SubMenu
//               key={subItem.key}
//               title={subItem.title}
//               style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
//             >
//               {subItem.children.map((child) => (
//                 child.children ? (
//                   <SubMenu
//                     key={child.key}
//                     title={child.label}
//                     style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}
//                   >
//                     {child.children.map((subChild) => (
//                       <Menu.Item key={subChild.key}>
//                         <Link to={subChild.link}>{subChild.label}</Link>
//                       </Menu.Item>
//                     ))}
//                   </SubMenu>
//                 ) : (
//                   <Menu.Item key={child.key}>
//                     <Link to={child.link}>{child.label}</Link>
//                   </Menu.Item>
//                 )
//               ))}
//             </SubMenu>
//           ) : (
//             <Menu.Item key={subItem.key}>
//               <Link to={subItem.link}>{subItem.label}</Link>
//             </Menu.Item>
//           )
//         ))}
//       </SubMenu>
//     ) : (
//       <Menu.Item key={item.key}>
//         <Link to={item.link || "#"}>{item.title}</Link>
//       </Menu.Item>
//     )
//   ))}
// </Menu>




//       <div>
      
//       </div>
//       <div className="relative mt-3 flex items-center">
//         <button
//           onClick={handleSearchClick}
//           className="bg-white  p-4  ml-2 rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110"
//         >
//           {!isSearchOpen ? <BsSearch size={20} /> : <MdOutlineCancel size={22} />}
//         </button>
//         <input
//           type="text"
//           placeholder="Search..."
//           className={`ml-2 px-4 py-3  bg-white rounded-full border-2 focus:outline-none transition-all duration-300 ease-in-out ${
//             isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
//           }`}
//         />
//       </div>
//     </div>
//   </header>
  
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import logo from "../assets/images/logo.png"
import { BsSearch, BsList } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";

const { SubMenu } = Menu;

const menuItems = [
  {
    key: "home",
    title: "HOME",
    link: "/",
  },
  {
    key: "weddingLoans",
    title: "WEDDING LOANS",
    
    children: [
      { key: "valima", title: "VALIMA", link: "/valima" },
      { key: "furniture", title: "FURNITURE", link: "/furniture" },
      { key: "food", title: "FOOD", link: "/food" },
      { key: "jahez", title: "JAHEZ", link: "/jahez" },
    ],
  },
  {
    key: "constructionLoans",
    title: "HOME CONSTRUCTION LOANS",
    children: [
      { key: "structure", title: "STRUCTURE", link: "/structure" },
      { key: "finishing", title: "FINISHING", link: "/finishing" },
      { key: "loan", title: "LOAN", link: "/loan" },
    ],
  },
  {
    key: "businessLoans",
    title: "BUSINESS STARTUP LOANS",
    children: [
      { key: "stall", title: "BUY STALL", link: "/stall" },
      { key: "rent", title: "RENT FOR SHOP", link: "/rent" },
      { key: "assets", title: "SHOP ASSETS", link: "/assets" },
      { key: "machinery", title: "SHOP MACHINERY", link: "/machinery" },
    ],
  },
  {
    key: "educationLoans",
    title: "EDUCATION LOANS",
    children: [
      { key: "unifee", title: "UNIVERSITY FEES", link: "/unifee" },
      { key: "childfee", title: "CHILD FEES", link: "/childfee" },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-10">

<div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
  {/* Left Content */}
  <div className="flex items-center space-x-8">
    <div className="flex items-center space-x-2">
      <FiMail className="text-gray-600" />
      <Link
        to="mailto:info@SaylaniWelfareUSA.com"
        className="text-gray-800 hover:text-blue-600"
      >
        info@SaylaniWelfareUSA.com
      </Link>
    </div>
    <div className="flex items-center space-x-2">
      <FiPhone className="text-gray-600" />
      <Link
        to="tel:8337860999"
        className="text-gray-800 hover:text-blue-600"
      >
        833-786-0999
      </Link>
    </div>
    <div className="flex items-center space-x-2">
      <BsGlobe className="text-gray-600" />
      <Link
        to="tel:+923331201585"
        className="text-gray-800 hover:text-blue-600"
      >
        +923331201585
      </Link>
    </div>
  </div>

  {/* Right Button */}
  <Link
    to="/Login"
    className="bg- text-gray-800 bg-gray-200 px-4 py-1 rounded-md hover:bg-black hover:text-white"
  >
    Login
  </Link>
</div>


      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="text-xl font-bold text-blue-600">
          <img src={logo} alt="" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button
            className="text-gray-700 text-2xl focus:outline-none"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <MdOutlineCancel /> : <BsList />}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-8`}
        >
          <Menu mode="horizontal" className="flex flex-col lg:flex-row lg:space-x-6">
            {menuItems.map((item) =>
              item.children ? (
                <SubMenu key={item.key} title={item.title}>
                  {item.children.map((subItem) => (
                    <Menu.Item key={subItem.key}>
                      <Link to={subItem.link}>{subItem.title}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={item.key}>
                  <Link to={item.link || "#"}>{item.title}</Link>
                </Menu.Item>
              )
            )}
          </Menu>
        </div>

        {/* Social Media Links */}
        <div className="hidden lg:flex gap-6">
          <Link to="https://www.facebook.com/stolidzonetechnologies" target="_blank">
            <FaFacebookF className="text-blue-700" />
          </Link>
          <Link to="https://x.com/StolidzoneT" target="_blank">
            <FaYoutube className="text-red-600" />
          </Link>
          <Link to="https://www.linkedin.com/company/stolidzonetechnologies" target="_blank">
            <FaLinkedinIn className="text-blue-500" />
          </Link>
          <Link to="https://www.instagram.com/stolidzone_technologies/" target="_blank">
            <FaInstagram className="text-pink-600" />
          </Link>
        </div>
      </div>

      {/* Responsive Menu (Mobile Dropdown) */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 py-4 bg-white shadow-md">
          <Menu mode="inline" className="space-y-4">
            {menuItems.map((item) =>
              item.children ? (
                <SubMenu key={item.key} title={item.title}>
                  {item.children.map((subItem) => (
                    <Menu.Item key={subItem.key}>
                      <Link to={subItem.link}>{subItem.title}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={item.key}>
                  <Link to={item.link || "#"}>{item.title}</Link>
                </Menu.Item>
              )
            )}
          </Menu>
        </div>
      )}
    </header>
  );
};

export default Navbar;
