var React = require('react');
var render = require('react-dom').render;
var Theory = require('./theory');


var tmpData = [[{"note": "E"}, {"note": "F"}], [{"note": "A"}], [{"note": "D"}]];

var forEachCreate = function(toProcess, creator) {
  var arr = [];
  toProcess.forEach(function(elem) {
    arr.push(creator(elem));
  });
  return arr;
}

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
    var frets = forEachCreate(this.props.string, function(fret) {
      return <Fret fret={fret}/>;
    });
    return (
      <div className="string">
        {frets}
      </div>
    );
  }
});



var Fretboard = React.createClass({
  render: function() {
    var strings = forEachCreate(this.props.fretboard, function(str) {
      return <String string={str}/>;
    });
    return (
      <div className="fretboard">
        {strings}
      </div>
    );
  }
});

render(
  <Fretboard fretboard={tmpData}/>,
  document.getElementById('example')
);
