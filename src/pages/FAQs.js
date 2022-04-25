import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
const FAQs = () => {
  return (
    <div class="back">
      <Layout>
        <div class="image">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="faq.1.jpg"
            alt="1"
          />
        </div>

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is “graduation” and is it automatic?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bg-info bg-opacity-25">
                <p>
                  “Graduation” will occur after a student has satisfied all of
                  the academic requirements of his/her program of study.
                  However, graduation is not automatic. All students must apply
                  for graduation, even if they are not attending the
                  commencement ceremony.{" "}
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can graduation occur at any time?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bg-info bg-opacity-25">
                <p>
                  No. Graduation can occur only at the end of an academic term.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How and when do I apply for graduation?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bg-info bg-opacity-25">
                <p>
                  Application materials are available online as well as in the
                  Office of Admissions and Enrollment Services. Students should
                  submit the application and supporting documents during the
                  first two weeks of their last semester of study.
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                When will I receive my diploma?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bg-info bg-opacity-25">
                <p>
                  Once your application is reviewed and approved by the Dean's
                  Office, your graduation is authorized and your diploma is
                  ordered. Your diploma and a complimentary official copy of
                  your transcript will be mailed to you approximately four weeks
                  after the end of the term in which you graduate.
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                When should I apply?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bg-info bg-opacity-25">
                <p>
                  While some programs operate on rolling admissions, others have
                  specific deadline dates.{" "}
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                How do I apply for Readmission?
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bg-info bg-opacity-25">
                <p>
                  Students in the School of Education who have not been enrolled
                  for a 12-month period must apply for reinstatement. Please
                  contact the Admissions and Enrollment Office for assistance
                  with the process. She will work with you to determine exactly
                  what will be required, as requirements may vary based upon
                  your specific program and length of absence.
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Can I apply for an undergraduate degree course if I am already
                studying at another Technical university?
              </button>
            </h2>
            <div
              id="collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bg-info bg-opacity-25">
                <p>
                  APP University does not accept transfer students. If you wish
                  to follow an undergraduate course here, then you would need to
                  start the course from the beginning
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default FAQs
