import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.address) {
    errors.address = "Required";
  }
  if (!values.unit_no) {
    errors.unit_no = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.state) {
    errors.state = "Required";
  }
  if (!values.room_type) {
    errors.room_type = "Required";
  }
  if (!values.price) {
    errors.price = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const AddProperties = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      description: "",
      city: "",
      state: "",
      room_type: "",
      unit_no: "",
      price: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section className="container md:px-32 px-10 py-10 mx-auto">
      <h1 className="text-2xl font-medium text-center ">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h1>{" "}
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="my-2 p-10 shadow-[0px_35px_60px_-15px_rgba(0,0,0,0.3)] "
      >
        <h1 className="text-center font-bold text-3xl py-10 text-orange">
          Add a New Property
        </h1>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3  ">
          <div className="py-2">
            <label htmlFor="name" className="font-bold">
              Name
            </label>{" "}
            <br />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="enter name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="bg-[#F9F9F9] w-full form-input"
            />
            {formik.errors.name ? (
              <div className="text-red-700">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="py-2">
            <label htmlFor="address" className="font-bold">
              Address
            </label>{" "}
            <br />
            <input
              id="address"
              type="text"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="enter address"
              className="bg-[#F9F9F9] w-full form-input"
            />
            {formik.errors.address ? (
              <div className="text-red-700">{formik.errors.address}</div>
            ) : null}
          </div>
          <div className="py-2">
            <label htmlFor="unit_no" className="font-bold">
              Unit Number
            </label>{" "}
            <br />
            <input
              id="unit_no"
              type="text"
              name="unit_no"
              placeholder="Enter Unit Number"
              value={formik.values.unit_no}
              onChange={formik.handleChange}
              className="bg-[#F9F9F9] w-full form-input"
            />
            {formik.errors.unit_no ? (
              <div className="text-red-700">{formik.errors.unit_no}</div>
            ) : null}
          </div>

          <div className="py-2">
            <label htmlFor="city" className="font-bold">
              City
            </label>{" "}
            <br />
            <select
              name="city"
              id="city"
              placeholder="Enter City"
              className="bg-[#F9F9F9] w-full form-select"
            >
              <option value="Select Room Type">Select City</option>
            </select>
            {formik.errors.city ? (
              <div className="text-red-700">{formik.errors.city}</div>
            ) : null}
          </div>
          <div className="py-2">
            <label htmlFor="name" className="font-bold">
              State
            </label>{" "}
            <br />
            <select
              name="state"
              id="state"
              placeholder="Enter State"
              value={formik.values.state}
              onChange={formik.handleChange}
              className="bg-[#F9F9F9]  form-select w-full"
            >
              <option value="Select Room Type">Select State</option>
            </select>
            {formik.errors.state ? (
              <div className="text-red-700">{formik.errors.state}</div>
            ) : null}
          </div>

          <div className="py-2">
            <label htmlFor="name" className="font-bold">
              Room-type
            </label>{" "}
            <br />
            <select
              name="room_type"
              id="room_type"
              placeholder="Select Room Type"
              value={formik.values.room_type}
              onChange={formik.handleChange}
              className="bg-[#F9F9F9] w-full form-select"
            >
              <option value="Select City">Select City</option>
              <option value="Select City">Select City</option>
              <option value="Select City">Select City</option>
            </select>
            {formik.errors.room_type ? (
              <div className="text-red-700">{formik.errors.room_type}</div>
            ) : null}
          </div>
          <div className="py-2">
            <label htmlFor="Price" className="font-bold">
              Price
            </label>{" "}
            <br />
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Enter Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              className="bg-[#F9F9F9] w-full form-input"
            />
            <br />
            {formik.errors.price ? (
              <div className="text-red-700">{formik.errors.price}</div>
            ) : null}
          </div>
          <div className="py-2">
            <label htmlFor="room_type" className="font-bold">
              Room-type
            </label>{" "}
            <br />
            <select
              name="room_type"
              id="room_type"
              placeholder="Enter Room type"
              value={formik.values.room_type}
              onChange={formik.handleChange}
              className="bg-[#F9F9F9] w-full form-select"
            >
              <option value="Select Room Type">Select Room Type</option>
              <option value="1">1</option>
              <option value="Select Room Type">2</option>
            </select>{" "}
            {formik.errors.room_type ? (
              <div className="text-red-700">{formik.errors.room_type}</div>
            ) : null}
          </div>
        </div>
        <div className="py-2">
          <label htmlFor="description" className="font-bold my-2">
            Description
          </label>{" "}
          <br />
          <textarea
            id="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            name="description"
            type="textarea"
            rows="25"
            placeholder="Enter description"
            className="bg-[#F9F9F9] focus:outline-none focus:border-none w-full form-textarea outline-none h-14"
          />
          {formik.errors.description ? (
            <div className="text-red-700">{formik.errors.description}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="" className="font-bold">
            Upload Photos
          </label>
          <div className="text-center py-5 border rounded-xl border-dashed border-orange">
            <h2 className="font-bold">
              Drop your images here or <em className="text-orange">browse</em>
            </h2>
            <p>Supported: JPG, JPEG, PNG</p>
          </div>
        </div>
        <button className="my-10 rounded-md py-3 bg-orange hover:opacity-80 text-white flex  justify-center mx-auto w-5/12">
          {" "}
          Add New Properties
        </button>
      </form>
    </section>
  );
};

export default AddProperties;
