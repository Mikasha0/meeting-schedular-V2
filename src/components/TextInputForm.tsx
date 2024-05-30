import { ChangeEventHandler } from "react";

interface TextInputFormTypes {
  labelName: string;
  inputType: string;
  inputName: string;
  value?: string;
  onChange?:ChangeEventHandler<HTMLInputElement>
}
export default function TextInputForm({
  labelName,inputType,inputName,...inputProps
}:TextInputFormTypes){
  return (
    <div className="mb-2">
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label>
      <input
        type={inputType}
        name={inputName}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        style={{ width: "370px" }}
        {...inputProps}
        required
      />
    </div>
  );
}
