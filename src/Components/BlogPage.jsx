import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";


const BlogPage = () => {

    const ref = useRef();

    const options = {
        orientation: "landscape",
    };

    const downloadPdf = () => {
        if (typeof window !== "undefined") {
            const pdf = new window.JSPDF("l", "mm", "a4");
            pdf.addHTML(ref.current, options, () => {
                pdf.save("questions.pdf");
            });
        }
    };


    return (
        <div className='mt-12 mb-12'>

            <div className='mb-5 px-6 md:px-12 max-w-2xl mx-auto lg:px-16 block md:flex lg:flex md:justify-between'>
                <h2 className='text-2xl font-bold '>Assignment Question :</h2>
                <ReactToPdf targetRef={ref} filename="questions.pdf">
                    {({ toPdf }) =>
                        <button onClick={toPdf} className="mt-3 md:mt-0 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-md px-4 py-2 text-white font-semibold">
                            Download PDF
                        </button>}
                </ReactToPdf>
            </div>

            <div ref={ref} className="max-w-2xl mx-auto bg-white px-6 md:px-12 lg:px-16 rounded">

                <div tabIndex={0} className="collapse-open mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Tell us the differences between uncontrolled and controlled components ?
                    </div>
                    <div className="collapse-content">
                        <p>Uncontrolled components manage their own state, while controlled components rely on a parent component to manage their state. Uncontrolled components use refs to access and manipulate their values, while controlled components use state and props.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse-open mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How to validate React props using PropTypes ?
                    </div>
                    <div className="collapse-content">
                        <p>To validate React props, by using PropTypes to define the expected types for each prop. Then, when pass the props object to checkPropTypes() to validate and get errors.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse-open mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Tell us what are the difference between Node.js and Express.js ?
                    </div>
                    <div className="collapse-content">
                        <p>Node.js is a runtime environment that allows running JavaScript code outside of a web browser, while Express.js is a web framework built on top of Node.js that simplifies the process of building web applications. Easy to say that Node.js provides the runtime, while Express.js provides the web framework.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse-open mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a custom hook and why will you create a custom hook ?
                    </div>
                    <div className="collapse-content">
                        <p>A custom hook is a reusable piece of code that encapsulates common logic in a React application. You would create a custom hook to share functionality between multiple components or to keep complex logic separate from the component's rendering logic.</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default BlogPage;