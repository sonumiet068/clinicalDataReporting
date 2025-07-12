import axios from "axios";
import { useState } from "react";
import { Link} from "react-router-dom";
import { toast } from "react-toastify";

function AddPatient() {
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [age,setAge] = useState(); 

  const handleSubmit = (event)=>{
    event.preventDefault();
    const requestPayLoad = {
      "firstName":firstName,
      "lastName":lastName,
      "age":age
    }
    axios.post('http://localhost:8080/pathLabs/patient/save',requestPayLoad).then(resp=>{
      toast('Patient Save Successfully !')
    }).catch(err=>{
      toast('Patient Failed to save!')
    })
  }
  return (
    <div className="container"  >
      <h2>Create Patient:</h2>
      <form action="" method="Post" >
        <h3>First Name:</h3><br/>
        <input type="text" name="firstName" onChange={e=> setFirstName(e.target.value)} /><br/>
        <h3>Last Name:</h3><br/>
        <input type="text" name="lastName" onChange={e=> setLastName(e.target.value)} /><br/>
        <h3>Age:</h3><br/>
        <input type="number" name="age"  onChange={e=> setAge(e.target.value)} /><br/>
        <button type="button" onClick={handleSubmit.bind(this)}>Confirm</button> <br/>
        <Link to={'/'} >Back Home</Link>
      </form>
    </div>
  );
}

export default AddPatient;
