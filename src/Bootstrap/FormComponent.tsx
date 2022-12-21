
import React from 'react'

const FormComponent = () => {
  return (
    <div>FormComponent



<div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-3">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
            
          </div>
          <div className="col-3">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
      </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormComponent