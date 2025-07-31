import React, { useState } from "react";

const FormTableApp = () => {
  const [data, setData] = useState([]);

  const Handlesubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    let entries = Object.fromEntries(formdata.entries());
    
    setData([...data, entries]);

    e.target.reset();
  };

  const HandleDelete = (item) => {
    let updatedDaat =  data.filter((i)=> i !== item)
    setData(updatedDaat)
    console.log(item, "this is from delete dunction")
  
  }
  return (
    <div>
      <form onSubmit={Handlesubmit}>
        <div>
          <label>Name</label>
          <input name="name" type="text" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {data.length > 0 && (
        <div>
          <h1>Form data</h1>

          {
           data.map((item , index) => (
            <div key={index}> 
            <h1>
              {item.name}
            </h1>
            <button onClick={()=>HandleDelete(item)}>delete</button>
            </div>
           ))
          }
        </div>
      )}
    </div>
  );
};

export default FormTableApp;
