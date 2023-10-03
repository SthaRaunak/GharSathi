import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js"
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          Image: result.user.photoURL,
        }),
      });
      const data = await res.json();
      if (data) {
        dispatch(signInSuccess(data));
        navigate("/")
      }
    } catch (error) {
      console.log("Could not sign in with google! Error: ", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className=" cursor-pointer text-center w-full bg-[#fff] py-2 mt-5 text-slate-900 border-slate-900 border-[1px] font-medium hover:opacity-95 rounded-sm disabled:bg-slate-600 flex items-center gap-2 justify-center text-[15px]"
    >
      <FcGoogle className="text-2xl" />
      Google
    </button>
  );
}

export default OAuth;
