import React, { Component } from 'react'
import GestionHotel from "../Images/GestionHotel.PNG"
import GestionLaureats from "../Images/GestionLaureats.PNG"
import HarmieBlog from "../Images/Harmieblog.PNG"
import Harmify from "../Images/Harmify.PNG"
import GestionUniverste from "../Images/GestionUniversité.PNG"
import GameOfLife from "../Images/GameOfLife.PNG"
import Chess from "../Images/Chess.PNG"
import Snake from "../Images/Snake.PNG"
import MoviesInfos from "../Images/MoviesInfo.PNG"


export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>								
							</div>
						</div>

						<h2 className="colorlib-heading animate-box">Recent Projects</h2>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: `url(${GameOfLife})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Game Of Life</a></h3>
											<span>React JS</span>
											<p className="icon">
												<span><a href="https://fettoukh.github.io/React-Game-Of-Life" Target="_blank"><i className="icon-eye" /> Demo</a></span>
												<span><a href="https://github.com/Fettoukh/React-Game-Of-Life" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: `url(${Chess})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Chess Game</a></h3>
											<span>React JS</span>
											<p className="icon">
												<span><a href="https://fettoukh.github.io/React-Chess-Game/#/" Target="_blank"><i className="icon-eye" /> Demo</a></span>
												<span><a href="https://github.com/Fettoukh/React-Chess-Game" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: `url(${Snake})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Snake Game</a></h3>
											<span>React JS</span>
											<p className="icon">
												<span><a href="https://fettoukh.github.io/React_Snake_Game/" Target="_blank"><i className="icon-eye" /> Demo</a></span>
												<span><a href="https://github.com/Fettoukh/Harmify" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: `url(${MoviesInfos})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Movies/Series Infos</a></h3>
											<span>React JS , Redux</span>
											<p className="icon">
												<span><a href="https://fettoukh.github.io/React-Movies-IMBD-API/#/" Target="_blank"><i className="icon-eye" /> Demo</a> </span>
												<span><a href="https://github.com/Fettoukh/React-Movies-IMBD-API" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: `url(${GestionLaureats})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Quizz App</a></h3>
											<span>React JS</span>
											<p className="icon">
											<span><a href="https://fettoukh.github.io/React-Movies-IMBD-API/#/" Target="_blank"><i className="icon-eye" /> Demo</a> </span>
												<span><a href="https://github.com/Fettoukh/React-QuizzApp" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: `url(${GestionUniverste})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Mobile Application To Manage Univesities</a></h3>
											<span>Android Studio , Java, SQLLite</span>
											<p className="icon">
                                                <span><a href="https://github.com/Fettoukh/AndroidProject-_Gestion-d-universit-" Target="_blank"><i className="icon-eye" />Report</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>							
						</div>


						<h2 className="colorlib-heading animate-box">Academic Projects</h2>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: `url(${GestionHotel})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Desktop App to manage Hotels</a></h3>
											<span>JavaSE,Swing,MySQL</span>
											<p className="icon">
												<span><a href="https://github.com/Fettoukh/Gestion-d-hotel" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: `url(${HarmieBlog})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Social Media Website</a></h3>
											<span>HTML,PHP,JavaScript</span>
											<p className="icon">
												<span><a href="https://github.com/Fettoukh/HarmieBlog" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: `url(${Harmify})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Music Web Player</a></h3>
											<span>HTML,PHP,Javascript</span>
											<p className="icon">
												<span><a href="https://github.com/Fettoukh/Harmify" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Laravel Application that manage a school club</a></h3>
											<span>Laravel,MySQL</span>
											<p className="icon">
												<span><a href="https://github.com/NouemanKHAL/GestionClub" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: `url(${GestionUniverste})`}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Mobile Application To Manage Univesities</a></h3>
											<span>Android Studio , Java, SQLLite</span>
											<p className="icon">
                                                <span><a href="https://github.com/Fettoukh/AndroidProject-_Gestion-d-universit-" Target="_blank"><i className="icon-book" /> Code</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>							
						</div>						
					</div>
				</section>
      </div>
    )
  }
}
