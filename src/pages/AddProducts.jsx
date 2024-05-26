import { toast } from "react-toastify";


// toast.configure();
const AddProducts = () => {







    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!window.confirm("Are you sure you want to proceed?")) {
            return;
        }

        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const data = { id, title, brand, price, description, image_url };

        try {
            const response = await fetch("http://localhost:3000/shoes", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);

            toast.success("Product added successfully!");

            form.reset();
        } catch (error) {
            toast.error("Failed to add product. Please try again.");
            console.error('There was an error!', error);
        }
    };

    return (
        // <div>
        //     <h1 className="text-5xl font-bold text-center">Add a Product</h1>

        //     <div className="my-16">
        //         <form onSubmit={handleSubmit}>
        //             <div className="mt-2">
        //                 <input
        //                     className="bg-gray-100 p-4 w-full border border-black rounded-lg"
        //                     type="text"
        //                     name="title"
        //                     placeholder="Title"
        //                 />
        //             </div>
        //             <div className="mt-2">
        //                 <input
        //                     className="bg-gray-100 p-4 w-full border border-black rounded-lg"
        //                     type="text"
        //                     name="brand"
        //                     placeholder="Brand"
        //                 />
        //             </div>
        //             <div className="mt-2">
        //                 <input
        //                     className="bg-gray-100 p-4 w-full border border-black rounded-lg"
        //                     type="number"
        //                     name="price"
        //                     placeholder="Price"
        //                 />
        //             </div>
        //             <div className="mt-2">
        //                 <input
        //                     className="bg-gray-100 p-4 w-full border border-black rounded-lg"
        //                     type="text"
        //                     name="description"
        //                     placeholder="Description"
        //                 />
        //             </div>
        //             <div className="mt-2">
        //                 <input
        //                     className="bg-gray-100 p-4 w-full border border-black rounded-lg"
        //                     type="text"
        //                     name="image_url"
        //                     placeholder="Image URL"
        //                 />
        //             </div>
        //             <div className="mt-2">
        //                 <input
        //                     className="bg-gray-100 p-4 w-full border border-black rounded-lg"
        //                     type="text"
        //                     name="id"
        //                     placeholder="ID"
        //                 />
        //             </div>
        //             <div className="mt-2 flex justify-center items-center">
        //                 <input
        //                     className="btn mt-4 w-full bg-red-500 text-white p-4"
        //                     type="submit"
        //                     value="Add product"
        //                 />
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-5xl font-bold text-center text-primary mb-8">Add a Product</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        name="title"
                        placeholder="Title"
                    />
                </div>
                <div className="form-control mb-4">
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        name="brand"
                        placeholder="Brand"
                    />
                </div>
                <div className="form-control mb-4">
                    <input
                        className="input input-bordered w-full"
                        type="number"
                        name="price"
                        placeholder="Price"
                    />
                </div>
                <div className="form-control mb-4">
                    <textarea
                        className="textarea textarea-bordered w-full"
                        name="description"
                        placeholder="Description"
                    />
                </div>
                <div className="form-control mb-4">
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        name="image_url"
                        placeholder="Image URL"
                    />
                </div>
                <div className="form-control mb-4">
                    <input
                        className="input input-bordered w-full"
                        type="text"
                        name="id"
                        placeholder="ID"
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary w-full">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddProducts;