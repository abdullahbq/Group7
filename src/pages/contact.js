import React, { useState } from "react"
import Layout from "../components/Layout/Layout"

const Contact = () => {
  const [data, setData] = useState({
    FirstName:'',
    LastName:'',
    Email:'',
    Gender:'',
    query:'',

  });
    const InputEvent = (event) => {
      const {name, value} = event.target;
      setData((preVal) => {
        return {
          ...preVal,
          [name]: value,
        };
      });
    };
    const formSubmit = (e) => {
      e.preventDefault();
      alert(
        `My First Name is ${data.FirstName}, and Last Name is ${data.LastName}. My Email Id is ${data.Email} and my gender is ${data.Gender}. This is my query "${data.query}"`
      );
  };
  return (
    <Layout>
      <section class="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.7390767281!2d76.81307223784437!3d28.646677258361485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1650630872939!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <table class="table table-hover g-4 py-5 text-center ">
        <thead>
          <tr>
            <th scope="col">Name of Office</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-success">
            <th scope="row">Vice-Chancellor</th>
            <td>01111- 228787</td>
            <td>vicechancellor@appinst.in</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Dean Administration</th>
            <td>01112-452197</td>
            <td>deanadmin@appinst.in</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Registrar, Academic Section</th>
            <td>01113-785462</td>
            <td>Registrar@appinst.in</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Examination Section</th>
            <td>01114-745135</td>
            <td>exam@appinst.in</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Results Section</th>
            <td>01115-5286275</td>
            <td>result@appinst.in</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Finance and Accounts</th>
            <td>01116-789453</td>
            <td>finance@appinst.in</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Research Section</th>
            <td>01117-8541233</td>
            <td>research@appinst.in</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Placement office</th>
            <td>01118-78432055</td>
            <td>placement@appinst.in</td>
          </tr>
          <tr class="table-success">
            <th scope="row">APP-Campus</th>
            <td>01119-784512</td>
            <td>appcampus@appinst.in</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Admission</th>
            <td>01110-613215</td>
            <td>admission@appinst.in</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <div class="card border-success mb-3 bg-danger bg-opacity-25">
        <div class="card-body">
          <h4 class="card-title ">Address</h4>
          <p class="card-text"></p>
          <p class="card-text">APP Technical Institute</p>
          <p class="card-text">Delhi, New Delhi</p>
          <p class="card-text">110006</p>
        </div>
      </div>
      <div class="for">
        <div class="te">
          <h3> WRITE YOUR QUERY HERE </h3>
        </div>
        <br></br>
        <form onSubmit={formSubmit}>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  name="FirstName"
              value={data.FirstName}
              onChange={InputEvent}
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  name="LastName"
              value={data.LastName}
              onChange={InputEvent}
                  placeholder="Last name"
                />
              </div>
            </div>
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              name="Email"
              value={data.Email}
              onChange={InputEvent}
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Gender</label>
            <select class="form-control" 
              name="Gender"
              value={data.Gender}
              onChange={InputEvent} 
              id="exampleFormControlSelect1">
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Write your Query</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="query"
              value={data.query}
              onChange={InputEvent}
              rows="3"
            ></textarea>
          </div>
          <br></br>
          <div class="col-auto">
            <button type="submit" class="btn btn-outline-primary mb-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
export default Contact