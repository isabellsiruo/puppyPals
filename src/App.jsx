import { useState } from "react";
import { puppyList } from "./data"; //import puppy data
import "./App.css"; //keep CSS file for styling

function App() {
  //state to hold list of puppies
  const [puppies, setPuppies] = useState(puppyList);

  //state to track selected puppy id
  const [featPupId, setFeatPupId] = useState(null);

  //find selected puppy based on id
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <h1>Puppy List</h1>
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p key={puppy.id} onClick={() => setFeatPupId(puppy.id)}>
            {puppy.name}
          </p>
        ))}
      </div>
      {featPupId && featuredPup && (
        <div className="featured-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
