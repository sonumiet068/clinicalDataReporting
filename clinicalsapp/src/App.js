import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CollectClinicals from './components/CollectClinicals';
import AddPatient from './components/AddPatient';
import { ToastContainer } from 'react-toastify';
import AnalyzeData from './components/AnalyzeData';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collectClinicalsDetails/:patientId' element={<CollectClinicals />}/>
        <Route path='/addPatient' element={<AddPatient />}/>
        <Route path='/analyze/:patientId' element={<AnalyzeData />}/>
      </Routes>
    </div>
  );
}

export default App;
