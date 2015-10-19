var React = require('react');
window.jQuery = window.$ = require("jquery");

module.exports = React.createClass({
  clickHandler: function(e){
    this.props.open(e, this.props.data, this.props.data.name);
  },
  render: function() {
    return (
      <div className="card">
        {this.props.data.imgUrl && <img src={this.props.data.imgUrl} alt={this.props.data.name} />}
        {this.props.data.name && <h4>{this.props.data.name}</h4>}
        <button onClick={this.clickHandler}>Buy Now</button>
      </div>
    );
  }
});