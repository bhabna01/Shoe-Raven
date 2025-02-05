import SingleProducts from "./SingleProducts";


const Products = ({ data }) => {
    return (
        <div>
            <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

            <div className="flex gap-2 px-6 justify-center items-center ">
                {
                    // eslint-disable-next-line react/prop-types
                    data.slice(0, 3).map((shoe) => (
                        <SingleProducts key={shoe.id} shoe={shoe} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;