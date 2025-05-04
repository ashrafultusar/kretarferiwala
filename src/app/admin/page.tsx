

export default function Dashboard() {
  return (
    <div className="space-y-8 container mx-auto space-x-4">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
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

     
    </div>
  );
}
