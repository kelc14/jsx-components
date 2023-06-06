const Tweet = (props) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          <span className="text-primary">{props.username} </span>
          <small>({props.name})</small>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
        <p className="card-text">{props.message}</p>
      </div>
    </div>
  );
};
