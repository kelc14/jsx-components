const App = () => (
  <div>
    <Tweet
      username="SilkieChicken"
      name="Stevie Chicks"
      date="January 1, 2023"
      message="Bawk Bawk"
    />
    <Tweet
      username="FoxyFox"
      name="Fox McCloud"
      date="January 2, 2023"
      message="Bark Bark"
    />
    <Tweet
      username="SkunksRule"
      name="Primrose"
      date="January 3, 2023"
      message="Smell ya later."
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
