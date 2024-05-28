import { useState } from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [mail,setMail]=useState();
  const[password,setPassword]=useState();
  const[resdata,setResData]=useState("");
  const[response,setResponse]=useState(false);
  async function resetpswd(e){
    e.preventDefault();
    axios.put( `https://screensagadb.up.railway.app/user/updatepassword/${mail}/${password}`,{
            
    header:{
       'Content-Type':'application/json'
    }
 })
    .then(
      res=>{
        if(res.data){
      
          setResData("Password Updated Successfully. Login Again")
          setResponse(true);
          console.log("update pswd response",res.data);
          // alert('Password Updated Successfully. Login Again');
          // setTimeout(()=>{},3000)
      
      } else{
        console.log("update pswd response",res.data);
        setResData("The email address provided does not correspond to an existing account");
        setResponse(false);
          // alert("The email address provided does not correspond to an existing account")
      }
      }
    )
    .catch(err=>{console.log("update pswd error",err)})
  }

  return (
    <div className="App">
    <div className="row">
    <div className='col-md-3 col-1'></div>
    <div className='col-md-6 col-10'>
      <h1 className="text-light" style={{textAlign: "center"}}>Reset Password</h1>
      <form onSubmit={resetpswd} method="post">
        <div className="form-floating mb-3 mt-3">
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required value={mail} onChange={(e)=>{setMail(e.target.value)}}/>
          <label for="email" className="text-dark">Enter Email</label>
        </div>
        <div className="form-floating mt-3 mb-3">
          <input type="password" className="form-control " id="pwd" placeholder="Reset Password" name="pswd" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <label for="pwd" className="text-dark">Reset Password</label>
        </div>
        {response?<h5 class="text-success">{resdata}</h5>:<h5 class="text-danger">{resdata}</h5>}
        <div className="d-grid">
        <button type="submit"  className="btn btn-danger">Reset Password</button>
      </div>
      </form>
      </div>
      <div className='col-md-3 col-1'></div>
    </div>
    </div>
      
  );
}

export default App;
