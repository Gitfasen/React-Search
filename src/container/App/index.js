import React, { Component } from 'react';
import logo from '../../logo.svg';
import ListFramework from '../../components/ListFramework';
import './App.sass';

const initialItems = [
  { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
  { name: 'AngularJS', url: 'https://angularjs.org/'},
  { name: 'jQuery', url: 'http://jquery.com/'},
  { name: 'Prototype', url: 'http://www.prototypejs.org/'},
  { name: 'React', url: 'http://facebook.github.io/react/'},
  { name: 'Ember', url: 'http://emberjs.com/'},
  { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
  { name: 'Dojo', url: 'http://dojotoolkit.org/'},
  { name: 'Mootools', url: 'http://mootools.net/'},
  { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
  { name: 'Lodash', url: 'http://lodash.com/'},
  { name: 'Moment', url: 'http://momentjs.com/'},
  { name: 'Express', url: 'http://expressjs.com/'},
  { name: 'Koa', url: 'http://koajs.com/'},
];

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: initialItems,
    };
  }
  
  filterList = e => {
    const valueText = e.target.value.toLowerCase()
    const updatedList = initialItems.filter((item) => item.name.toLowerCase().includes(valueText) || item.url.toLowerCase().includes(valueText));
    
    this.setState({items: updatedList});
  }

  render() {
    const { items } = this.state;

    return (
      <div className="app">
        <header className="header" style={{marginBottom: '20px'}}>
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
        </header>
        <div className="container">
            <div className="searchbar form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={this.filterList}
                />
            </div>
            <ListFramework data={items}/>
        </div>
      </div>
    );
  }
}

export default Index;
