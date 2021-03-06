
window.jQuery = window.$ = require("jquery");
var React = require('react');
var classNames = require('classnames');

var ProductSlideOut = React.createClass({
  getInitialState: function(){
    return {
      livePrice: 0
    }
  },
  generateProductOptions: function(){
      var options = this.props.selected.productOptions.map(function(option, index){
        return <option value={option.value} key={index}>{option.text}</option>;
      });
     return options;
  },
  updateProductOptions: function(){},
  componentDidMount: function(){},
  componentDidUpdate: function(){
  },
  updatePrice: function(e){
    var selectedOption = e.target.options[e.target.options.selectedIndex];
    var valuePriceUnfiltered = selectedOption.value.split(':')[1];
    var price = valuePriceUnfiltered.split('|')[0];
    this.setState({ livePrice: price });
  },
  render: function() {
    var productSlideClasses = classNames({
      'product-slide-out': true, 
      'visible': this.props.visible,
      'hidden': this.props.visible == false 
    });
    return (
      <div className={productSlideClasses}>
        {this.props.selected.name && <h1>{this.props.selected.name}</h1>}
        <a className="card-closer pull-right">X Close</a>
          <div className="columns small-4">
            {this.props.selected.imgUrl && <img src={this.props.selected.imgUrl} alt={this.props.selected.name} />}
          </div>
          <div className="columns small-8">
            {this.props.selected.description && <p>{this.props.selected.description}</p>}
            {this.props.selected.name && <h4>Purchase {this.props.selected.name}</h4>}
            <div>
              {this.props.selected && <form action="https://secure.usnetting.com/cart">
                <input type="hidden" name="name" value={this.props.selected.name} />
                <input type="hidden" name="code" value={this.props.selected.code} />
                <input type="hidden" name="price" value={this.props.selected.price} />
                <select onChange={this.updatePrice} name="Product Size">
                  <option value="">Select a size</option>
                  {this.props.selected.productOptions ? this.generateProductOptions() : null}
                </select>
                <label>Quantity</label>
                <input name="quantity" type="text" />
                <input type="submit" className="button" value="Buy Now" /> <span
                  className="livePrice">$ {this.state.livePrice}</span>
              </form>
              }

            </div>
          </div>
      </div>
    );

  }
});

module.exports = ProductSlideOut;