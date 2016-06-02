var React = require('react');
var render = require('react-dom').render;
var Theory = require('./theory');
var Generator = require('./generator');

var Fret = React.createClass({
  render: function() {
    return (
      <div className="fret">
        {this.props.fret.note}
      </div>
    );
  }
});

var String = React.createClass({
  render: function() {
    return (
      <div className="string">
        {this.props.string.map(function(fret, i) {
          return <Fret fret={fret} key={i}/>;
        })}
      </div>
    );
  }
});


var Fretboard = React.createClass({
  getInitialState: function() {
    return {
      fretboard: Generator.createFretboard()
    };
  },

  render: function() {
    return (
      <div className="fretboard">
        {this.state.fretboard.map(function(str, i) {
          return <String string={str} key={i}/>;
        })}
      </div>
    );
  }
});

render(
  <Fretboard/>,
  document.getElementById('example')
);
