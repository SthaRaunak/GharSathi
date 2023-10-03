import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import OAuth from "../components/OAuth";

function SignUp() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Too Short!")
      .max(50, "Too Long!")
      .required(<div style={{ color: "red", fontSize: "14px" }}>Required</div>),
    email: Yup.string()
      .email("Invalid email")
      .required(<div style={{ color: "red", fontSize: "14px" }}>Required</div>),
    password: Yup.string()
      .min(5, "Password Too Short!")
      .required(<div style={{ color: "red", fontSize: "14px" }}>Required</div>),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <section className="bg-slate-100">
      <div className="max-w-[1300px] mx-auto py-6 px-5 ">
        <div className="flex justify-between shadow-xl rounded-3xl  h-[750px]">
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
                  username: "",
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
                    <h1 className="text-3xl ">Create your account </h1>
                    <div>
                      <p>Username</p>
                      <Field
                        name="username"
                        placeholder="Enter your username"
                        className=" bg-gray-100 px-9 sm:w-[400px] w-[370px] py-2 mt-1 rounded-sm"
                      />
                      {errors.username && touched.username ? (
                        <div className="text-red-500 text-sm">
                          {errors.username}
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <p>Email</p>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        className=" bg-gray-100 px-9 sm:w-[400px] w-[370px]  py-2  mt-1 rounded-sm"
                        id="email"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-500 text-sm">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <p>Password</p>

                      <Field
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className=" bg-gray-100 px-9 sm:w-[400px] w-[370px] py-2  mb-1 rounded-sm"
                        id="password"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-red-500 text-sm">
                          {errors.password}
                        </div>
                      ) : null}
                      <p className="text-gray-600 text-sm">
                        Must be atleast 8 letters
                      </p>
                      <button
                        className="text-center w-full bg-[#34987F] py-2 mt-5 text-white font-medium hover:opacity-95 rounded-sm disabled:bg-slate-600"
                        disabled={loading}
                      >
                        {loading ? "Loading... " : "Sign Up"}
                      </button>
                      <OAuth />
                      {error && (
                        <p className="text-red-500 mt-2  w-[400px]">{error}</p>
                      )}
                      <p className="text-sm mt-2">
                        Already have an account?{" "}
                        <Link to="/signin">
                          <span className="text-[#34987F] font-medium">
                            {" "}
                            Sign In
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

export default SignUp;
