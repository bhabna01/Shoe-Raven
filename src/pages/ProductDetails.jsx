
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const shoe = useLoaderData();

    const { brand, description, image_url, price, title } = shoe;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{title}</h1>

            <div className="relative rounded-lg overflow-hidden">
                <img className="object-cover object-center w-full h-96 md:h-[600px]" src={image_url} alt="Product Image" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-xl font-bold">View Details</p>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-semibold">{brand}</h3>
                <h3 className="text-2xl font-semibold text-indigo-600">${price}</h3>
                <p className="text-lg font-light mt-4">{description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;