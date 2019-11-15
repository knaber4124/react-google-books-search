import React, { Component } from "react";
import "../Search/Search.css";
import API from "../utils/API";

class Search extends Component {
    state = {
        title: "",
        author: "",
        description: "",
        link: ""
    };


    handleSearch = event => {
        console.log("clicked");
        this.getSearchedBook();

    }

    getSearchedBook = () => {
        API.getBook().then(res => {
            console.log(res);
            this.setState({
                // title: res.items[0].volumeInfo.title,
                // author: res.items[0].volumeInfo.author[0],
                // description: res.items[0].volumeInfo.description,
                // link: res.items[0].volumeInfo.previewLink
            })

        }
        )
    }
    render() {
        return (
            <div className="background" >
                <nav>
                    <div className="nav-wrapper green lighten-3">
                        <h3 className="center">Search</h3>
                    </div>
                </nav>
                <div className="row">
                    <div className="col m8 offset-m2 title">
                        <h4>Input A Book That You Want To Search For</h4>
                    </div>
                    <div className="row">
                        <form className="col m8 offset-m2">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea bookSearch" ></textarea>
                                    <label htmlFor="textarea1">Enter A Book Title</label>
                                    <button className="waves-effect waves-light btn search" onClick={this.handleSearch}>Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Search;