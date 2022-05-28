import React from 'react';

const ContactUs = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='container py-5'>
      <h1 className='pb-5 text-center'>Contact Us</h1>
      <div className='w-50 mx-auto'>
        <form onSubmit={handleSubmit} class="row g-3">
        <div class="col-md-6">
            <label for="inputName4" class="form-label">First Name</label>
            <input type="text" class="form-control" id="inputName4" />
          </div>
          <div class="col-md-6">
            <label for="inputlName4" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="inputlName4" />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPhone4" class="form-label">Phone</label>
            <input type="text" class="form-control" id="inputPhone4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Dhaka</option>
              <option>Rajshahi</option>
              <option>Joshore</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="about-us-btn">Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;