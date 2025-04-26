import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "./PageTitle";

const ForPass = () => {
  
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
 

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(isValid ? "" : "Invalid email address");
    setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || !email) {
      setFormError("Please enter a valid email address.");
      return;
    }

    resetPassword(email)
      .then(() => {
       // Show success toast
       setEmail("");
       setEmailError("");
       setFormError("");
      toast.success("Check Your Email");
      })
      .catch((err) => {
        setFormError(err.message || "Failed to reset password. Please try again.");
      });
  };


  return (
   <>
   <PageTitle title="Forgot Password" />
   <div className="min-h-screen flex justify-center items-center">
      <div className="card w-full max-w-lg p-10 bg-base-100 shadow-xl rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Reset Password to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
          </div>

          {formError && <p className="text-sm text-red-500">{formError}</p>}

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full rounded-lg"
              disabled={!!emailError || !email}
            >
              Reset Password
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          <Link className="text-red-500 font-semibold" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
      {/* Toast container */}
      <ToastContainer position="top-right" />
    </div>
   </>
  );
};

export default ForPass;
