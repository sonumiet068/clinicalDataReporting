import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AnalyzeData() {
  const {patientId}= useParams();
  const [patientData,setPatientData]=useState('');
  const[isLoading,setLoading]=useState(true);
  const navigate= useNavigate();
  let count =0; 
  useEffect(()=>{
    axios.get('http://localhost:8080/pathLabs/patient/analyze/'+patientId).then(resp=>{
      setPatientData(resp.data);
      setLoading(false);
    }).catch(err=>{
      toast("Patient Analyze Failed to Fetch,Please contact Admin");
    })
  },count)
 
  return (
    <div>
      <h2>PatientDetails:</h2>
      First Name:{!isLoading?patientData.firstName:""}<br/>
      Last Name:{!isLoading?patientData.lastName:""}<br/>
      Age:{!isLoading?patientData.age:""}<br/>
       <h2> Clinical Report:</h2>
       {!isLoading?patientData.clinicalData.map(eachEntry=> <RawCreator item={eachEntry} patientId={patientId} />):""}
        <Link to={'/'} >Back Home</Link>
      
    </div>
  );
}
function RawCreator(props){
 var eachEntry= props.item;
 var patientId= props.patientId;

   return <div>
    <table align="center">
      <tr>
        <td><b>{eachEntry.componentName}</b></td>
      </tr>
      <tr>
        <td>{eachEntry.componentName}</td>
        <td>{eachEntry.componentValue}</td>
        <td>{eachEntry.measuredDateTime!=null?eachEntry.measuredDateTime:" "}</td><br/>
      </tr>
    </table>
   </div>
}

export default AnalyzeData;