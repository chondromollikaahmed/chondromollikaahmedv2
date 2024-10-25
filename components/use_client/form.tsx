"use client";

import SubmitButton from "@/components/use_client/buttons";
import { useEffect } from "react";

export default function Form() {
  useEffect(() => {
    // Load Pageclip script dynamically
    const script = document.createElement("script");
    script.src = "https://s3-us-west-2.amazonaws.com/pageclip.co/v1/pageclip.js";
    script.async = true;
    script.onload = () => {
    interface Pageclip {
        form: (options: {
            form: string;
            onSubmit: () => void;
            onResponse: (error: any, response: any) => void;
        }) => void;
    }

    (window as any).Pageclip.form({
        form: "#cform",
        onSubmit: () => console.log("Form submitted!"),
        onResponse: (error: any, response: any) => console.log("Form response:", response),
    });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <form
      id="cform"
      action="https://send.pageclip.co/p0MmUgOv3PWaRG0xIdfE1g2DtDdkAODQ"
      className="pageclip-form"
      data-pageclip-form="default"
      method="post"
    >
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="group">
            <label>
              Your Full Name <b>*</b>
              <input type="text" name="name" required />
            </label>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="group">
            <label>
              Your Email Address <b>*</b>
              <input type="email" name="email" required />
            </label>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="group">
            <label>
              Your Subject <b>*</b>
              <input type="text" name="subject" required />
            </label>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="group">
            <label>
              Your Message <b>*</b>
              <textarea name="message" required />
            </label>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
          <div className="terms-label">* Accept the terms and conditions.</div>
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
