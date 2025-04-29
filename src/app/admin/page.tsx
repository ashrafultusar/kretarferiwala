import AllCategoriesProducts from "./AllCategoriesProducts";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Total Sales</h3>
          <p className="text-2xl font-bold mt-2">$25,430</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Orders</h3>
          <p className="text-2xl font-bold mt-2">1,204</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Users</h3>
          <p className="text-2xl font-bold mt-2">452</p>
        </div>
      </div>

      {/* product show  */}
      <AllCategoriesProducts></AllCategoriesProducts>
    </div>
  );
}
