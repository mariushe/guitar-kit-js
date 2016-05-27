var React = require('react');
var render = require('react-dom').render;
var Theory = require('./theory');

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

render(
  <Fretboard />,
  document.getElementById('example')
);
