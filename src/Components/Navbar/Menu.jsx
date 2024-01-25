import { Link } from "react-router-dom";

function menu() {
    return (
        <>
            <div className="dropdown absolute">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content ml-2 mt-3 z-[1] p-auto text-white shadow bg-[#7880B5] rounded-box w-32"
                >
                    <li className="font-bold  pt-2">
                        <Link className="text-lg" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="font-bold  pt-2">
                        <Link className="text-lg" to="/gallery">
                            Gallery
                        </Link>
                    </li>
                    <li className="font-bold  pt-2">
                        <Link className="text-lg" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="font-bold  pt-2 pb-2">
                        <Link className="text-lg" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default menu;

{
    /* <div className="dropdown">
    <div tabIndex={0} role="button" className="btn m-1">
        Click
    </div>
    <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
        <li>
            <a>Item 1</a>
        </li>
        <li>
            <a>Item 2</a>
        </li>
    </ul>
</div>; */
}
