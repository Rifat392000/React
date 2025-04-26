import { Link } from "react-router-dom";
import { useContext, useState, useEffect, useMemo } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from './PageTitle';

const Register = () => {
  
  const { createNewUser, updateUserProfile, logOut } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [passed, setPassed] = useState(0);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [registerError, setRegisterError] = useState("");

  const checks = useMemo(() => ({
    length: password.length >= 6,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  }), [password]);

  useEffect(() => {
    setPassed(Object.values(checks).filter(Boolean).length);
  }, [checks]);

  const getPasswordStrength = () => {
    if (passed <= 2) return { label: "Weak", color: "text-red-500" };
    if (passed <= 4) return { label: "Medium", color: "text-yellow-500" };
    return { label: "Strong", color: "text-green-500" };
  };

  const confirmMatch = password === confirmPassword && confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterError("");
  
    if (!name || nameError || !email || emailError || !password || !confirmMatch || passed < 5) {
      setRegisterError("Please fix the errors above before submitting.");
      return;
    }
  
    try {
      const result = await createNewUser(email, password);
      await updateUserProfile({ displayName: name, photoURL: photo });
  
      await logOut();
  
      // ✅ Toast with 2s duration
      toast.success("Profile registered successfully!", { autoClose: 2000 });
  
      // ✅ Clear form fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhoto("");
      setPasswordFocused(false);
  
    } catch (error) {
      setRegisterError(error.message);
    }
  };
  
  

  return (
    <>
     <PageTitle title="Register" />
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 shadow-lg w-full max-w-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Register Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => {
                const value = e.target.value;
                setName(value);
                setNameError(value.length < 5 ? "Name must be at least 5 characters" : "");
              }}
              required
            />
            {nameError && <p className="text-sm text-red-500 mt-1">{nameError}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
                const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                setEmailError(valid ? "" : "Invalid email address");
              }}
              required
            />
            {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input input-bordered w-full"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => !password && setPasswordFocused(false)}
              required
            />

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-300">
              <input
                id="show-password"
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="show-password">Show Password</label>
            </div>

            {password && (
              <div className={`text-sm mt-2 font-medium ${getPasswordStrength().color}`}>
                Password strength: {getPasswordStrength().label}
              </div>
            )}

            {passwordFocused && (
              <div className="mt-2 text-sm space-y-1">
                <CheckLine valid={checks.length} text="At least 6 characters" />
                <CheckLine valid={checks.lowercase} text="One lowercase letter" />
                <CheckLine valid={checks.uppercase} text="One uppercase letter" />
                <CheckLine valid={checks.number} text="One number" />
                <CheckLine valid={checks.special} text="One special character" />
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label font-medium">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="input input-bordered w-full"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-300">
              <input
                id="show-confirm-password"
                type="checkbox"
                checked={showConfirmPassword}
                onChange={() => setShowConfirmPassword(!showConfirmPassword)}
              />
              <label htmlFor="show-confirm-password">Show Confirm Password</label>
            </div>

            {confirmPassword && (
              <p className={`text-sm mt-1 ${confirmMatch ? "text-green-500" : "text-red-500"}`}>
                {confirmMatch ? "Passwords match" : "Passwords do not match"}
              </p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block font-medium mb-1">Photo URL (optional)</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {registerError && <p className="text-sm text-red-500">{registerError}</p>}

          {/* Submit */}
          <button type="submit" className="btn bg-blue-700 w-full">
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
        <p className="text-center mt-1 text-sm font-semibold">
          Go to{" "}
          <Link to="/" className="text-green-600 hover:underline font-medium">
            Home
          </Link>
        </p>
      </div>
            {/* Toast container */}
            <ToastContainer position="top-right" />
    </div>
    </>
  );
};

// Checklist line component
const CheckLine = ({ valid, text }) => (
  <div className={`flex items-center gap-2 ${valid ? "text-green-500" : "text-red-500"}`}>
    {valid ? <FaCheckCircle /> : <FaTimesCircle />}
    <span>{text}</span>
  </div>
);

export default Register;
