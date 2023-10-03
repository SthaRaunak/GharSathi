import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { BiUserCircle, BiSolidLock } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

function SignIn() {
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required(<div style={{ color: "red", fontSize: "14px" }}>Required</div>),
    password: Yup.string().required(
      <div style={{ color: "red", fontSize: "14px" }}>Required</div>
    ),
  });

  const handleSubmit = async (values) => {
    try {
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        // setError(data.message);
        // setLoading(false);
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <section className="bg-slate-100">
      <div className="max-w-[1300px] mx-auto py-6 px-5 ">
        <div className="flex justify-between shadow-xl rounded-3xl  h-[700px]">
          <div className="w-1/2 bg-[#F7F7F7] hidden md:block rounded-l-3xl ">
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
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form className="flex flex-col gap-5 pt-5">
                    <h1 className="text-3xl ">Login to your account </h1>

                    <div className="relative">
                      <p>Email</p>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        className=" bg-gray-100 px-9 sm:w-[400px] w-[370px]  py-2  mt-1 rounded-sm"
                        id="email"
                      />
                      <BiUserCircle className="absolute text-[1.35rem] top-[38px] left-2 text-gray-400" />
                      {errors.email && touched.email ? (
                        <div className="text-red-500 text-sm">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>

                    <div className="relative">
                      <p>Password</p>

                      <Field
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className=" bg-gray-100 px-9 sm:w-[400px] w-[370px] py-2  mb-1 rounded-sm"
                        id="password"
                      />
                      <BiSolidLock className="absolute text-[1.30rem] top-[33px] left-2 text-gray-400" />
                      {errors.password && touched.password ? (
                        <div className="text-red-500 text-sm">
                          {errors.password}
                        </div>
                      ) : null}

                      <button
                        className="text-center w-full block bg-[#34987F] py-2 mt-5 text-white font-medium hover:opacity-95 rounded-sm disabled:bg-slate-600"
                        disabled={loading}
                      >
                        {loading ? "Loading... " : "Sign In"}
                      </button>
                      <OAuth />
                      {error && (
                        <p className="text-red-500 mt-2  w-[400px]">{error}</p>
                      )}
                      <p className="text-sm mt-2">
                        Dont have an account?{" "}
                        <Link to="/signup">
                          <span className="text-[#34987F] font-medium">
                            {" "}
                            Sign Up
                          </span>
                        </Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
