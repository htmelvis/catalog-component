window.jQuery = window.$ = require("jquery");
var React = require('react');
var ProductList = require('./productlist');
var _ = require('lodash');
module.exports = React.createClass({
  getInitialState: function(){
    return {
      data: [],
      isVisible: false,
      selected: {}
    };
  },
  loadProducts: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        var filteredData = _.map(data, function(product, index){
          product.price = parseInt(product.price);
          return product;
        });
        this.setState({data: data});
      }.bind(this)
    });
  },
  handleClick: function(e, product, selectedName){
    //If the one that you clicked on is open close it and thats it
    //If the one you clicked on is closed. Close all open and open the one clicked on
    //wait for click to close all and then open target
    if(this.state.expandedProduct === product.name){
      this.setState({
        selected: product,
        isVisible: !this.state.isVisible,
        expandedProduct: selectedName
      });
    } else {
      this.setState({
        selected: product,
        isVisible: true,
        expandedProduct: selectedName
      });
    }
    
  },
  componentDidMount: function(){
    if(this.isMounted()){
      this.loadProducts();
    }
  },
  componentDidUpdate: function(prevProps,prevState,rootElem){},
  render: function() {
    return (
        <div id="catalog">
          <ProductList products={this.state.data} 
                        selected={this.state.selected} 
                        open={this.handleClick} visible={this.state.isVisible} />
        </div>
    );
  }
});