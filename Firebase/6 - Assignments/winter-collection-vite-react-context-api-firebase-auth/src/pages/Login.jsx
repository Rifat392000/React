import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import PageTitle from "./PageTitle";

const Login = () => {


  const { userLogin, setUser, googleSignIn , setLoading} = useContext(AuthContext);
  const [error, setError] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        
      })
      .catch((err) => {
        
        setError({ login: err.message });
      })
      .finally
      {
        setLoading(false);
      }
  };

  const oAuthSign = () =>{
    googleSignIn()
    .then((result) => {
      const user = result.user;
      setUser(user);
      
    })
    .catch((err) => {
      setError({ login: err.message });
    })
    .finally
    {
      setLoading(false);
    }
  }

  return (
    <>
    <PageTitle title="Login" />
    <div className="min-h-screen flex justify-center items-center">
      <div className="card w-full max-w-lg p-10 bg-base-100 shadow-xl rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full"
              required
            />
            {error.login && (
              <label className="label">
                <span className="label-text text-sm text-red-600">
                  {error.login}
                </span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <Link className="text-sm text-red-500" to="/auth/forgot-password">
                Forgot Password?
              </Link>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary w-full rounded-lg">
              Login
            </button>
          </div>
        </form>

        <div className="form-control mt-6">
            <button className="btn  w-full rounded-lg flex justify-center items-center gap-2" onClick={oAuthSign} >
            <span>Login With</span><span className="text-2xl"><FcGoogle /></span>
            </button>
          </div>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link className="text-red-500 font-semibold" to="/auth/register">
            Register
          </Link>
        </p>

        <p className="text-center mt-1 text-sm font-semibold">
          Go to{" "}
          <Link to="/" className="text-green-600 hover:underline font-medium">
            Home
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
