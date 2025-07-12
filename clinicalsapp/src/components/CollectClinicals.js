import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function CollectClinicals() {
  const {patientId}= useParams();
  const [componentName,setComponentName] = useState();
  const [componentValue,setComponentValue] = useState();
  const [patientData,setPatientData]=useState();
  const[isLoading,setLoading]=useState(true);
  const navigate= useNavigate();
  let count =0; 
  useEffect(()=>{
    axios.get('http://localhost:8080/pathLabs/patient/patientDetails'+'/'+patientId).then(resp=>{
      setPatientData(resp.data);
      setLoading(false);
    })
  },count)
 
  const handleSubmit = (event)=>{
    event.preventDefault();
    const requestPayLoad = {
      "componentName": componentName,
      "componentValue": componentValue,
      'patientId':patientId
    }
    axios.post('http://localhost:8080/pathLabs/api/saveClinicalDatas',requestPayLoad).then(resp=>{
      toast('Clinical Data Save Successfully !')
      navigate('/')
    })
  }
  return (
    <div>
      <h2>PatientDetails:</h2>
      First Name:{!isLoading?patientData.firstName:""}<br/>
      Last Name:{!isLoading?patientData.lastName:""}<br/>
      Age:{!isLoading?patientData.age:""}<br/>
      <h2>Patient Clinical Data:</h2>
      <form action="" method="Post">
        Clinical Entry Type:
       <select name="componentName" onChange={e=> setComponentName(e.target.value)}>
       <option>Select One</option>
       <option value="bp">Blood Pressure(Sys/Dys)</option>
       <option value="hw">Height/Weight</option>
       <option value="heartRate">Heart Rate</option>
       </select><br/>
        Value:
        <input type="text" name="componentValue" onChange={e=> setComponentValue(e.target.value)} /><br/>
        <button type="button" onClick={handleSubmit.bind(this)}>Confirm</button> <br/>
        <Link to={'/'} >Back Home</Link>
      </form>
    </div>
  );
}

export default CollectClinicals;
