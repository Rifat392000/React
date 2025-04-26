
import { Link } from "react-router-dom";
import { TbHomeShare } from "react-icons/tb";
import PageTitle from "./PageTitle";

const Errorpage = () => {

    return (
      <>
        <PageTitle title="Error" />
      <div className="flex min-h-screen justify-center items-center">
       <Link to="/" className="flex flex-col items-center justify-center text-center bg-gray-800 shadow-lg w-full max-w-lg rounded-2xl p-8">
         <TbHomeShare className="mr-2 text-6xl" />
         <p className="text-xl">Go to Home</p>
       </Link>
      </div>
      </>
    );
  };
  
  export default Errorpage;