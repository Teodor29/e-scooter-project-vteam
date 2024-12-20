import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

function Account({ onLogout }) {
    return (
        <div className="main-content account">
            <div className="page-header">
                <Link to="/profile">
                    <FaArrowLeft className="back" />
                </Link>
                <h1>Account</h1>
            </div>

            <div className="page-footer">
                <Link to="/">
                    <button onClick={onLogout}>Logout</button>
                </Link>
                <Link to="/">
                    <button className="delete-button">Delete Account</button>
                </Link>
            </div>
        </div>
    );
}

export default Account;