import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class createPost extends Component {
  constructor() {
    super();

    this.state = {
      post_file: "",
      post_description: "",
      post_user: "",
    };
  }

  onChangeDescription(e){
    this.setState({
      post_description: e.target.value
    })
  }

onSubmit(e){
  e.preventDefault();
  console.log("submitted")
}

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h2>Create your new post</h2>

        <form onSubmit={this.onSubmit}>
          <div className="file">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
            </label>
          </div>
          <br />
          <div>
            <label>Enter your description: </label>
            <br />
            <textarea
              className="textarea"
              placeholder="e.g. Hello world"
              value={this.state.post_description}
              onChange={this.onChangeDescription}
            ></textarea>
          </div>
          <br />

          <div className="field is-grouped">
            <div className="control">
              <input 
              type="submit"
              className="button is-link"
              ></input>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
