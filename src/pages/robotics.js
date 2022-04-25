import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
const Robotics = () => {
  return (
    <Layout>
      <div class="robo">
        <div class="robo_img">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="robo.1.jpg"
            alt="1"
          />
        </div>
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="robotics1.jpg"
                alt="1"
              />

              <div class="container">
                <div class="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>
                    Some representative placeholder content for the first slide
                    of the carousel.
                  </p>
                  <p>
                    <a class="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="robotics2.jpg"
                alt="1"
              />

              <div class="container">
                <div class="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  <p>
                    <a class="btn btn-lg btn-primary" href="#">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="robotics3.jpg"
                alt="1"
              />
              <div class="container">
                <div class="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a class="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <main class="px-3 text-center bg-info">
          <br></br>
          <br></br>
          <h1>Course Overview</h1>
          <p class="lead">
            Courses in Robotics are offered from the undergraduate level to
            graduate level. The courses listed below make up a core part of the
            Robotics program, but as part of the College of Engineering and
            University of Michigan, there are also many cross-listed courses and
            electives from other programs that are available.
          </p>
          <br></br>
          <br></br>
          <h1>Couses Offered</h1>
          <p class="lead">
            Graduate degrees in Robotics require a breadth of knowledge from
            courses in sensing, reasoning, and acting. There are many courses
            from other departments that meet these Robotics degree requirements.
          </p>
          <br></br>
          <br></br>
          <h1>Robotics Mechanisms</h1>
          <p class="lead">
            Hands-on design, build, and operations of robotic systems. Students,
            in teams, will build a mobile manipulation robot that can be
            teleoperated. Students will develop maker-shop skills (3D printing,
            laser cutting, mill, etc.), programming (C++) and controls, system
            design and integration, and technical writing. Culmination in
            friendly competition and final report. CourseProfile (ATLAS)
          </p>
          <br></br>
          <br></br>
          <h1> Robot Sensors and Signals</h1>
          <p class="lead">
            Covers practical analog and digital electronics for robotics.
            Students will: prototype, test, and debug various analog and digital
            circuits; interface a microcontroller to external circuits; learn to
            design and prototype circuit boards; interpret data recorded from
            physical circuits. An exploration of circuits and embedded systems
            that supports integrated robotic design.
          </p>
          <br></br>
          <br></br>
        </main>
      </div>
    </Layout>
  )
}
export default Robotics
