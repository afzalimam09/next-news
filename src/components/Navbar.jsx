"use client";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="shadow dark:bg-gray-900">
            <nav className="container flex justify-between items-center px-6 py-4 ">
                <Link href="/" className="flex justify-center items-center">
                    <h1 className="font-bold text-2xl">News Next</h1>
                </Link>

                <div className="flex gap-2">
                    <Link
                        href="/favorite"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        🤍
                    </Link>
                    <Link
                        href="/login"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
