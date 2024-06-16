
// import React, { useEffect, useState } from "react";
// import { FiUser } from "react-icons/fi"; // Importing FiUser icon from react-icons

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [open, setOpen] = useState(false);
//   const menuLinks = [
//     { name: "HOME", link: "#home" },
//     { name: "ABOUT", link: "#about" },
//     { name: "MODULES", link: "#module" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       window.scrollY > 0 ? setSticky(true) : setSticky(false);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full left-0 top-0 z-[999] ${
//         sticky ? "bg-green-800/60 text-white" : "bg-white/80 text-gray-900"
//       }`}
//     >
//       <div className="bg-green-800 flex items-center justify-between">
//         <div className="mx-7">
//           <h4 className="text-4xl font-bold">
//             <span className="text-green-200">FarmPolicy</span>Advisor
//           </h4>
//         </div>
//         <div className="bg-white text-gray-900 md:flex hidden px-7 py-2 font-medium rounded-bl-full">
//           <ul className="flex items-center gap-14 py-1 font-semibold text-xl">
//             {menuLinks.map((menu, i) => (
//               <li key={i} className="hover:text-green-500">
//                 <a href={menu.link}>{menu.name}</a>
//               </li>
//             ))}
//             <li className="hover:text-green-500">
//               <FiUser size={32} className="cursor-pointer" onClick={() => console.log("Profile icon clicked")} />
//             </li>
//           </ul>
//         </div>
//         <div
//           onClick={() => setOpen(!open)}
//           className={`z-[999] ${
//             open ? "text-gray-900" : "text-gray-100"
//           } text-3xl md:hidden m-5`}
//         >
//           <ion-icon name="menu"></ion-icon>
//         </div>
//         <div
//           className={`md:hidden text-gray-900 absolute w-2/3 h-screen
//       px-7 py-2 font-medium bg-white top-0 duration-300 ${
//         open ? "right-0" : "right-[-100%]"
//       }`}
//         >
//           <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//             {menuLinks.map((menu, i) => (
//               <li
//                 onClick={() => setOpen(false)}
//                 key={i}
//                 className="px-6 hover:text-cyan-600"
//               >
//                 <a href={menu.link}>{menu.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi"; // Importing FiUser icon from react-icons
import SignUp from "./SignUp"; // Importing SignUp component

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); // New state to track SignUp visibility
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "MODULES", link: "#module" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProfileIconClick = () => {
    setShowSignUp(true); // Toggle SignUp visibility when profile icon is clicked
  };

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky? "bg-green-800/60 text-white" : "bg-white/80 text-gray-900"
      }`}
    >
      <div className="bg-green-800 flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl font-bold">
            <span className="text-green-200">FarmPolicy</span>Advisor
          </h4>
        </div>
        <div className="bg-white text-gray-900 md:flex hidden px-7 py-2 font-medium rounded-bl-full">
          <ul className="flex items-center gap-14 py-1 font-semibold text-xl">
            {menuLinks.map((menu, i) => (
              <li key={i} className="hover:text-green-500">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
            <li className="hover:text-green-500">
              <FiUser size={32} className="cursor-pointer" onClick={handleProfileIconClick} />
            </li>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showSignUp && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-[999]">
          <SignUp />
        </div>
      )}
    </nav>
  );
};

export default Navbar;