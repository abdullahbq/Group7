import React from "react"
import Image from "../Images/Images"

const Hero = () => {
  return (
    <>
      <div class="ima">
        <Image
          className="d-block mx-lg-auto img-fluid"
          filename="ima.1.jpg"
          alt="1"
        />
      </div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <Image
              className="d-block mx-lg-auto img-fluid"
              filename="logo.jpg"
              alt="1"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-3 mb-3">APP TECHNICAL INSTITUTE</h1>
            <p class="lead">
              This website will provide the virtual experience of the entire
              institute and all the comprehensive information about it.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
