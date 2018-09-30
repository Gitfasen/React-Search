import React, { Component } from 'react';
import logo from '../../logo.svg';
import ListFramework from '../../components/ListFramework';
import './App.sass';

class Index extends Component {
  filterList (e){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter((item) => {
    for (let key in item) {
        return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1 || item.url.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    }

    });
    this.setState({items: updatedList});
  }
  constructor(props) {
      super(props);
      this.state = {
          initialItems: [
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
          ],
          items: []
      };
  }
  componentWillMount() {
        this.setState({items: this.state.initialItems})
  }
  render() {
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
                    onChange={this.filterList.bind(this)}
                />
            </div>
            <ListFramework data={this.state.items}/>
        </div>
      </div>
    );
  }
}

export default Index;
