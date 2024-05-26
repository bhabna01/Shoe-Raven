import { useEffect, useState } from 'react';
import SingleProductCardDashboard from '../components/dashboard/SingleProductCardDashboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/shoes/")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleDeleteProduct = (id) => {
        // Show confirmation modal
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter((product) => product.id !== id));
            // Show toast after deletion
            toast.success("Product deleted successfully!");
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-3">All Products</h1>
            <div className="y-16 flex flex-wrap justify-center gap-4">
                {products.map((shoe) => (
                    <SingleProductCardDashboard
                        key={shoe.id}
                        shoe={shoe}
                        onDelete={handleDeleteProduct}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;