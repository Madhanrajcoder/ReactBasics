import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
    setName("")
    console.log("Form Submited");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.value)}
            />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
