import React from "react";
import teamImage from "../../img/snap.png";
import cubeImg from "../../img/cube.png";
import satellitesImg from "../../img/satellites-orbiting.jpg";
import { Link } from "react-router-dom";
import { Plans } from "./plans";
import { Context } from "../store/appContext";
import Typed from "react-typed";
import "../../styles/demo.scss";
import { ScrollTo } from "react-scroll-to";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<header className="heads">
					<div className="jumbotron jumbotron-fluid mx-auto">
						<div className="container text-center">
							<h1 className="display-4 text-white justify-content-center head-title mb-3">
								<span className="alii">{"<"}</span>
								{"Satellite access for everyone"}
								<span className="alii">{"/>"}</span>
							</h1>

							<img className="raspimg" src={cubeImg} />

							<div className="starysky">
								<div id="stars" />
								<div id="stars2" />
								<div id="stars3" />
							</div>
						</div>
					</div>

					<div className="arrow bounce">
						<a
							className="fa fa-arrow-down fa-3x "
							href="#"
							onClick={() =>
								window.scrollTo({
									top: 780,
									behavior: "smooth"
								})
							}
						/>
					</div>
				</header>

				<section>
					<div className="first-section-head">
						<h2>The Mission</h2>
					</div>
					<div className="row first-section">
						<div className="col">
							<Fade left>
								<img className="orbitlogo" src={satellitesImg} />
							</Fade>
						</div>
						<div className="col mission-p">
							<Fade right>
								<p>
									The mission to launch a miniature <b>low earth orbit</b> is to provide measurement
									data of the earth&apos;s magnetic field, atmospheric pressure, temperature and
									several other measurements at an affordable price that anyone could afford. As we
									progress, the <span> S Data Mk1</span> will be upgraded with higher grade sensors
									and provide even more data. In the near future the <span>S Data Mk 1 </span> will be
									able to Sense data on a global scale such as wildfires or results given in
									sinusoidal as it orbits in the van allen belt. The <span>S Data Mk 1</span> will be
									available for rent and will be outfitted with cameras, an ambient light sensor,
									Geiger counter as well as several others such as a{"  "}
									<Typed
										strings={[
											" Barometer..",
											" Thermometer..",
											" Gyroscope..",
											" Magnetometer..",
											" Accelerometer.."
										]}
										typeSpeed={75}
										backSpeed={75}
										backDelay={2}
										loop
										smartBackspace
									/>
								</p>
							</Fade>
						</div>
					</div>
				</section>

				<section className="midsection">
					<div className="second-section-head">
						<h2 className="text-white">Technology</h2>
					</div>
					<div className="row">
						<div className="col mission-p">
							<Rotate top left>
								<p className="text-white">
									The <span> S Data Mk 1</span> was developed using in combination of a credit-card
									sized computer known as a Raspberry Pi along with an attachment known as a sense
									hat.
									<ul>
										<li>SoC: Broadcom BCM2837</li>
										<li>CPU: 4× ARM Cortex-A53, 1.2GHz</li>
										<li>GPU: Broadcom VideoCore IV</li>
										<li>RAM: 1GB LPDDR2 (900 MHz)</li>
										<li>Networking: 10/100 Ethernet, 2.4GHz 802.11n wireless</li>
									</ul>
								</p>
							</Rotate>
						</div>
						<div className="col">
							<Rotate top right>
								<img src="https://www.raspberrypi.org/learning/images/components/raspberry-pi.png" />
							</Rotate>
						</div>
						<div className="col pt-5">
							<Rotate bottom left>
								<img src="https://projects-static.raspberrypi.org/projects/getting-started-with-the-sense-hat/653ef80ded139ef3aa6e17c5f24936e6c9b63b6a/en/images/sense-hat.png" />
							</Rotate>
						</div>
						<div className=" col mission-p text-white">
							<Rotate bottom right>
								<p>
									The Sense hat has several sensors built-in this enables the{" "}
									<span> S Data Mk 1</span> to relay the information measured via sense hat through
									it&apos;s multiple sensors back to the user.
									<ul>
										<li>Gyroscope – angular rate sensor: +/-245/500/2000dps</li>
										<li>Accelerometer - Linear acceleration sensor: +/-2/4/8/16 g</li>
										<li>Magnetometer - Magnetic Sensor: +/- 4/8/12/16 gauss</li>
										<li>Barometer: 260 – 1260 hPa absolute range</li>
										<li>Temperature sensor</li>
										<li>Humidity sensor</li>
									</ul>
								</p>
							</Rotate>
						</div>
					</div>
				</section>

				<section>
					<div className="first-section-head">
						<h2 className="">Plans</h2>
					</div>
					<div>
						<Plans />
					</div>
				</section>

				<section className="about-section">
					<div className="first-section-head">
						<h2 className="text-white">About Us</h2>
					</div>
					<div className="row">
						<div className="col text-center">
							<img className="teamimg rounded grow" src={teamImage} />
						</div>
						<div className="col text-white about-us-p mission-p">
							<p>
								The team Luis Rivera and Naila Kaliyeva joined 4Geeks Code Bootcamp in something greater
								than themselves, the <span>S Data Mk 1</span> was built during their time in 4Geeks as a
								final project. The project took 400+ hours to complete the functionality and now are
								currently building a prototype to send up in orbit.
							</p>
						</div>
					</div>
				</section>

				<footer className="footer">
					<div className="row">
						<div className="col span-1-of-2">
							<ul className="footer-nav">
								<li>
									<a href="#">About us</a>
								</li>
								<li>
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">Press</a>
								</li>
							</ul>
						</div>
						<div className="col span-1-of-2">
							<ul className="social-links">
								<li>
									<a href="#">
										<ion-icon name="logo-facebook" class="ion-facebook" />
									</a>
								</li>
								<li>
									<a href="#">
										<ion-icon name="logo-twitter" class="ion-twitter" />
									</a>
								</li>
								<li>
									<a href="#">
										<ion-icon name="logo-googleplus" class="ion-google" />
									</a>
								</li>
								<li>
									<a href="#">
										<ion-icon name="logo-instagram" class="ion-insta" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<p className="col">Copyright &copy; 2018 by Raspberry Sky. All rights reserved</p>
					</div>
				</footer>
			</div>
		);
	}
}
