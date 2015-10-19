var React = require('react/addons');
var ProductCard = require('./productcard');
var ProductSlideOut = require('./productsslideout');
var ProductList = React.createClass({
  render: function() {

    var handleClick = this.props.open;
    
    return (
        <div className="cardWrap">
            {this.props.products.map(function (product, index) {
                    return <ProductCard open={handleClick}
                                        key={index}
                                        data={product} />
            })};
            <ProductSlideOut visible={this.props.visible} selected={this.props.selected}  />
        </div>
    );
  }
});
module.exports = ProductList;