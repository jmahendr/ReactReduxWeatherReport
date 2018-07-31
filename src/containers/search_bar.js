import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ""};

        //we have bind "this" to the function and replace it with the bound version of the function.
        //this code is required because in the onChange of input, we have used a function that makes 
        //refrence to "this". If not done the referenced "this" will not have the context set.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        //The preventDefault stops the browser from reloading on form submit.
        event.preventDefault();

        //Here we need to fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ""});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five day forcast of your favourite cities."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
} 

export default connect(null, mapDispatchToProps) (SearchBar);