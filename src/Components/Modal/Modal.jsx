import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Modal = ({ packageData, openModal, setOpenModal }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (openModal) {
      const modal = document.getElementById("my_modal_1");
      if (modal) {
        modal.showModal();
      }
    }
  }, [openModal]);

  if (!openModal) return null;

  const HandleOnForm = (event) => {
    event.preventDefault();

    const fname = event.target.fname.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const checked = event.target.checked.checked;

    if (!fname || !lastname || !email || !phone) {
      toast.error("Please Fill all the fields");
      return;
    }
    if(!checked){
      toast.error("Please Accept Terms and Conditions");
      return;
    }
        const bookingData = {
      packageId: packageData.id,
      packageName: packageData.packageName,
      fname,
      lastname,
      email,
      phone,
    };

    toast.success("Successfully Booked");
    event.target.reset();

    document.getElementById("my_modal_1").close();
    setOpenModal(false);
    localStorage.setItem("bookingData", JSON.stringify(bookingData));

        navigate("/booking");

  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">
          {packageData.packageName}
        </h3>

        <form onSubmit={HandleOnForm}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">First Name</label>
              <input name="fname" className="input" />

              <label className="label">Last Name</label>
              <input name="lastname" className="input" />

              <label className="label">Email</label>
              <input type="email" name="email" className="input" />

              <label className="label">Date</label>
              <input type="date" className="input" />

              <label className="label">Contact Number</label>
              <input
                type="tel"
                name="phone"
                className="input"
                pattern="[0-9]{10}"
              />

              <label className="label">Message</label>
              <select className="select select-bordered w-full">
                <option>{packageData.packageName}</option>
              </select>

              <div className="flex items-center gap-3 mt-4">
                <input
                  type="checkbox"
                  name="checked"
                  className="checkbox"
                />
                <p>I agree to the terms and conditions</p>
              </div>

              <button className="btn btn-neutral mt-4">
                Submit
              </button>
            </fieldset>
          </div>
        </form>

        <div className="modal-action">
          <button
            className="btn"
            onClick={() => {
              document.getElementById("my_modal_1").close();
              setOpenModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
