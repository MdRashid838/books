import { FaCartPlus } from "react-icons/fa";

const Shimmer = () => {
  return (
    // Outer Grid Container
    <div className="grid lg:grid-flow-row lg:grid-cols-5 lg:row-span-3 lg:p-10 p-6 lg:gap-8 gap-5 m-auto items-center">
      {/* Generates 20 Placeholder Cards */}
      {Array(25)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="flex flex-col border lg:w-64 w-full lg:gap-4 gap-2 m-auto shadow-xl border-gray-400 p-4 rounded-lg bg-gray-100" // Added a default background
          >
            {/* Image Placeholder Div - Apply Shimmer Animation Here */}
            <div
              className="lg:w-56 w-full bg-gray-300 rounded-lg h-52 transform transition-transform duration-300 **animate-pulse**" // Using Tailwind's built-in pulse for simplicity
            ></div>

            {/* Text Placeholders */}
            <div>
              {/* Heading Placeholder */}
              <h2 className="text-lg text-black font-semibold capitalize bg-gray-300 h-6 w-3/4 rounded mb-2">
                {" "}
              </h2>

              <div className="flex flex-row justify-between">
                {/* Price/Discount Placeholder */}
                <p className="flex flex-row gap-2 items-center">
                  <span className="text-lg bg-gray-300 h-6 w-16 rounded"></span>
                  <span className="text-xs font-normal bg-gray-300 h-4 w-10 rounded"></span>
                  <span className="text-sm font-semibold bg-gray-300 h-5 w-20 rounded"></span>
                </p>

                {/* Cart Icon Placeholder (Can remain the actual icon) */}
                <span className="items-end">
                  {" "}
                  <FaCartPlus className="text-gray-400" />{" "}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
