import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const dataItem = async () => {
    let url = "http://localhost:8000/api/books/";
    let api = await fetch(url);
    let jdata = await api.json();
    // console.log(jdata)
    setData(jdata);
  };
  useEffect(() => {
    dataItem();
  }, []);

  return (
    <div className="flex flex-wrap  p-10 m-auto items-center">
      {data.map((data, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 border w-64 shadow-xl border-gray-400 m-4 p-4 rounded-lg"
        >
          <img
            src={data.cover_image}
            alt="Book"
            className="w-56 border border-red-500 rounded-lg h-52 object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <div>
            <h2 className="text-xl text-gray-800 font-semibold capitalize">
              title :- {data.title}
            </h2>
            <p className="text-gray-700 font-normal text-lg ">
              {" "}
              Description :- {data.description}
            </p>
            <p className="text-gray-700 font-normal text-lg "> Price :- {data.price}</p>
            <p className="text-gray-700 font-normal text-lg ">
              {" "}
              Discount :- {data.discount}%
            </p>
            <p className="text-gray-700 font-normal text-lg "> Sale :- {data.sale}</p>
            {/* <span className="text-lg">{data.price}</span> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
