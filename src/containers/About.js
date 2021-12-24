import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardImg,
  CardBody,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/About.css";
import images from "../shared/images";

function About() {
  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          height: "40%",
          width: "100%",
          display: "flex",
          backgroundImage: "url(" + images["12.4.png"].default + ")",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div class="about-overlay">
          <h1
            style={{
              color: "white",
              padding: "10px",
              bottom: 0,
              position: "absolute",
            }}
          >
            About Us
          </h1>
        </div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <b>
            <span style={{ fontSize: "30px", color: "#f60703" }}>
              Domus Design Inc
            </span>{" "}
            is a General Contractor company based in New York.
          </b>
        </div>
        <div style={{ display: "flex", height: "85%" }}>
          <div
            className="about-text flex-large"
            style={{
              display: "flex",
              flexDirection: "column",
              paddingRight: "50px",
            }}
          >
            <span>
              We are a <b>small business</b> with a <b>big business outlook</b>.
              Not only do we excel in delivering excellent quality work and
              finishings, but we also provide higher flexibility and value close
              relationships with our clients. That means full transparency on
              the project progress and costs.
            </span>
            <span>
              Through years of working in the industry, we have developed a vast
              network consisting of dependable suppliers and skilled
              sub-contractors. That's what sets us apart from the rest. No
              project is too small or too large - we'll always have someone who
              can get the job done and <b>done well</b>. We are not limited to
              just the New York area either, so contact us today with your
              project and let's create something amazing together.
            </span>
            <span style={{ fontSize: "30px", margin: "10px" }}>
              <b>
                There is no DOM<span style={{ color: "#f60703" }}>US</span>{" "}
                DESIGN without <span style={{ color: "#f60703" }}>"US"</span>
              </b>
            </span>

            <NavLink to="/contact" className="contact-redirect">
              <Button bsClass="contact-button">
                Contact Us Today
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  style={{ marginLeft: "5px" }}
                />
              </Button>
            </NavLink>
          </div>
          <Card className="flex-small project-card">
            <CardImg
              style={{ height: "45%" }}
              src={images[`21.1.png`].default}
            />
            <CardBody>
              <CardTitle>
                <b>Residential</b>
              </CardTitle>
              <CardText>
                New building construction to condo renovations
              </CardText>
              <NavLink to="/residential">
                <Button outline color="danger">
                  View Residential
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    style={{ marginLeft: "5px" }}
                  />
                </Button>
              </NavLink>
            </CardBody>
          </Card>
          <Card className="flex-small project-card">
            <CardImg
              src={images[`20.1.png`].default}
              style={{ height: "45%" }}
            />
            <CardBody>
              <CardTitle>
                <b>Commercial</b>
              </CardTitle>
              <CardText>
                Standalone business storefronts to multiple franchises
              </CardText>
              <NavLink to="/commercial">
                <Button outline color="danger">
                  View Commercial
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    style={{ marginLeft: "5px" }}
                  />
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
