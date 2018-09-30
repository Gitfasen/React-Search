import React, {Component} from 'react';
import ListItem from '../ListItem';
import "./index.sass";

class ListFramework extends Component {
    render() {
        if (!this.props.data) { return (<p>Loading...</p>); }
        return (
            <ul className="list-framework">
                {
                    this.props.data.map((framework, index) => {
                        return (<ListItem framework ={framework} key={index} />);
                    })
                }
            </ul>
        );
    }
}

export default ListFramework;