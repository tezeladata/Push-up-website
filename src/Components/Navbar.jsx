import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-black text-white p-5 flex justify-between">
            <Link to="/" className="text-lg font-bold hover:underline">
                GOA Push Ups
            </Link>
            <div className="space-x-4">
                <Link to="/members" className="hover:underline">
                    Members List
                </Link>
                <Link to="/winner" className="hover:underline">
                    Winner Page
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;