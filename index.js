var React = require('react');
//require('./components/testComponent.js');
require('./style/main.scss');
var Catalog = require('./components/catalog.js');
React.render(<Catalog url="/products.json" />, document.getElementById('main'));