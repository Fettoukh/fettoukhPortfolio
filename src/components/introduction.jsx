import React, { Component } from "react";
import bg from "../Images/bg.jpg";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: `url(${bg})` }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc" style={{ color: "white" }}>
                          <h1 style={{ color: "white" }}>
                            Hi! I'm <br />
                            Fettoukh Mohamed Amine
                          </h1>
                          <p style={{ color: "white" }}>
                            <a
                              className="btn btn-Basic btn-learn"
                              href="https://drive.google.com/file/d/1pNvMw8ztOd5jMK9AjE1_WehMeiteBfFi/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
