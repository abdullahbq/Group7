import React, { useState } from "react"
import Layout from "../components/Layout/Layout"

const Footer = () => {
  
  const [data, setData] = useState({
    FirstName:'',
    LastName:'',
    Email:'',
    City:'',
    State:'',
    Zip:'',
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
      prompt(
        `Your data will be saved as:  Name = ${data.FirstName} ${data.LastName}, Email Id = ${data.Email}, Address= ${data.City}, ${data.State}, ${data.Zip}. Type 'yes' to Join us.`
      );
  };
  return (
    <Layout>
        <div class="in">
            <div className="my-5">
                <h1 className="text-center">JOIN US</h1>
            </div>
            <div class="join">
            <section class="joinus-section">
              <div class="containe py-5">
                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-7 col-md-12">
        <form onSubmit={formSubmit} class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01"  name="FirstName" 
              value={data.FirstName}
              onChange={InputEvent} placeholder="First name"  required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" name="LastName" 
              value={data.LastName}
              onChange={InputEvent} placeholder="Last name"  required/>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Email Address</label>
      <div class="input-group">
      
    
    <input type="email" class="form-control" id="exampleFormControlInput1" name="Email" value={data.Email}
              onChange={InputEvent} placeholder="name@example.com" required/>
    <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">City</label>
      <input type="text" class="form-control" id="validationTooltip03" name="City" value={data.City}
              onChange={InputEvent} placeholder="City" required/>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <input type="text" class="form-control" id="validationTooltip04" name="State" value={data.State}
              onChange={InputEvent} placeholder="State" required/>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" name="Zip" value={data.Zip}
              onChange={InputEvent} placeholder="Zip" required/>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
      <div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
  <label class="custom-control-label" for="customSwitch1">Would you like us to send you important notifications?</label>
</div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
</div>
</div>
</div>
</section>
</div>
</div>

</Layout>

  )
}

export default Footer