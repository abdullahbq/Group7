import React from "react"
import Image from "../Images/Images"

const Items = [
  {
    name: "Sheldon Cooper",
    description: "Computer Specialist",
  },
  {
    name: "Hana Ren",
    description: "Computer Specialist",
  },
  {
    name: "Neeraj Kapoor",
    description: "Computer Specialist",
  },
]

const Team = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="pb-2 border-bottom text-center">FACULTY</h2>
      <div className="row justify-content-center py-5">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-body shadow mb-4">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={`${item.name}.jpg`}
                  alt="1"
                />
                <h3 className="m-2">{item.name}</h3>
                <div>
                  <h4 className="fw-bold mb-0">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
