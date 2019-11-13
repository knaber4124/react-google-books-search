import React from "react";
import "../Search/Search.css";

function Search() {
    return (
        <div className="background">
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
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label for="textarea1">Enter A Book Title</label>
                            <a className="waves-effect waves-light btn search">Search</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;