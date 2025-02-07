import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Inventory</div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li className="bg-red-500 p-3 rounded">Dashboard</li>
            <li className="p-3 hover:bg-gray-700">Inventory</li>
            <li className="p-3 hover:bg-gray-700">Sales</li>
            <li className="p-3 hover:bg-gray-700">Purchases</li>
            <li className="p-3 hover:bg-gray-700">Integrations</li>
            <li className="p-3 hover:bg-gray-700">Active Channels</li>
            <li className="p-3 hover:bg-gray-700">Reports</li>
            <li className="p-3 hover:bg-gray-700">Documents</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold">Dashboard</div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded p-2"
            />
            <button className="p-2 bg-red-500 text-white rounded">+ Add</button>
          </div>
        </div>

        {/* Sales Activity */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow rounded p-4 text-center">
            <div className="text-2xl text-blue-600 font-bold">228</div>
            <div>Qty</div>
            <div className="text-gray-600">TO BE PACKED</div>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <div className="text-2xl text-red-600 font-bold">6</div>
            <div>Pkgs</div>
            <div className="text-gray-600">TO BE SHIPPED</div>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <div className="text-2xl text-green-600 font-bold">10</div>
            <div>Pkgs</div>
            <div className="text-gray-600">TO BE DELIVERED</div>
          </div>
          <div className="bg-white shadow rounded p-4 text-center">
            <div className="text-2xl text-gray-800 font-bold">474</div>
            <div>Qty</div>
            <div className="text-gray-600">TO BE INVOICED</div>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white shadow rounded p-4">
            <div className="font-bold text-lg mb-4">Product Details</div>
            <ul>
              <li className="flex justify-between py-2">
                <span>Low Stock Items</span>
                <span className="text-red-500 font-bold">3</span>
              </li>
              <li className="flex justify-between py-2">
                <span>All Item Group</span>
                <span>39</span>
              </li>
              <li className="flex justify-between py-2">
                <span>All Items</span>
                <span>190</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Unconfirmed Items</span>
                <span className="text-red-500 font-bold">121</span>
              </li>
            </ul>
          </div>
          <div className="bg-white shadow rounded p-4">
            <div className="font-bold text-lg mb-4">Purchase Order</div>
            <div>
              <span className="text-gray-600">Quantity Ordered</span>
              <div className="text-2xl font-bold text-blue-600">652.00</div>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow rounded p-4">
            <div className="font-bold text-lg">Top Selling Items</div>
            <div className="flex justify-between items-center mt-4">
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Item"
                  className="rounded-full mx-auto"
                />
                <div>171 pcs</div>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Item"
                  className="rounded-full mx-auto"
                />
                <div>45 sets</div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded p-4">
            <div className="font-bold text-lg">Sales Order</div>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left">Channel</th>
                  <th>Draft</th>
                  <th>Confirmed</th>
                  <th>Packed</th>
                  <th>Shipped</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Direct Sales</td>
                  <td>0</td>
                  <td>50</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
