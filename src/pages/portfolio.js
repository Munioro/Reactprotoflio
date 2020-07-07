import React from "react";
import Nav from "../components/nav"
import seo from "../images/SEO.png"
import BingmeFood from "../images/BingMeFood.png"
import Codequiz from "../images/Code-Quiz.png"
import DayPlanner from "../images/Day-Planner.png"
import portfolio from "../images/Portfolio.png"
import PasswordGenerator from "../images/Password-Generator.png"
import VirusVices from "../images/VirusVices.png"
import WeatherDashboard from "../images/Weather-Dashboard.png"


const Portfolio = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1 className="fontContent fontBackground text-center">Portfolio</h1>

        <div className="row align-items-start">
            <div className="col-1"></div>
            <div className="col-md-5">
                <div className="container-image">
                    <a href="https://munioro.github.io/UTSA-BC-Homework/" rel="noopener noreferrer" target="_blank">
                        <img src={seo} className="img-fluid img-thumbnail" alt="https://munioro.github.io/UTSA-BC-Homework/" />
                    </a>
                    <div className="bottom-centered">Code refactor
                        <a href="#">Git HUb</a>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="container-image">
                    <a href="https://munioro.github.io/Portfolio/" rel="noopener noreferrer" target="_blank">
                        <img src={portfolio} className="img-fluid img-thumbnail" alt="https://munioro.github.io/Portfolio/" />
                        <div className="bottom-centered">Portfolio</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-start">
            <div className="col-1"></div>
            <div className="col-md-5">
                <div className="container-image">
                    <a href="https://munioro.github.io/Password-Generator/" rel="noopener noreferrer" target="_blank">
                        <img src={PasswordGenerator} className="img-fluid img-thumbnail" alt="https://munioro.github.io/Portfolio/" />
                        <div className="bottom-centered">Password Generator</div>
                    </a>
                </div>
            </div>
            <div className="col-md-5">
                <div className="container-image">
                    <a href="https://munioro.github.io/Code-Quiz/" rel="noopener noreferrer" target="_blank">
                        <img src={Codequiz} className="img-fluid img-thumbnail" alt="https://munioro.github.io/Code-Quiz/" />
                        <div className="bottom-centered">Code Quiz</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-start">
            <div className="col-1"></div>
            <div className="col-md-5">
                <div className="container-image">
                    <a href="https://munioro.github.io/Day-Planner/" rel="noopener noreferrer" target="_blank">
                        <img src={DayPlanner} className="img-fluid img-thumbnail" alt=" https://munioro.github.io/Day-Planner/" />
                        <div className="bottom-centered">Daily Planner</div>
                    </a>
                </div>
            </div>
            <div className="col-md-5">
                <div className="container-image">
                    <a href="https://munioro.github.io/Weather-Dashboard/" rel="noopener noreferrer" target="_blank">
                        <img src={WeatherDashboard} className="img-fluid img-thumbnail" alt="https://munioro.github.io/Weather-Dashboard/" />
                        <div className="bottom-centered">Weather Dashboard</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-start">
            <div className="col-1"></div>
            <div className="col-md-5">
                <div className="container-image">
                    <a href="https://loneyb11.github.io/className_Project_01/" rel="noopener noreferrer" target="_blank">
                        <img src={BingmeFood} className="img-fluid img-thumbnail" alt="https://loneyb11.github.io/className_Project_01/" />
                        <div className="bottom-centered">Bing Me Food</div>
                    </a>
                </div>
            </div>
            <div className="col-md-5">
                <div className="container-image">
                    <a href="#" target="_blank">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMf6ACFGtPPs2zybXwLZuRehV8azq8-WLYaU1Ply46Hm1G2U2T" className="img-fluid img-thumbnail" alt="coming soon" />
                        <div className="bottom-centered">Coming Soon</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Portfolio;
