import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
const bittu = () => {
  return (
    <Layout>
      <div class="robo">
        <div class="robo_img">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="com.1.jpg"
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
                filename="computer1.jpg"
                alt="1"
              />
            </div>
            <div class="carousel-item">
              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="computer2.jpg"
                alt="1"
              />
            </div>
            <div class="carousel-item">
              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="computer3.jpg"
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
            The most up-to-date curriculum dedicated professors are constantly
            working to keep the program current within a rapidly changing
            industry. A practical applied approach is taken with an emphasis on
            individual programming skills including the mobile environment,
            communication skills, problem solving and teamwork. Get a degree
            that computes At one of the world’s best schools for computer
            science, you'll develop a broad understanding in areas such as
            systems and networks, algorithms, and programming. After first year,
            you can choose a major in Data Science. You can also gain two years
            of paid work experience through our co-op program, the largest of
            its kind in North America, or fast track your degree by choosing the
            regular system of study.
          </p>
          <br></br>
          <br></br>
          <h1>Program Highlights</h1>
          <p class="lead">
            Social and academic support. Through Waterloo’s Computer Science
            Club, get access to high-powered software or get social with your
            fellow students. Study your interests. With 70+ computer science
            courses, plus no end of options and electives, you can create a
            degree tailored to your specific interests. Available as a regular
            or co-op program Graduate with a Bachelor of Computer Science or a
            Bachelor of Mathematics in Computer Science Offered by the Faculty
            of Mathematics
          </p>
          <br></br>
          <br></br>
          <h1>What Will You Learn?</h1>
          <p class="lead">
            First-year courses You'll primarily take Mathematics and Computer
            Science courses to give you the foundations for your upper-year
            classes, along with a few electives. After first year, the majority
            of your required courses will be Computer Science. Learn about
            courses you'll take for your Computer Science degree.You can add
            additional areas of expertise by including specializations such as
            artificial intelligence, human-computer interaction, or
            bioinformatics. Once you're a student, advisors can help you explore
            which minors or specializations may fit into your plans.
          </p>
          <br></br>
          <br></br>
          <h1>Mobile Computing</h1>
          <p class="lead">
            The applied approach is facilitated by an interactive classroom
            experience each student has their own personal laptop and the most
            current versions of industry standard computer programming software
            available through Sheridan. We offer a well-respected computer
            programming college credential that will give you many workplace
            options and pathways to further study.
          </p>
          <br></br>
          <br></br>
          <h1>Additional Information</h1>
          <p class="lead">
            Your studies will include courses in areas such as: Web development
            and interface design using HTML5/CSS3/Javascript/PHP and more Java,
            C#, XML and .NET Database design and implementation (Oracle/MySQL)
            Network communications and configurations Systems analysis and
            design Web-based application development for mobile smartphones
            Communication skills Operating systems Project management You'll
            work on your own laptop in a networked environment that provides
            round-the-clock access to all course materials from any location
            through Sheridan's Learning Management System.
          </p>
        </main>
      </div>
    </Layout>
  )
}
export default bittu
