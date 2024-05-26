
import { Link } from 'react-router-dom';

const SingleProductCardDashboard = ({ shoe, onDelete }) => {
    const { id, title, brand, price, description, image_url } = shoe;

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/shoes/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                onDelete(id);
            });
    };
    return (
        // <div className="card w-96 bg-base-100 shadow-xl">
        //     <figure>
        //         <img src={image_url} alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{title}</h2>
        //         <h3 className="text-xl font-semibold">{brand}</h3>
        //         <h3 className="text-xl font-semibold">{price}</h3>
        //         <p>{description}</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn bg-indigo-500 text-white">
        //                 <Link to={`/products/${id}`}>See details</Link>
        //             </button>
        //             <button className="btn bg-green-600 text-white">
        //                 <Link to={`edit/${id}`}>Edit</Link>
        //             </button>
        //             <button onClick={handleDelete} className="btn bg-red-500 text-white">
        //                 Delete
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg overflow-hidden">
            <figure className="relative w-full h-48 overflow-hidden">
                <img className="object-cover w-full h-full" src={image_url} alt="Shoes" />
            </figure>
            <div className="card-body p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <h3 className="text-lg font-medium text-gray-700 mb-2">{brand}</h3>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-indigo-600">${price}</h3>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn bg-indigo-500 text-white">
                            <Link to={`/products/${id}`}>See details</Link>
                        </button>
                        <button className="btn bg-green-600 text-white">
                            <Link to={`edit/${id}`}>Edit</Link>
                        </button>
                        <button onClick={handleDelete} className="btn bg-red-500 text-white">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCardDashboard;