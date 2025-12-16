import React from "react";
//import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingCart, FaTasks } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";



function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: <FaTasks className="text-6xl text-purple-500" />,
      name: "TO_DO_APP",
      demoLink: "https://to-do-frontend-rosy.vercel.app/", // update if needed
      sourceLink: "https://github.com/Arun-IIITD/todo_app",
    },

    {
      id: 4,
      logo: <FaChartLine className="text-6xl text-emerald-500" />
,
      name: "Revenue_forecasting",
      demoLink: "https://hrevenueforecasting-3fgbrcg9fy7idunblgbajx.streamlit.app/",
      sourceLink: "https://github.com/Arun-IIITD/revenue-main",
    },




    {
      id: 3,
      logo: <FaShoppingCart className="text-6xl text-green-500" />,
      name: "QKART",
      demoLink: "https://qkart-qd3l.vercel.app/",
      sourceLink: "https://github.com/Arun-IIITD/QKART",
    },


     {
      id: 2,
      logo: <FaWallet className="text-6xl text-yellow-500" />,
      name: "WALLET_TRACKER",
      demoLink: "https://wallet-tracker-seven-rho.vercel.app/",
      sourceLink: "https://github.com/Arun-IIITD/wallet_tracker",
    },



  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5 underline">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
        {cardItem.map(({ id, logo, name, demoLink, sourceLink }) => (
          <div
            key={id}
            className="md:w-[300px] md:h-[300px] border-2 rounded-lg
                       shadow-lg p-4 cursor-pointer hover:scale-110 duration-300"
          >
            {/* ICON */}
            <div
              className="w-[120px] h-[120px] flex items-center justify-center
                            rounded-full border-2 mx-auto mb-3"
            >
              {logo}
            </div>

            {/* PROJECT NAME */}
            <h2 className="text-center font-bold text-xl mb-4">{name}</h2>

            {/* BUTTONS */}
            <div className="flex justify-around">
              <button
                onClick={() => window.open(demoLink, "_blank")}
                className="bg-blue-500 hover:bg-blue-700 text-white
                           font-bold px-4 py-2 rounded"
              >
                Demo
              </button>

              <button
                onClick={() => window.open(sourceLink, "_blank")}
                className="bg-green-500 hover:bg-green-700 text-white
                           font-bold px-4 py-2 rounded"
              >
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
