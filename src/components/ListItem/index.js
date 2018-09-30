import React, {Component} from 'react';


class ListItem extends Component {
    render() {
        return (
            <li><a href={this.props.framework.url}>{this.props.framework.name}</a></li>
        );
    };
}

export default ListItem;