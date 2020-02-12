import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/GestionHotel.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Desktop App to manage Hotels</a></h3>
											<span>JavaSE,Swing,MySQL</span>
											<p className="icon">
												<span><a href="https://github.com/Fettoukh/Gestion-d-hotel" Target="_blank"><i className="icon-eye" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/Harmieblog.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Social Media Website</a></h3>
											<span>HTML,PHP,JavaScript</span>
											<p className="icon">
												<span><a href="https://github.com/Fettoukh/HarmieBlog" Target="_blank"><i className="icon-eye" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/Harmify.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Music Web Player</a></h3>
											<span>HTML,PHP,Javascript</span>
											<p className="icon">
												<span><a href="https://github.com/Fettoukh/Harmify" Target="_blank"><i className="icon-eye" /></a></span>
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
												<span><a href="https://github.com/NouemanKHAL/GestionClub" Target="_blank"><i className="icon-eye" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/GestionLaureats.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Web Application to manage student</a></h3>
											<span>Laravel , MySQL</span>
											<p className="icon">
												<span><a href="https://laureatensat.000webhostapp.com/" Target="_blank"><i className="icon-eye" />Demo</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/GestionUniversité.PNG)'}}>
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
					</div>
				</section>
      </div>
    )
  }
}
