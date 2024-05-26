

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                <p className="text-lg text-gray-700 mt-2">Learn more about our company</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Founded in 2010, Shoe Haven started as a small family-owned business with a passion for footwear. Our journey began with a single store in downtown New York City, where we aimed to provide premium quality shoes at affordable prices. Over the years, our commitment to quality and customer satisfaction has helped us grow into one of the leading shoe retailers in the region.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At Shoe Haven, our mission is to empower individuals to step out in style and confidence. We strive to offer a diverse range of footwear options to suit every taste and occasion, from casual sneakers to formal dress shoes. With a focus on innovation and sustainability, we are committed to delivering high-quality products that not only look good but also feel good to wear. Our ultimate goal is to become your go-to destination for all your footwear needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;