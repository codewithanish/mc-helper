import React from "react";
import ReactTooltip from "react-tooltip";

const Resourcepacks = ({ itemType, itemsList }) => {
  const items =
    itemsList[Object.keys(itemsList).filter((item) => item === itemType)];

  return (
    <div>
      <h1 className="font-bold text-3xl text-gray-700 mb-10">{itemType}</h1>
      <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {items.map((item, i) => {
          return (
            <div key={i}>
              <div
                className="bg-indigo-300 rounded-xl py-9 px-4 max-w-md flex flex-col justify-center items-center m-3 shadow-xl"
                data-for="description"
              >
                <h1 className="text-white font-semibold">{item.name}</h1>
              </div>
              <ReactTooltip id="description" place="bottom" effect="solid">
                {item.description}
              </ReactTooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resourcepacks;
