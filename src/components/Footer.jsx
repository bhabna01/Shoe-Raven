
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-gray-900 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border-b border-gray-800 pb-6">
                        <h6 className="text-lg font-semibold mb-4">About Us</h6>
                        <p className="text-sm">At Shoe Raven, we're passionate about footwear. Since our inception in 1992, we've been committed to providing the latest trends and highest quality shoes to our customers.</p>
                    </div>
                    <div className="border-b border-gray-800 pb-6">
                        <h6 className="text-lg font-semibold mb-4">Shop</h6>
                        <ul className="list-disc list-inside text-sm">
                            <li>Men's Shoes</li>
                            <li>Women's Shoes</li>
                            <li>Kids' Shoes</li>
                            <li>Sale</li>
                        </ul>
                    </div>
                    <div className="border-b border-gray-800 pb-6">
                        <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
                        <p className="text-sm">123 Main Street, City, Country</p>
                        <p className="text-sm">Email: info@shoeco.com</p>
                        <p className="text-sm">Phone: +1 (123) 456-7890</p>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="flex justify-between items-center">
                    <p className="text-sm">© 2024 Shoe Raven All rights reserved.</p>
                    <nav className="space-x-4">
                        <a href="#" className="text-gray-400 hover:text-indigo-500">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500">
                            Shipping Policy
                        </a>
                    </nav>
                </div>
            </footer>
        </>
    );
};

export default Footer;