import { MeetingFormProps } from "../types/meeting-form.types";
import TextInputForm from "./TextInputForm";
import RadioButtons from "./RadioButtons";
import { MeetingLocations } from "../types/z.schema";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const zString = (
  minLength = 1,
  maxLength = 100,
  field = "name",
  minMessage = "should not be empty or less than",
  maxMessage = "should not be greater than "
) => {
  return z
    .string()
    .min(minLength, { message: field + " " + minMessage + " " + minLength })
    .max(maxLength, { message: maxMessage + " " + maxLength });
};

const meetingSchemaOBJ = z.object({
  name: zString().regex(/^[^\d]*$/),
  email: z.string().email({ message: "Invalid Email" }),
  location: z.nativeEnum(MeetingLocations),
  notes: zString().optional().nullable(),
});

type createMeetingDTO = z.infer<typeof meetingSchemaOBJ>;

export default function MeetingForm({ toggleVisibility }: MeetingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createMeetingDTO>({ resolver: zodResolver(meetingSchemaOBJ) });
  const onSubmit: SubmitHandler<createMeetingDTO> = (data) => console.log(data);

  return (
    <section className="mt-12 md:mt-0 md:pl-6 pt-5 pb-5">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <TextInputForm
            labelName="Name *"
            inputType="text"
            inputName="name"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <TextInputForm
            labelName="Email address *"
            inputType="text"
            inputName="email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Location *
          </label>
          <RadioButtons
            labelName="Video Call (Yarsa Meet)"
            value={MeetingLocations["Yarsa Meet"]}
            {...register("location")}
          />
          <RadioButtons
            labelName="Yarsa Labs, Kathmandu (Office Visit)"
            value={MeetingLocations["Yarsa Labs Office, Kathmandu"]}
            {...register("location")}
          />
          <RadioButtons
            labelName="Yarsa Labs, Pokhara (Office Visit)"
            value={MeetingLocations["Yarsa Labs Office, Pokhara"]}
            {...register("location")}
          />
          <label className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Reason For Reschedule
          </label>
          <textarea
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Please share anything that will help prepare for our meeting"
            {...register("notes")}
          ></textarea>
          <div className="flex justify-between ">
            <button
              type="button"
              onClick={toggleVisibility}
              className="text-gray-900 mt-4 bg-white border border-gray-300  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Back
            </button>
            <button
              type="submit"
             
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
