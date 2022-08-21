const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
}

const App = () => {
  return React.createElement(
    'div',
    {},
    [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, { name: 'Fred', animal: 'Cat', breed: 'Angorá' }),
      React.createElement(Pet, { name: 'Shakira', animal: 'Dog', breed: 'Belgium Shepherd' })
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));