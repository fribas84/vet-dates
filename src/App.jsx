import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientsList from './components/PatientsList';


const App = () => {

  const [patients, setPatients] = useState([]);
  const [patient,setPatient] = useState({});

  return (
    <div className="container mx-auto mt-15">
      <Header
      
      />
      <div className='mt-12 flex'> 
        <Form
          patients = {patients}
          setPatients = {setPatients} />
        <PatientsList
          patients={patients}
          setPatient={setPatient}/>
      </div>
    </div>
  )
}

export default App;
