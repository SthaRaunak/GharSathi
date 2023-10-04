import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiUserCircle, BiSolidLock } from "react-icons/bi";

function Profile() {
  const [formShow, setFormShow] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const handleEditProfile = (e) => {
    e.preventDefault();

    //Here will be api call to edit the data
    setFormShow(false);
  };

  return (
    <section>
      <div className="max-w-[1300px] px-5 mx-auto">
        <h2 className="text-3xl pt-9 font-semibold ">Profile</h2>
        <div className="flex md:flex-row flex-col  gap-8">
          <div className="md:w-[40%] pt-12">
            <img
              src={currentUser.avatar}
              alt="dsd"
              className="w-[200px] mx-auto rounded-full cursor-pointer mb-5"
            />
            {!formShow && (
              <>
                <h5 className="text-lg flex items-center gap-2 text-slate-900">
                  <BiUserCircle className="text-gray-500" />
                  {currentUser.username}
                </h5>
                <h5 className="text-lg flex items-center gap-2 text-slate-900">
                  <BiSolidLock className="text-gray-500" />
                  {currentUser.email}
                </h5>
                <button
                  className="w-full py-2 border-2 mt-6 bg-[#34987F] text-white"
                  onClick={() => {
                    setFormShow(true);
                  }}
                >
                  Edit Profile
                </button>
              </>
            )}
            {formShow && (
              <form action="">
                <p>Username</p>
                <input
                  type="text"
                  placeholder="username"
                  value={currentUser.username}
                  className="border-[1px] border-slate-600 w-full px-4 py-1 mb-2 rounded-sm "
                />
                <p> Email</p>
                <input
                  type="text"
                  placeholder="email"
                  value={currentUser.email}
                  className="border-[1px] border-slate-600 w-full px-4 py-1 rounded-sm"
                />
                <button
                  className="px-5 border-[2px] mt-5 rounded-lg bg-[#34987F] text-white py-[2px] hover:opacity-95 disabled:bg-gray-600"
                  onClick={handleEditProfile}
                >
                  Save
                </button>{" "}
                <button
                  type="button"
                  onClick={() => setFormShow(false)}
                  className="px-5 border-[2px] mt-5 ms-1 rounded-lg bg-gray-500 text-white py-[2px]"
                >
                  Cancel
                </button>
              </form>
            )}

            <div className="w-full py-2 bg-gray-100 rounded-xl mt-5 text-center flex flex-col px-5">
              <h2 className="border-b-2 border-slate-500 mb-5 pb-1">
                Account Setting
              </h2>
              <button className="border-[1px] border-slate-600 rounded-md py-1 mb-3 text-black bg-slate-600 bg-opacity-10">
                {" "}
                Change Password
              </button>
              <button className="border-[1px] border-red-500 rounded-md py-1 font-medium mb-3 text-red-500 bg-red-500 bg-opacity-10">
                Delete Account
              </button>
            </div>
          </div>

          <div className="md:w-[90%]">
            <h2 className="text-xl pb-2">My listings :</h2>

            <div className="bg-gray-100 rounded-2xl h-[535px] w-full "></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
