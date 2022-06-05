import React, { useState } from "react";

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
  const [userAge, setUserAge] = useState(age);
  return (
    <div>
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>Age: {userAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={() => setUserAge(userAge + 1)}>Birthday Button for {lastName} {firstName}</button>
    </div>
  );
};

export default PersonCard;
