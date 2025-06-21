import { useEffect, useState } from "react";
import axios from "axios";

export const Balance = () => {
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("User not logged in");
            setLoading(false);
            return;
        }

        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setBalance(res.data.balance);
            setLoading(false);
        }).catch(err => {
            setError("Failed to fetch balance");
            setLoading(false);
        });
    }, []);

    return (
        <div className="flex">
            <div className="font-bold text-lg">Your balance</div>
            <div className="font-semibold ml-4 text-lg">
                {loading ? "Loading..." : error ? "Error" : `Rs ${balance}`}
            </div>
        </div>
    );
};
