import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class gifsList extends Component {
  render() {
    return (
      <div className=" container test-add-height">
        <h3>GIFs Listings</h3>
        <div className="columns test-add-height">
          <div className="column .is-centered test-add-height">
            <div className="post ">
              <div>
                <Link>
                  <img alt="the gif you were looking for"></img>
                </Link>
              </div>
              <div className="post-details">
                <div className="post-details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum diam mauris, tempor id eleifend in, efficitur
                    vitae nibh. Nunc auctor purus eu auctor blandit.
                    Pellentesque malesuada accumsan sapien sed porta. Morbi
                    finibus aliquam ex quis dignissim. Donec purus purus, varius
                    sed iaculis quis, venenatis vitae diam. Ut elit ligula,
                    sollicitudin vel sagittis ac, rutrum eget quam. Sed pretium
                    congue sapien tristique iaculis. Pellentesque at scelerisque
                    ligula. Nunc convallis est quis sapien rhoncus interdum. Sed
                    fermentum purus ultrices, gravida sapien et, congue sapien.
                  </p>
                </div>
                <div className="user-post-link">
                  <Link to="/">
                    <span> namey McNamington</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* testing to get view correct */}
      </div>
    );
  }
}
