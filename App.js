const ele = React.createElement("h1", {}, "test");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div", {
    id: "parent"
  },
  [React.createElement("div", {
      id: "child2"
    },
    [React.createElement("h1", {}, "Hi H1"), React.createElement("h2", {}, "Hi H2")]
  ),
  React.createElement("div", {
    id: "child2"
  },
  [React.createElement("h1", {}, "Hi H1"), React.createElement("h2", {}, "Hi H2")]
)]);
console.log(parent);
root.render(parent);