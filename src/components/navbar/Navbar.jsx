import React from "react";
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-[#1F084D] ">
      <section className="container">
        <nav className="nav-bar-items flex flex-wrap justify-around self-center">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="self-center">
            <ul className="flex flex-wrap gap-10 ">
              <li>
                <a href="">Exchange</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-10 self-center">
            <div className="self-center">
              <ul>
                <li className="text-white text-base font-normal underline-[#F18140]">
                  <a href="">Log In</a>
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-[#F18140] py-2 px-4 text-white text-base font-normal">
                Register
              </button>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
