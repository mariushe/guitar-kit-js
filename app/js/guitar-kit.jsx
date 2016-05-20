var React = require('react');
var ReactDOM = require('react-dom');

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );


var Fretboard = React.createClass({
  render: function() {
    return (
      <div className="fretboard">
        Hello world!
      </div>
    );
  }
});

ReactDOM.render(
  <Fretboard />,
  document.getElementById('example')
);
