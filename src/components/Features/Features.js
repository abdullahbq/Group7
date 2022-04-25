import React from "react"
import {
  Book,
  Calendar3,
  House,
  PersonCheckFill,
  PersonWorkspace,
  ProjectorFill,
  Search,
  Tools,
} from "react-bootstrap-icons"

const Items = [
  {
    icon: <PersonCheckFill />,
    title: "Student Mentoring",
    description: "The Institute offers students services like counseling placement training support, personality grooming and Plant Visit / Corporate Lectures / Summer Training / Seminar / Project Report / Continuous Evaluation/ Publication / Pre- placement Talk / For final Placement.",
  },
  {
    icon: <Calendar3 />,
    title: "Tutorials",
    description: "In tutorial classes, students undertake group discussion, problems faced in lectures room, quiz,class test, work exercise, in supervision of a faculty. These measures improve the knowledge in the subject and appropriate planning of any work for achieving the objective.",
  },
  
  {
    icon: <ProjectorFill />,
    title: "Student Centric Learning",
    description: "As we found a few difficulties in the traditional method of chalk and talk teaching, we have set up the classroom as student centric namely Reformed Teaching Learning (RTL) process. In this RTL method, the interaction by students has improved considerably.",
  },
  {
    icon: <Book />,
    title: "Student teacher concept",
    description: "Selected Senior Students are encouraged to take 3- 4 periods of lower classes on specific topics from the curriculum to develop confidence and improving their technical knowledge.",
  },
  {
    icon: <House />,
    title: "Industrial Tour for students",
    description: "At the end of fifth semester, students go for industrial tour for about a week. In this tour students are accompanied by their mentors.",
  },
  {
    icon: <PersonWorkspace />,
    title: "Project Based Learning",
    description: "The RTL method provides a detailed learning to students and also reduces them to initiate a project on the basis of what they have learnt in the classroom.",
  },
  {
    icon: <Search />,
    title: "System Discovery",
    description: "This is a practice to kindle the curiosity of the students to learn new things. In System Discovery, a system is dismantled to learn its components & functions.",
  },
  {
    icon: <Tools />,
    title: "System Analysis",
    description: "Students analyze the construction and functioning of the system and come up with new ideas in similar lines, as a team.",
  },
]

const Features = () => {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom text-center">Features</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col d-flex align-items-start">
              <div
                className="bi text-muted flex-shrink-0 me-3"
                style={{ fontSize: "2rem" }}
              >
                {item.icon}
              </div>

              <div>
                <h4 className="fw-bold mb-0">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features