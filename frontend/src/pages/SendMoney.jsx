import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate= useNavigate();

    const handleTransfer = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("User not logged in.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount: Number(amount)   
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Transfer successful!");
            navigate("/dashboard");
        } catch (err) {
            console.error("Transfer failed:", err.response?.data || err.message);
            alert("Transfer failed: " + (err.response?.data?.message || "Unknown error"));
        }
    };

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                <span className="text-2xl text-white">{name?.[0]?.toUpperCase()}</span>
                            </div>
                            <h3 className="text-2xl font-semibold">{name}</h3>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="amount"
                                    className="text-sm font-medium"
                                >
                                    Amount (in Rs)
                                </label>
                                <input
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    type="number"
                                    id="amount"
                                    placeholder="Enter amount"
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                                />
                            </div>
                            <button
                                onClick={handleTransfer}
                                className="rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white hover:bg-green-600"
                            >
                                Initiate Transfer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
