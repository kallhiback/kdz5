import React, { useState } from 'react';

function App() {
  const [form,setForm] = useState({
    key1: 'Barbara',
    key2: 'Hepworth',
    key3: 'bhepworth@react.com',
    key4: 'love cats'
  });

  function handleNameChange(e) {
    setForm({
      ...form,
      key1: e.target.value
    })
  }


  function handleSurnameChange(e) {
    setForm({
      ...form,
      key2: e.target.value
    })
  }

  function handleEmailChange(e) {
    setForm({
      ...form,
      key3: e.target.value
    })
  }

  function handleInteresChange(e) {
    setForm({
      ...form,
      key4: e.target.value
    })
  }

  return (
      <div>
        <h1
            style={{
                width: "180px",
                textAlign: "center"
            }}
        >Form</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: "3px solid blue",
            width: "180px",
            padding: "10px",
            borderRadius: "20px"
        }}
        >
          <label>
            Name:<br/>
            <input value={form.key1} onChange={handleNameChange}  type="text"/>
          </label>
          <label>
            Surname:<br/>
            <input value={form.key2} onChange={handleSurnameChange} type="text" />
          </label>
          <label>
            Email:<br/>
            <input value={form.key3} onChange={handleEmailChange} type="email"/>
          </label>
          <label>
            Interests:<br/>
            <input value={form.key4} onChange={handleInteresChange} type="text"/>
          </label>
        </form>
        <div className="data-display"
            style={{
                width: "220px",
                marginTop: "20px",
                border: "3px solid lime",
                borderRadius: "20px",
                paddingLeft: "10px",

            }}
        >
          <p><strong>Имя:</strong> {form.key1}</p>
          <p><strong>Фамилия:</strong> {form.key2}</p>
          <p><strong>Email:</strong> {form.key3}</p>
          <p><strong>Интересы:</strong> {form.key4}</p>
        </div>
      </div>
  );
}

export default App;
