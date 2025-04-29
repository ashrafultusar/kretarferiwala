
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

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Orders</h3>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Total</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>#1001</td>
              <td>John Doe</td>
              <td>$230</td>
              <td><span className="text-green-600">Completed</span></td>
            </tr>
            <tr className="border-b">
              <td>#1002</td>
              <td>Jane Smith</td>
              <td>$340</td>
              <td><span className="text-yellow-500">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
