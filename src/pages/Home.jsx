import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Products data={data}></Products>
            <Accordian></Accordian>
        </div>
    );
};

export default Home;