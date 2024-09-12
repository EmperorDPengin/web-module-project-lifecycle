import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        input: ""
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.handleUserChange(this.state.input);
        // console.log('Seachbar: HandleSearch');
        this.setState({
            input: ""
        })
    };

    render() {
        return(
            <div className="Search-Bar">
                <form>
                    <input onChange={this.handleInput} value={this.state.input}type="text" name="username"/>
                    <button onClick={this.handleSearch}>Search</button>
                </form>
            </div>
        )
    };
};

export default SearchBar;