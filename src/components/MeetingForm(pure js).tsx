// import { useState } from "react";
// import { Form } from "@remix-run/react";
import { MeetingFormProps } from "../types/meeting-form.types";
import { ChangeEvent, useState } from "react";
import TextInputForm from "./TextInputForm";
// import AddGuest from "./AddGuest";

export default function MeetingForm({
  toggleVisibility,
}: MeetingFormProps) {
  // const [showInput, setShowInput] = useState(false);
  const validationSchema = {
    name: "",
    email: "",
    location: "",
  };

  const [formData, setFormData] = useState(validationSchema);
  const [checkValidate, setCheckValidate] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    formValidation(e);
  };

  const formValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const formDataForValidation = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    if (formDataForValidation.name === "") {
      setCheckValidate((prev) => ({
        ...prev,
        ["name"]: "Name Should not be empty",
      }));
    } else {
      const regex = /^[a-zA-Z0-9_-]{3,25}$/;
      const validation = regex.test(formDataForValidation.name);
      if (!validation) {
        setCheckValidate((prev) => ({
          ...prev,
          ["name"]: "Invalid username.",
        }));
      } else {
        setCheckValidate((prev) => ({
          ...prev,
          ["name"]: "",
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData.name, formData.email);
  };
  return (
    <section className="mt-12 md:mt-0 md:pl-6 pt-5 pb-5">
      <form onSubmit={handleSubmit}>
        <div>
          <TextInputForm
            labelName="Name *"
            inputType="text"
            inputName="name"
            value={formData.name}
            onChange={handleChange}
          />
              {checkValidate?.name !== "" && (
            <div className="text-red-400">{checkValidate.name}</div>
          )}
          <TextInputForm
            labelName="Email address *"
            inputType="text"
            inputName="email"
            value={formData.email}
            onChange={handleChange}
          />
      
          <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Location *
          </label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="Video_Call"
              name="location"
              value="Yarsa Meet"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
              checked={formData.location === "Yarsa Meet"}
            />
            <label
              htmlFor="Video_Call"
              className="block ml-2 text-sm text-gray-600 "
            >
              Video Call (Yarsa Meet)
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="YLO_Kathmandu"
              name="location"
              value="Yarsa Labs Office, Kathmandu"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
              checked={formData.location === "Yarsa Labs Office, Kathmandu"}
            />
            <label
              htmlFor="YLO_Kathmandu"
              className="block ml-2 text-sm text-gray-600"
            >
              Yarsa Labs, Kathmandu (Office Visit)
            </label>
          </div>
          {/* <RadioButtons
            handleRadioChange={handleRadioChange}
            selectedLocation={selectedLocation}
          /> */}
          <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {/* {data.id ? "Reason For Reschedule" : "Additional notes"} */}
            Reason For Reschedule
          </label>
          <textarea
            id="message"
            name="notes"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Please share anything that will help prepare for our meeting"
          ></textarea>
          {/* {!data.id && (
            <AddGuest
              setShowInput={setShowInput}
              showInput={showInput}
              actionData={actionData}
            />
          )} */}
          <div className="flex justify-between ">
            <button
              type="button"
              onClick={toggleVisibility}
              className="text-gray-900 mt-4 bg-white border border-gray-300  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Back
            </button>
            {/* {!data.id ? (
              <button
                type="submit"
                name="_action"
                value="CREATE"
                className="text-white mt-4 bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Confirm
              </button>
            ) : (
              <button
                type="submit"
                name="_action"
                value="RESCHEDULE"
                className="text-white mt-4 bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Reschedule
              </button>
            )} */}
            <button
              type="submit"
              name="_action"
              value="CREATE"
              className="text-white mt-4 bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
