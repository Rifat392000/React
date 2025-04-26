import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { MdEmail, MdOutlineCategory } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import PageTitle from '../PageTitle';

const DonationDetails = () => {
  
  const data = useLoaderData();

  if (!data) {
    return <div className="text-center mt-10 text-red-500">Data not found.</div>;
  }

  return (
   <>
   <PageTitle title="Details" />
   <div className="max-w-2xl mx-auto mt-10">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={data.image} alt={data.title} className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{data.title}</h2>
          <p className="text-gray-700">{data.description}</p>

          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2">
              <BsInfoCircle className="text-blue-600" />
              <span className="font-medium">Status:</span> {data.status}
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className="text-green-600" />
              <span className="font-medium">Contact:</span> {data.contactInfo}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-600" />
              <span className="font-medium">Division:</span> {data.division}
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineCategory className="text-purple-600" />
              <span className="font-medium">Category:</span> Education
            </p>
          </div>
          <p className="text-center mt-1 text-sm font-semibold">
          Go to{" "}
          <Link to="/" className="text-green-600 hover:underline text-2xl font-medium">
            Home
          </Link>
        </p>
        </div>
      </div>
    </div>
   </>
  );
};

export default DonationDetails;
