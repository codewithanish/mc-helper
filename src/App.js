import React from "react";
import ItemsList from "./ItemsList";
import { items } from "./Items";
import Navbar from "./Navbar";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: {},
    };
  }

  componentDidMount() {
    this.setState({ items: items });
  }

  render() {
    return (
      <div className="grid place-items-center">
        <Navbar />
        <header className="flex items-center flex-col mt-10 w-screen">
          <h1 className="text-4xl font-bold text-gray-800 m-2">MC Helper</h1>
          <h2 className="text-3xl font-bold text-gray-700">
            Helpful Tools for Minecraft
          </h2>
          <button className="my-4 bg-indigo-400 text-white font-semibold py-3 rounded-xl w-1/6">
            Explore tools
          </button>
        </header>
        <hr className="w-8/12 border-t-2 border-t-indigo-900 mt-14 mb-14" />
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-indigo-200 rounded-xl">
            {Object.keys(items).map((category, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.keys(items).map((category, i) => (
              <Tab.Panel key={i}>
                <ItemsList itemType={category} itemsList={this.state.items} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
  }
}

export default App;
