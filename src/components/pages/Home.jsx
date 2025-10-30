import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState([]);

  const dataItem = async () => {
    let url = "https://anwarbook.onrender.com/api/books/";
    let api = await fetch(url);
    let jdata = await api.json();
    // console.log(jdata)
    setData(jdata);
  };
  useEffect(() => {
    dataItem();
  }, []);

  return (
    <div className="grid lg:grid-flow-row lg:grid-cols-5 lg:row-span-3 lg:p-10 p-6 lg:gap-8 gap-5 m-auto items-center ">
      {data.map((data, index) => (
        <Link
        to={'/bookdetails/'+ data.id}
          key={index}
          className="flex flex-col border lg:w-64 w-full lg:gap-4 gap-2 m-auto shadow-xl border-gray-400  p-4 rounded-lg "
        >
          <img
            src={data.cover_image}
            alt="Book"
            className="lg:w-56 w-full border border-red-500 rounded-lg h-52 object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <div>
            <h2 className="text-lg text-black font-semibold capitalize">
              title :- {data.title}
            </h2>
            <div className="flex flex-row justify-between">
            <p className="flex flex-row gap-2 items-center">
                <span className="text-lg text-gray-900 font-semibold">₹{data.sale}</span>
                <span className="text-xs font-normal line-through">
                  ₹{data.price}
                </span>
                <span className="text-sm font-semibold text-green-800">
                  {" "}
                  {data.discount} % OFF
                </span>
              </p>
              <span className="items-end"><FaCartPlus/></span>
          </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
