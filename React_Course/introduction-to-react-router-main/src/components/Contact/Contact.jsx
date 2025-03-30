import { Outlet } from "react-router-dom";


const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <Outlet></Outlet>
            <p>We are one call away </p>
        </div>
    );
};

export default Contact;