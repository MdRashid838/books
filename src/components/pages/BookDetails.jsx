import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Share2 } from "lucide-react";

const BookDetails = () => {
  const [item, setItem] = useState("");
  const [bgFilled, setBgFilled] = useState(false);
  const params = useParams();
  const itemDetails = async () => {
    let data = await fetch(`http://localhost:8000/api/books/${params.id}`);
    let jdata = await data.json();
    // console.log(jdata)
    setItem(jdata);
  };
  useEffect(() => {
    itemDetails();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 px-4 sm:px-6 md:px-12 lg:px-24 lg:gap-0 gap-4 pt-2">
      <div className="sm:w-[50%] w-full bg-white flex justify-center border-r border-gray-400">
        <img className="w-full lg:w-96 rounded-xl py-1" src={item.cover_image} alt="books" />
      </div>
      <div className="sm:w-[50%] w-full mb-20 ">
        <div className=" w-full flex flex-col gap-10 bg-white lg:p-10 px-2 ">
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-2xl font-bold capitalize ">
                {item.books_name}
              </p>
              <p className="flex flex-row gap-2 text-sm">
                <button className=" flex justify-center border rounded-full h-10 w-10 text-center items-center bg-gray-100" onClick={() => setBgFilled(!bgFilled)}>
                  <Heart
                    className={`w-5 h-5 ${
                      bgFilled
                        ? "fill-red-500 text-red-500"
                        : "fill-none text-gray-500"
                    }`}
                  />
                </button>
                <button className=" flex justify-center border rounded-full h-10 w-10 text-center items-center bg-gray-100">
                  <Share2 className="h-5 w-5" />
                </button>
              </p>
            </div>
            <div >
              <div className="flex flex-col lg:flex-row gap-2 text-lg font-normal text-gray-500">
                <span className="flex flex-row gap-2">
                  <p>Author:</p>
                  <p className="text-green-600">{item.author_name}</p>
                </span>
                <span className="flex flex-row gap-2 ">
                  <p>Cover Binding:</p>
                  <p>{item.binding_types}</p>
                </span>
              </div>
              <p className="flex flex-row gap-2 items-center">
                <span className="text-xl font-bold">₹{item.sale}</span>
                <span className="text-sm font-normal line-through">
                  ₹{item.price}
                </span>
                <span className="text-sm font-semibold text-green-800">
                  {" "}
                  {item.discount} % OFF
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className=" p-4 border-gray-400 border rounded-lg bg-gray-50 text-gray-800">
              <ul className="flex flex-col gap-2 capitalize text-sm">
                <li>Title :- {item.title}</li>
                <li>Category :- {item.category_name}</li>
                <li>Language :- {item.language}</li>
                <li>Edition Type :- {item.edition}</li>
                <li>Date of Publication :- {item.publication_date}</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">
                  Description:
                </span>{" "}
                {item.description}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <button className=" flex flex-row lg:gap-2 gap-1 lg:text-lg text-sm items-center font-semibold border border-[#F25922] lg:px-12 px-6 lg:py-3 py-2 rounded-lg text-[#F25922]  hover:bg-[#f4f0ef]">
              {" "}
              <ShoppingCart /> Add To Cart
            </button>
            <button className="text-lg lg:font-semibold font-normal border bg-[#F25922] hover:bg-[#ff7441] lg:px-20 px-8 py-2 lg:py-3 rounded-lg text-white">
              Buy Now
            </button>
          </div>

          {/* <p>id :- {item.id}</p> */}
          {/* <p>Name :- {item.books_name}</p> */}
          <p></p>
          {/* <p>Pages :- {item.total_pages}</p> */}
          {/* <p>Rating :- {item.ratings} Star</p> */}
          {/* <p>Price Rs :- {item.price} $</p> */}
          {/* <p>Discount :- {item.discount} %</p> */}
          {/* <p>Sale Price :- {item.sale} $</p> */}
          {/* <p>Description :- {item.description}</p> */}
          {/* <p>Author  :- {item.author_name}</p> */}
          {/* <p>Category :- {item.category_name}</p> */}
          {/* <p>Is_Available : -{item.availablity}</p> */}
          {/* <p>Language :- {item.language}</p> */}
          {/* <p>Cover Binding :- {item.binding_types}</p> */}
          {/* <p>Edition Type :- {item.edition}</p> */}
          {/* <p>Date of Publication :- {item.publication_date}</p>  */}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
