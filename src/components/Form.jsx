import React from "react";
import { useState, useEffect } from "react";
import ErrorHandler from "./ErrorHandler";

const Form = ({patients, setPatients, patient}) => {

    const [petName, setPetName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symptoms, setSymptoms] = useState("");

    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState();

    useEffect(()=>{
        fillForm();
    },[patient])

    const cleanForm =() => {
        setPetName('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptoms('');
    } 

    const fillForm = ()=>{
        setPetName(patient.petName);
        setOwner(patient.owner);
        setEmail(patient.email);
        setDate(patient.date);
        setSymptoms(patient.symptoms);
    }
    const createId = () =>{
        return Math.random().toString(36).substring(2) + '-' +  Date.now().toString(36)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([petName,owner,email,date,symptoms].includes('')){
            setError(true);
            setErrorText("All fields are mandatory.");
            return;
        }else{
            
            setError(false);
            const objPatient = {
                petName,
                owner,
                email,
                date,
                symptoms
            };

            if(patient.key){
                objPatient.key = patient.key;
                const patientsUpdated = patients.map(px => px.key === patient.key? objPatient: px);
                setPatients(patientsUpdated);
            }
            else{
                objPatient.key = createId();
                setPatients([...patients, objPatient]);
            }
            
            cleanForm();
        }
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center mb-5">
                Patient Follow-up
            </h2>

            
            <form
            
                onSubmit={handleSubmit}
                className="m-3 bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                >
                {error && (
                    <ErrorHandler errorText = {errorText}/>
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
                        value={petName || ''}
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
                        value={owner || ''}
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
                        value={email || ''}
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
                        type="date"
                        value={date || ''}
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
                        value={symptoms || ''}
                        onChange={(e)=>setSymptoms(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
                    value={patient.key? 'Edit Patient':'Add Patient'}
                />
            </form>
        </div>
    );
};

export default Form;
