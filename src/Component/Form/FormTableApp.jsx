import React, { useState } from 'react';

const FormTableApp = () => {
  const [formEntries, setFormEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use FormData to get form values
    const formData = new FormData(e.target);
    const newEntry = Object.fromEntries(formData.entries());

    // Add new entry to the list
    setFormEntries([...formEntries, newEntry]);

    // Reset the form
    e.target.reset();
  };

  return (
    <div className="p-4">
      <h2>Fill the Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" required />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" type="email" required />
        </div>
        <div>
          <label>Age: </label>
          <input name="age" type="number" required />
        </div>
        <button type="submit">Submit</button>
      </form>

      {formEntries.length > 0 && (
        <>
          <h3>Submitted Data</h3>
          <table border="1" cellPadding="5" style={{ marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {formEntries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default FormTableApp;
