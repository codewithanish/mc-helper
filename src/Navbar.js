const Navbar = () => {
  return (
    <nav className="bg-indigo-400 w-screen p-1 text-white flex justify-between">
      <h1 className="font-semibold ml-3">MC Helper</h1>
      <div className="flex space-x-3 mr-3 underline">
        <p>Datapacks</p>
        <p>Resourcepacks</p>
        <p>Generators</p>
        <p>More</p>
      </div>
    </nav>
  );
};

export default Navbar;
