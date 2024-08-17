import { useState } from "react";

/* eslint-disable react/prop-types */
const CommonInput = ({ label, type: inputType, placeholder, nameId }) => {
  const [type, setType] = useState(inputType);

  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="font-medium mb-4">
        {label}
      </label>
      <div className="relative">
        <input
          name={nameId}
          id={nameId}
          type={type}
          placeholder={placeholder}
          minLength={
            nameId === "username" ? 2 : nameId.includes("password") ? 6 : 0
          }
          maxLength={nameId.includes("password") ? 16 : 64}
          required
          className="w-full border rounded-lg px-5 py-2.5 placeholder:text-sm"
        />
        {nameId.includes("password") && (
          <>
            <button
              onClick={() => {
                type === "password" ? setType("text") : setType("password");
              }}
              type="button"
              className="absolute right-4 top-3"
            >
              {type !== "password" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CommonInput;
