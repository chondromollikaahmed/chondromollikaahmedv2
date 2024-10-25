"use client";
import { Fragment } from "react";

// Error components must be Client Components
export default function SubmitButton() {
  return (
    <a
      
      className="btn"
      onClick={() => {
        (document.getElementById("cform") as HTMLFormElement)?.submit();
        return false;
      }}
    >
      <span>Send Message</span>
    </a>
  );
}


