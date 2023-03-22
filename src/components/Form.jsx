import React from "react";
import { useState, useEffect } from "react";

const Form = () => {

    const [petName, setPetName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symptoms, setSymptoms] = useState("");

    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if([petName,owner,email,date,symptoms].includes('')){
            setError(true);
            setErrorText("All fields are mandatory.");
            return;
        }else{
            setError(false);
        }
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center mb-5">
                Patient Follow-up {petName}
            </h2>

            
            <form
            
                onSubmit={handleSubmit}
                className="m-3 bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                >
                {error && (
                    <div className="text-white text-center uppercase font-bold p-3 mb-3 rounded-md bg-red-600">
                        <p>{errorText}</p>
                    </div>
                )}
                <div className="mb-5">
                    <label
                        htmlFor="petName"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Pet Name:
                    </label>
                    <input
                        id="petName"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Pet Name"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="owner"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Owner Name:
                    </label>
                    <input
                        id="owner"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Owner Name"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Email:
                    </label>
                    <input
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Date:
                    </label>
                    <input
                        id="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        ma
                        type="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="symptoms"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Symptoms:
                    </label>
                    <textarea
                        id="symptoms"
                        placeholder="Describe the symptoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={symptoms}
                        onChange={(e)=>setSymptoms(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
                />
            </form>
        </div>
    );
};

export default Form;
