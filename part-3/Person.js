const Person = (props) => {
  let shortName = props.name.length > 8 ? props.name.slice(0, 6) : props.name;

  return (
    <div
      style={{ border: "1px solid black", margin: "1rem", padding: "0.5rem" }}
    >
      <h1>{shortName}</h1>
      <p>Learn some more information about this person.</p>
      <span>
        <h3>Hobbies:</h3>
        <ul>
          {props.hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </span>
      <h3>{props.age > 18 ? "Go vote!" : "You must be 18"}</h3>
    </div>
  );
};
