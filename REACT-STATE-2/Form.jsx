import { useState } from "react";

export default function Form() {
 
  let[formData , setFormData] = useState({fullname: "" , username:"" ,password:""})

//   let handleNmeChange = (event) => {
//     setFullname(event.target.value);
//   };

//   let handleUsername = (event) => {
//     setUsername(event.target.value);
//   };

    let handleFormDataOnChange = (event) => {
        let fieldName = event.target.name ;
        let newValue = event.target.value ;
        
        setFormData((currData)=> {
          currData[fieldName] = newValue ;
          return {...currData };
        })
    }

    let handleSubmit = (event) => {
      event.preventDefault();
      setFormData({fullname: "" , username:"" ,password:""})
    }

  return (
    <form>
      <label htmlFor="FullName">FullName : </label>
      <input
        placeholder="enter your full name"
        type="text"
        value={formData.fullname}
        onChange={handleFormDataOnChange}
        id="FullName"
        name="fullname"
      />
      <br/><br/>
      <label htmlFor="username">Username : </label>
      <input
        placeholder="enter your full name"
        type="text"
        value={formData.username}
        onChange={handleFormDataOnChange}
        id="username"
        name="username"
      />
       <br/><br/>
      <label htmlFor="password">Password : </label>
      <input
        placeholder="enter your password"
        type="password"
        value={formData.password}
        onChange={handleFormDataOnChange}
        id="password"
        name="password"
      />
      <br/><br/>
      <button>Submit</button>
    </form>
  );
}
