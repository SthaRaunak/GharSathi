import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-[1300px] mx-auto py-3 px-5 flex items-center justify-between">
          <Link to="/">
            <h1 className="text-[2rem] font-semibold">
              <span className="text-gray-900">Ghar</span>
              <span className="text-[#34987F]">Sathi</span>
            </h1>
          </Link>
          <ul className="gap-9 text-lg  hidden md:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Listings</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>Contact</li>
          </ul>
          <div>
            <ul className="flex gap-4">
              {!currentUser ? (
                <>
                  <Link to="/signin">
                    <li className="border-2 border-[#34987F] rounded-3xl md:py-2 py-1 px-4 bg-[#34987F] text-white">
                      SignIn
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li className="border-2 rounded-3xl md:py-2 py-1 px-4">
                      SignUp{" "}
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <ul className="flex items-center gap-2">
                    <li className="border-2 rounded-3xl md:py-2 py-1 px-4 cursor-pointer">
                      Log Out
                    </li>

                    <Link to="/profile">
                      <img
                        src={currentUser.avatar}
                        alt=""
                        className="border-2 w-[43px] h-[42px] rounded-full object-cover cursor-pointer"
                      />
                    </Link>
                  </ul>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
      <section className="bg-gray-200 text-center py-[8px] md:text-sm text-[0.790rem]">
        Overseas trip? Get the latest information on travel guides
        asdasdasdasdasdasd
      </section>
    </>
  );
}

export default Header;
