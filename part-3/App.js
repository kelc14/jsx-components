const App = () => (
  <div>
    <Person name="Suzy" age={25} hobbies={["running", "biking", "swimming"]} />
    <Person name="Fran" age={55} hobbies={["sewing", "knitting", "reading"]} />
    <Person
      name="Anna"
      age={15}
      hobbies={["sports", "social media", "video games"]}
    />
    <Person
      name="Persephone"
      age={15}
      hobbies={["sports", "social media", "video games"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
