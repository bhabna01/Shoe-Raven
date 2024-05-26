const Accordian = () => {
    return (
        <>
            <div className="p-6">
                <h1 className="my-8 text-2xl font-bold text-center">Frequently Asked Questions</h1>

                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What is your return policy?
                    </div>
                    <div className="collapse-content">
                        <p>
                            We offer a 30-day return policy. If you are not satisfied with your purchase,
                            you can return it within 30 days for a full refund.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do I track my order?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Once your order has shipped, we will send you an email with the tracking
                            information. You can use this information to track your order on the
                            website.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer international shipping?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Yes, we offer international shipping to many countries. Shipping costs and
                            delivery times vary by location.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How can I contact customer support?
                    </div>
                    <div className="collapse-content">
                        <p>
                            You can contact our customer support team via email at support@example.com or
                            by phone at (123) 456-7890. Our support team is available Monday through Friday
                            from 9am to 5pm.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordian;