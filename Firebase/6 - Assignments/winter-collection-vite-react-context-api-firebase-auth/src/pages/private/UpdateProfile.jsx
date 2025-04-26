import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../PageTitle";

const UpdateProfile = () => {
 
  const { updateUserProfile } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const [nameError, setNameError] = useState("");
  const [formError, setFormError] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!!nameError || !name) {
      setFormError("Please fix the errors above before submitting.");
      return;
    }

    try {
      await updateUserProfile({ displayName: name, photoURL: photo });

      // Show success toast
      toast.success("Profile updated successfully!");

      // Clear input fields
      setName("");
      setPhoto("");
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
   <>
   
   <PageTitle title="Update" />
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
          {formError && <p className="text-sm text-red-500">{formError}</p>}

          {/* Submit */}
          <button type="submit" className="btn bg-blue-700 w-full" disabled={!!nameError || !name}>
            Update
          </button>
        </form>

        <p className="text-center mt-1 text-sm font-semibold">
          Go to{"  "}
          <Link to="/" className="text-green-600 hover:underline font-medium">
            Home
          </Link>
        </p>
      </div>
      
      {/* Toast container */}
      <ToastContainer position="top-center" />
    </div>
   </>
  );
};

export default UpdateProfile;
