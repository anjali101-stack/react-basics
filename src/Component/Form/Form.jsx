import React, { useState } from "react";

const Form = () => {
    const[data , setData] =  useState([])
  const HandleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let formEntries = Object.fromEntries(formData.entries());
    console.log(formEntries, "Form submitted");
    setData([...data, formEntries])

    e.target.reset();
  };
  return (
    <>
    <div>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>name :</label>
          <input name="name" required />
        </div>
        <div>
          <label>age :</label>
          <input name="age" type="number" required />
        </div>{" "}
        <div>
          <label>Email :</label>
          <input name="email"  type="email"required />
        </div>
        <br />
        <button type="submit" >Submit</button>
      </form>
    </div>
    
    {
        data.length > 0 && (
            <>
            <h1> Submitted data</h1>
            <table border='1' cellPadding= '8' >
                <thead>
                    <tr>
                        <th>name</th>
                         <th>Email</th> 
                         <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>
                                {item.name}
                            </td>
                             <td>
                                {item.email}
                            </td> <td>
                                {item.age}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            </>

        )
    }
    
    </>
  );
};

export default Form;
