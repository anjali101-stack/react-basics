import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/MyContext";

const Form = () => {
  const { value, count, setCount } = useContext(MyContext);

  const [data, setData] = useState([]);
  const HandleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let formEntries = Object.fromEntries(formData.entries());
    // console.log("Raw FormData:");
    // for (let pair of formData.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }

    console.log(formEntries, "Form submitted");
    const updatedData = [...data  , formEntries]
    setData(updatedData);

    localStorage.setItem("formData" ,   JSON.stringify(updatedData))
    

    e.target.reset();
  };

  useEffect(()=>{
    let storedData = localStorage.getItem("formData")

    if(storedData){
      console.log(storedData, "this is stored data")
      console.log(JSON.parse(storedData))
      setData(JSON.parse(storedData))
    }

  },[])
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div >
        
        <h1>{value.value}</h1>
        <h1>{count}</h1>

        <button onClick={() => handleCount()}>Increment</button>
        <form onSubmit={HandleSubmit}>
          <div>
            <label>name :</label>
            <input name="name" required />
          </div>
          <div>
            <label>age :</label>
            <input name="age" type="number" required />
          </div>
          <div>
            <label>Phone number</label>
            <input name="phone" type="number" />
          </div>
          <div>
            <label>Email :</label>
            <input name="email" type="email" required />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      {data.length > 0 && (
        <>
          <h1> Submitted data</h1>
          <table border="1" cellPadding="8">
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
                  <td>{item.name}</td>
                  <td>{item.email}</td> <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Form;
