import React, { useReducer } from "react";

const emptyData = {
  name: "",
  age: "",
  city: "",
  address: "",
};

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};
const About = () => {
  const [state, dispatch] = useReducer(reducer, emptyData);
  console.log(state);
  return (
    <div className="flex flex-col justify-center item-center m-auto max-w-[60%] bg-gray-50">
      <div className="flex flex-col items-center py-8 gap-5">
        <h1 className="text-xl font-bold text-black">About Form</h1>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "name" })
          }
          className="border border-gray-300 px-4 py-2 rounded-lg w-96"
        />
        <input
          type="text"
          placeholder="Enter age"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "age" })
          }
          className="border border-gray-300 px-4 py-2 rounded-lg w-96"
        />
        <input
          type="type"
          placeholder="Enter city"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "city" })
          }
          className="border border-gray-300 px-4 py-2 rounded-lg w-96"
        />
        <input
          type="text"
          placeholder="Enter address"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "address" })
          }
          className="border border-gray-300 px-4 py-2 rounded-lg w-96"
        />
        <button
          onClick={() => console.log(state)}
          className=" hover:border-2 border-gray-400 bg-blue-600 w-96 text-white hover:bg-white hover:text-black hover:border-blue-600 py-2 rounded-lg font-bold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default About;
