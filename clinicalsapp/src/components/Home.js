import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [patientData,setPatientData] = useState([])
  const [isLoading,setLoading] = useState(true) 
  let count =0
  useEffect(()=>{
   axios.get('http://localhost:8080/pathLabs/patient/fetchAllPatients')
   .then(resp=>{
    setPatientData(resp.data);
    setLoading(false);
   })
  },count)
  return (
    <div >
      <h2>Patients:</h2>
      <table>
        <thead>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age </th>
        </thead>
        <tbody>
          {!isLoading? patientData.map(patient=> <RowCreator item={patient}/>) : ""}
          <Link to={'/addPatient'}><font size="5">Register Patient </font></Link>
        </tbody>
      </table>

    </div>
  );
}

function RowCreator(props){
  var patient = props.item;
  return <tr>
    <td>{patient.id}</td>
    <td>{patient.firstName}</td>
    <td>{patient.lastName}</td>
    <td>{patient.age}</td>
    <td><Link to={'/collectClinicalsDetails/'+patient.id}>Add Data </Link></td>
    <td><Link to={'/analyze/'+patient.id}>Analyze </Link></td>
  </tr>

}

export default Home;
