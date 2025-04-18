import err from "../assets/error.png";

const Errorpage = () => {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
        <img src={err} alt="" className="w-28 px-4"/>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  };
  
  export default Errorpage;