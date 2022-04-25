import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"

const About = () => {
  return (
    <div class="ab">
      <Layout>
        <hr class="featurette-divider " />
        <div class="det">
          <div class="row featurette bg-primary bg-opacity-25">
            <div class="col-md-7">
              <br></br>
              <h1 class="featurette-heading text-center ">OVERVIEW</h1>
              <br></br>
              <p class="lead text-center ">
                Greetings and a warm welcome from the team! We are very excited
                to have you at APP Institute to provide you with a high quality
                study experience. Our courses are designed to connect learning
                and industry practice in an innovative environment. Led by a
                talented and energetic team of qualified trainers, you will be
                equipped to succeed and stay agile in today’s global market. And
                since your education is high priority, our Student Services team
                are here to help you adjust so that you can focus on your
                studies and enjoy the experience. our university enjoys an
                ever-increasing national recognition for academic quality,
                innovative research and scholarship, and educational value. Our
                economic development partnerships with the community and state
                are strong, as are our educational outreach and service
                initiatives. With our growing regional presence, highlighted by
                the planning and on-going construction of our new Health
                Sciences Campus we are well-prepared to build on our role as a
                leader in higher education. APP is guided by a strategic plan –
                the Road Map to Premier – that keeps us moving forward to
                achieve our goal of becoming the premier public university of
                the 21st century.
              </p>
            </div>
            <div class="col-md-5 wid">
              <br></br>
              <br></br>
              <br></br>

              <Image
                className="d-block mx-lg-auto img-fluid h"
                filename="Overview.jpg"
                alt="1"
              />
            </div>
          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="det">
          <div class="row featurette bg-info bg-opacity-25">
            <div class="col-md-7 order-md-2">
              <br></br>
              <h1 class="featurette-heading text-center ">
                VISION MISSION AND VALUES
              </h1>
              <br></br>
              <p class="lead text-center ">
                APP as an institution is dedicated to higher education, one that
                combines an international reputation for graduate education,
                research, scholarship and creative endeavor with the best
                undergraduate programs available at any public university. APP
                is committed to collaborative transdisciplinary research,
                inspirational artistic endeavors and high-impact educational
                experiences within an environment that advances diversity,
                equity and inclusion; international perspectives; and community
                engagement. Our campus values are described through three words
                — Unity, Identity and Excellence. We are an inclusive community
                made up of people from diverse backgrounds who come together to
                learn, discover and serve. We have developed a common bond — the
                APP bond — that will be ours for a lifetime. We are an
                academically selective community that shares ideas across
                departments, disciplines and borders. We encourage faculty,
                students and staff to ask unexpected questions, foster open
                dialog and develop innovative solutions to important problems.
                We cannot be all things to all people. However, we pursue our
                goals with determination, striving for intellectual and personal
                growth, especially in the face of adversity.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <br></br>
              <br></br>
              <br></br>

              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="vision.jpg"
                alt="1"
              />
            </div>
          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="det">
          <div class="row featurette bg-primary bg-opacity-25">
            <div class="col-md-7">
              <br></br>
              <h2 class="featurette-heading text-center ">GENESIS</h2>
              <br></br>
              <p class="lead text-center ">
                This is perhaps the most appropriate time in human history with
                all kinds of creative possibilities made available to mankind by
                science and technology. The global and economic transformation
                has led to the development and enhancement of the professional
                and technical education that will now demand a balanced and
                vibrant pool of intellectual resources that can stand the test
                of time and exhibit extraordinary skills, attitudes and
                proficiency that can be welcomed by the industries. APP
                Technical Institute was established with this aim to constantly
                develop the excellence of education, to raise the aptitude of
                the students so as to facilitate them to embark upon a
                successful career. APP endeavors to accomplish this objective
                through a proper blend of high academic and practical skills
                supported by first-rate infrastructure, teaching methodology,
                dedication to quality management,highly motivated and committed
                resource pool, visionary leadership and a strong corporate
                patronage.The perfect blend of highly skilled, experienced and
                energetic faculty with real life industrial & academic
                experience with a passion to pass on their expertise to the
                knowledge seeking students thereby carving them to serve the
                industry, academia and the corporate world with utmost
                professionalism is what make Bhaavya stand apart from its peers.
              </p>
            </div>
            <div class="col-md-5">
              <br></br>
              <br></br>

              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="genesis.jpg"
                alt="1"
              />
            </div>
          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="det">
          <div class="row featurette bg-info bg-opacity-25">
            <div class="col-md-7 order-md-2">
              <br></br>
              <h2 class="featurette-heading text-center">SAFETY</h2>
              <br></br>
              <p class="lead text-center">
                The safety of our students and the entire campus community is of
                the highest priority at APP Technical Institute, and we have
                developed comprehensive programs and procedures to help every
                member of the University community remain safe. Our safety
                efforts touch all facets of our students' daily lives, whether
                in a residence hall, classroom, dining facility, office or out
                and about on campus. A campus watch program operates in the
                residence halls, similar to community "neighborhood watch"
                programs. On-campus escorts are available to all members of the
                University community 24 hours a day, 365 days a year by calling
                University Police at 607-777-7777. Resident assistants are
                trained to identify and seek solutions to safety and security
                issues between roommates, floor mates, friends, classmates,
                etc., as well as to properly respond to emergency situations.
                From 9:30 p.m. until 6 a.m., all gates except the main entrance
                to campus are closed to vehicular traffic and vehicles admitted
                to campus during this time must be registered to park on campus
                or the occupants of the vehicle must be hosted by a member of
                the University community. 82 highly visible, blue-light phones
                are located outdoors all over campus; these phones connect users
                directly to the University Police. Several areas across campus,
                including women's locker rooms, are equipped with panic alarm
                buttons that permit direct, immediate communication with
                University Police.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <br></br>
              <br></br>
              <br></br>
              <Image
                className="d-block mx-lg-auto img-fluid"
                filename="safety.jpg"
                alt="1"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default About
