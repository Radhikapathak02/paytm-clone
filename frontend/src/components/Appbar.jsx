import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Appbar = () => {
    const navigate = useNavigate();
     

    const handleSignOut = () => {
        localStorage.removeItem("token");
        navigate("/signup");
    };

    return (
        <div className="shadow h-14 flex justify-between items-center px-4">
            <div className="text-lg font-semibold">
                PayTM App
            </div>

            <div className="flex items-center space-x-4">
                <div className="text-base">Hello</div>

                <div className="rounded-full h-10 w-10 bg-slate-200 flex items-center justify-center text-xl font-medium">
                    U
                </div>

                <button
                    onClick={handleSignOut}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};
