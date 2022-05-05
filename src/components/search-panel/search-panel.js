import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch1 = this.onUpdateSearch1.bind(this);
    }

    onUpdateSearch1(event) {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render () {
        return (
            <input className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={this.onUpdateSearch1}
            />
        )
    }
}