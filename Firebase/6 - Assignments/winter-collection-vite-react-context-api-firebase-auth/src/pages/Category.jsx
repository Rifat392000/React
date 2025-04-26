import { useLoaderData } from "react-router-dom";
import { ViewCard } from "../components";
import Loading from "./Loading";

const Category = () => {
    const  data  = useLoaderData();
  //  data.map(d => console.log(d));
  
  return (
  <div>
    <p className="text-3xl text-center my-10 font-semibold">Donation Category</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {Array.isArray(data) ? (
  data.map((viewdata) => (
    <ViewCard key={viewdata.id} viewdata={viewdata} />
  ))
) : (
 <Loading/>
)}

</div>

  </div>
  )
}

export default Category