import { Link, Outlet } from "react-router-dom";
import { FiHome, FiGrid, FiPlus } from "react-icons/fi";
const DashboardLayout = () => {
    return (
        // <div className="grid grid-cols-12">
        //     <div className="col-span-2 bg-gray-300 min-h-screen p-12">
        //         <ul>
        //             <li className="border border-black p-4 text w-full">
        //                 <Link to={"home"}>Dashboard</Link>
        //             </li>
        //             <li className="border border-black p-4 text w-full">
        //                 <Link to={"all-products"}>All Products</Link>
        //             </li>
        //             <li className="border border-black p-4 text w-full">
        //                 <Link to={"add-products"}>Add Product</Link>
        //             </li>
        //             <li className="border border-black p-4 text w-full">
        //                 <Link to={"/"}>Home</Link>
        //             </li>
        //         </ul>
        //     </div>
        //     <div className="col-span-10 p-20">
        //         <Outlet />
        //     </div>
        // </div>
        <div className="grid grid-cols-12">
            <div className="col-span-2 bg-gray-800 text-white min-h-screen p-6">
                <div className="flex items-center justify-center mb-8">
                    <h1 className="text-2xl font-bold">Shoe Raven</h1>
                </div>
                <ul>
                    <li className="border border-gray-700 rounded p-4 mb-2">
                        <Link to={"/"} className="flex items-center text-gray-300 hover:text-white">
                            <FiHome className="mr-2" />
                            Dashboard
                        </Link>
                    </li>
                    <li className="border border-gray-700 rounded p-4 mb-2">
                        <Link to={"all-products"} className="flex items-center text-gray-300 hover:text-white">
                            <FiGrid className="mr-2" />
                            All Products
                        </Link>
                    </li>
                    <li className="border border-gray-700 rounded p-4 mb-2">
                        <Link to={"add-products"} className="flex items-center text-gray-300 hover:text-white">
                            <FiPlus className="mr-2" />
                            Add Product
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-10 p-20 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;