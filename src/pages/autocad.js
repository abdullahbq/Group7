import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
const Autocad = () => {
  return (
    <Layout>
      <div class="robo">
        <div class="robo_img">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="aut.1.jpg"
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
                filename="autocad1.jpg"
                alt="1"
              />
            </div>
            <div class="carousel-item">
              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="autocad2.jpg"
                alt="1"
              />
            </div>
            <div class="carousel-item">
              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="autocad3.jpg"
                alt="1"
              />
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
        <main class="px-3 text-center">
          <br></br>
          <br></br>
          <h1>Course Overview</h1>
          <p class="lead">
            You will learn all major tools of AutoCAD from line to polyline to
            trims and many more This course will help you in understanding the
            perspective, limits and units which is required for drafting a 2D
            drawing with AutoCAD You will also cover advanced tools like pedit
            and fillet, you will also learn tools that you can use to improve
            your productivity Course Syllabus On a daily basis we talk to
            companies expert in these domains to fine tune our curriculum.
          </p>
          <br></br>
          <br></br>
          <h1>Learning through hands-on exercises</h1>
          <p class="lead">
            Earlier the architects and engineers could illustrate their ideas
            only by drawing with free hands. The use of pen and paper has been
            taken over by design software like AutoCAD. By enabling the
            designers to create digital designs, the ideas can now be
            illustrated much faster and with greater efficiency. AutoCAD, which
            is a computer-aided design software built by Autodesk, helps to draw
            2D and 3D designs.There are basic, intermediate, and advanced
            programs in AutoCAD that has been designed for different abilities
            and needs.
          </p>
          <br></br>
          <br></br>
          <h1>Basic or essentials course</h1>
          <p class="lead">
            This course is ideal for entry-level CAD operators, particularly
            those who have to work with engineers. Through this course, people
            can get trained on core areas that are needed for creating
            professional drawings using AutoCAD. A basic course in AutoCAD
            highly benefits people working in the architecture, construction and
            engineering fields.
          </p>
          <br></br>
          <br></br>
          <h1>Intermediate course</h1>
          <p class="lead">
            This type of AutoCAD course is designed for more advanced learners.
            In this course, people learn how to zoom commands, QuickCalc,
            dimensioning tools for advanced drawing, external references, etc.
          </p>
          <br></br>
          <br></br>
          <h1>Advanced course</h1>
          <p class="lead">
            This course will teach learners to publish and use collaboration
            tools. They will learn how to manage layers and use the right tools.
            They will also be fed to hands-on projects by professional Autocad
            institutes, which they can use in their portfolio while applying for
            jobs after the course completion.
          </p>
        </main>
      </div>
    </Layout>
  )
}
export default Autocad
