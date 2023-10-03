import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <section className="bg-slate-100">
      <div className="max-w-[1300px] mx-auto py-6 px-5 ">
        <div className="flex justify-between shadow-xl">
          <div className="w-1/2 bg-[#F7F7F7] hidden md:block rounded-l-3xl">
            <h2 className="text-2xl   px-7 py-5 pt-[60px] font-medium text-slate-800">
              Rooms for Rent <br /> Where Comfort Meets Convenience.
            </h2>
            <p className="px-7 xl:pe-[200px]">
              Lorem ipsum dolor sit amet imporiosam nam autem, corrupti eaque
              molestias .
            </p>
          </div>
          <div className="lg:w-1/2 w-full pt-[120px] bg-white lg:rounded-r-3xl lg:rounded-none rounded-3xl ">
            <div className="flex flex-col items-center">
              <form action="" className="flex flex-col gap-5 pt-5">
                <h1 className="text-3xl ">Create your account </h1>
                <div>
                  <p>Username</p>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className=" bg-gray-100 px-9 sm:w-[400px] w-[370px] py-2 mt-1"
                    id="username"
                  />
                </div>

                <div>
                  <p>Email</p>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className=" bg-gray-100 px-9 sm:w-[400px] w-[370px]  py-2  mt-1 focus:none"
                    id="email"
                  />
                </div>
                <div>
                  <p>Password</p>

                  <input
                    type="text"
                    placeholder="Enter your password"
                    className=" bg-gray-100 px-9 sm:w-[400px] w-[370px] py-2  mt-1"
                    id="password"
                  />
                  <p className="text-gray-600 text-sm mt-1">
                    Must be atleast 8 letters
                  </p>
                  <button className="text-center w-full bg-[#34987F] py-2 mt-5 text-white font-medium hover:opacity-95 ">
                    Sign Up
                  </button>
                  <p className="text-sm mt-2 pb-[200px]">
                    Already have an account?{" "}
                    <Link to="/signin">
                      <span className="text-[#34987F] font-medium">
                        {" "}
                        Sign In
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
