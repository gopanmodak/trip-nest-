import React from "react";
import {  toast } from "react-toastify";

const Modal = ({packageData}) => {

    const HandleOnForm =(event) =>{
        
        event.preventDefault();
        const fname=event.target.fname.value
        const lastname=event.target.lastname.value
        const email=event.target.email.value
        const phone=event.target.phone.value
        const checked=event.target.checked.checked


        if(!fname || !lastname || !email || !phone || !checked){
            toast.error('Please Fill all the fields');
              
            return
        }

       
       toast.success('Successfully Booked');
       event.target.reset()
       document.getElementById('my_modal_1').close()
    

    }
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">{packageData.packageName}!</h3>

          <form action="" method="flex justify-center items-center gap-3 mt-5" onSubmit={HandleOnForm}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">First Name</label>
                <input
                  type="text"
                  name="fname"
                  className="input"
                  placeholder="Enter Your First Name"
                />
                <label className="label">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  className="input"
                  placeholder="Enter Your Last Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter Your Email"
                />
                <label className="label">Date</label>
                <input type="date" name="" id="" className="input" />
                <label className="label">Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Enter Contact Number"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                />
                <label className="label">Message</label>

                  <select className="select select-bordered w-full max-w-xs" required>
                    <option disabled selected>
                      Select Package
                    </option>
                    <option>{packageData.packageName}</option>
                  </select>

                <div className="flex items-center mt-4 gap-3">
                 <input type="checkbox" name="checked" id=""  className="checkbox"/>
                  <p className="text-lg">I agree to the terms and conditions</p>
                </div>
                <button className="btn btn-neutral mt-4">Submit</button>
              </fieldset>
            </div>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
