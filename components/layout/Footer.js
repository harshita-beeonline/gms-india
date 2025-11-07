"use client";
import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { usePathname } from "next/navigation";
import styles from "../../styles/Footer.module.scss";
import FooterLink from "./FooterLink";

const Footer = () => {
  const pathname = usePathname();
  const formRef = useRef(null);
  const captchaRef = useRef(null);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      last_name: "",
      company: "",
      email: "",
      phone: "",
      description: "",
    },
    validationSchema: Yup.object({
      last_name: Yup.string()
        .matches(
          /^[A-Za-z'\s]{1,20}$/,
          "Use only letters/spaces and keep it under 20 characters."
        )
        .required("Name is required"),
      company: Yup.string()
        .max(20, "Company can be at most 20 characters.")
        .required("Company is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits.")
        .required("Phone is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: () => {},
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;

    if (!form) {
      return;
    }

    const touchedAll = Object.keys(formik.initialValues).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    formik.setTouched(touchedAll, true);

    const validationErrors = await formik.validateForm();
    if (Object.keys(validationErrors).length > 0) {
      formik.setErrors(validationErrors);
      return;
    }

    if (!verified) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    setShowSuccessMessage(true);

    setTimeout(() => {
      form.submit();
    }, 500);
  };

  const closeEnquiry = () => {
    setIsEnquireOpen(false);
    setShowSuccessMessage(false);
    setVerified(false);
    captchaRef.current?.resetCaptcha();
    formik.resetForm();
  };

  return (
    <div className={styles["footer-all-content-box"]}>
      <div className={styles["enquire-fixed-button"]}>
        <button onClick={() => setIsEnquireOpen(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17.9997C9 17.9997 15 13.5808 15 11.9997C15 10.4186 9 5.99976 9 5.99976"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Enquire Now
        </button>
      </div>
      {isEnquireOpen && (
        <div className={styles["enquire-popup-overlay"]}>
          <div className={styles["enquire-popup-content"]}>
            <button
              className={styles["enquire-close-btn"]}
              onClick={closeEnquiry}
            >
              ✖
            </button>
            <form
              ref={formRef}
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
              method="POST"
              onSubmit={handleSubmit}
              noValidate
              className={styles["footer-inputs-form"]}
            >
              <div className={styles["footer-both-inputs"]}>
                <div className={styles["input-error"]}>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Full Name*"
                    {...formik.getFieldProps("last_name")}
                    required
                  />
                  {formik.touched.last_name && formik.errors.last_name && (
                    <div className={styles["error-message"]}>
                      {formik.errors.last_name}
                    </div>
                  )}
                </div>
                <div className={styles["input-error"]}>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company*"
                    maxLength={20}
                    {...formik.getFieldProps("company")}
                    required
                  />
                  {formik.touched.company && formik.errors.company && (
                    <div className={styles["error-message"]}>
                      {formik.errors.company}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles["footer-both-inputs"]}>
                <div className={styles["input-error"]}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email*"
                    {...formik.getFieldProps("email")}
                    required
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className={styles["error-message"]}>
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className={styles["input-error"]}>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number*"
                    {...formik.getFieldProps("phone")}
                    required
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className={styles["error-message"]}>
                      {formik.errors.phone}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles["footer-both-inputs"]}>
                <div className={styles["input-error"]}>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Message"
                    rows="5"
                    {...formik.getFieldProps("description")}
                    required
                  ></textarea>
                  {formik.touched.description &&
                    formik.errors.description && (
                      <div className={styles["error-message"]}>
                        {formik.errors.description}
                      </div>
                    )}
                </div>
              </div>
              <input
                id="00N7F00000Iu6TF"
                name="00N7F00000Iu6TF"
                title="Customer Segment"
                type="hidden"
                value="About Us"
              />
              <input
                id="lead_source"
                name="lead_source"
                title="Lead Source"
                type="hidden"
                value="Website"
              />
              <input
                id="00NC5000000QKdV"
                name="00NC5000000QKdV"
                type="hidden"
                value="1"
              />
              <input type="hidden" name="oid" value="00D7F000002DPId" />
              <input
                type="hidden"
                name="retURL"
                value={`https://gms-india.com${pathname}`}
              />

              {!verified && (
                <div className={styles["captcha-wrapper"]}>
                  <HCaptcha
                    ref={captchaRef}
                    onVerify={() => {
                      setVerified(true);
                    }}
                    sitekey="662d2fc6-49e5-47f6-b2e1-a7844a3dab7a"
                  />
                </div>
              )}

              {showSuccessMessage && (
                <div className={styles["success-message"]}>
                  Enquiry has been saved. We will get back to you soon.
                </div>
              )}

              <button type="submit">
                Submit{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.25977 2.56934C9.16667 2.47624 9.05664 2.42969 8.92969 2.42969C8.80273 2.42969 8.69271 2.47624 8.59961 2.56934C8.50651 2.65397 8.45996 2.75977 8.45996 2.88672C8.45996 3.01367 8.50651 3.1237 8.59961 3.2168L11.9258 6.54297H0.957031C0.830078 6.54297 0.722168 6.5874 0.633301 6.67627C0.544434 6.76514 0.5 6.87305 0.5 7C0.5 7.12695 0.544434 7.23486 0.633301 7.32373C0.722168 7.4126 0.830078 7.45703 0.957031 7.45703H11.9258L8.59961 10.7832C8.50651 10.8678 8.45996 10.9757 8.45996 11.1069C8.45996 11.2381 8.50651 11.346 8.59961 11.4307C8.69271 11.5238 8.80273 11.5703 8.92969 11.5703C9.05664 11.5703 9.16667 11.5238 9.25977 11.4307L13.3604 7.33008C13.4535 7.23698 13.5 7.12695 13.5 7C13.5 6.87305 13.4535 6.76302 13.3604 6.66992L9.25977 2.56934Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
      <FooterLink />
    </div>
  );
};

export default Footer;
