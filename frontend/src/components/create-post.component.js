import React, { Component } from "react";
import axios from "axios";
import FormData from "form-data";
import "bulma/css/bulma.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export default class createPost extends Component {
  constructor() {
    super();

    //this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      post_filename: "no file selected",
      post_file: undefined,
      post_description: "",
      post_user: "",
    };
  }
  onChangeFile(e) {
    let file = e.target.files[0];
    let name = file.name;
    //console.log(file);

    this.setState({
      post_filename: name,
      post_file: file,
    });
  }

  onChangeDescription(e) {
    this.setState({
      post_description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    //let file = e.target.files[0] ;
    //let name = file.name;

    let postobj = {test: "hello"};

    axios
      .post("http://localhost:5555/createpost", {test: "hello"})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    //console.log(e);
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h2>Create your new post</h2>

        <form onSubmit={this.onSubmit}>
          <div className="file">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="resume"
                id="resume"
                onChange={this.onChangeFile}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <FontAwesomeIcon icon={faUpload} />
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
              <span className="file-name">{this.state.post_filename}</span>
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
              <input type="submit" className="button is-link"></input>
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
