import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, { placeholder: string }>(
  ({ placeholder }, reference) => {
    return (
      <div>
        <input
          ref={reference}
          placeholder={placeholder}
          type={"text"}
          className="px-4 py-2 border rounded m-2"
        />
      </div>
    );
  }
);
