import React, { Component } from 'react';
import logo from '../../logo.svg';
import list from '../../data';
import ListFramework from '../../components/ListFramework';
import './App.sass';

class Index extends Component {
  constructor(props) {
      super(props);
      this.state = {
          items: list
      };
  }
  filterList = e => {
      const valueText = e.target.value.toLowerCase();
      const updatedList = list.filter((item) => item.name.toLowerCase().includes(valueText) || item.url.toLowerCase().includes(valueText));

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
