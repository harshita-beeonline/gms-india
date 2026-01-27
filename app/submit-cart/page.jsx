"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import OGP from "../../components/OGP";
import { CreateEnquiryGQL } from "../../components/graphql";
import { useAppStore } from "../../store";
import { frontendClient } from "../../lib/graphql-clients";

const FORM_STATUS = {
  INIT: "INIT",
  LOADING: "LOADING",
  SUBMITTED: "SUBMITTED",
  FAILURE: "FAILURE",
};

const SubmitCartPage = () => {
  const appStore = useAppStore();
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(FORM_STATUS.INIT);

  const handleChange = (event, id) => {
    setData({
      ...data,
      [id]: event.currentTarget.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormStatus(FORM_STATUS.LOADING);
    try {
      const cartItemsText = appStore.cartItems
        .map((item) => item.name)
        .join("\n");
      const descriptionWithItems = [
        data.message || "",
        cartItemsText ? `\n\nCart Items:\n${cartItemsText}` : "",
      ]
        .join("")
        .trim();
      const salesforcePayload = new URLSearchParams({
        last_name: data.fullName,
        email: data.email,
        phone: data.phone,
        description: descriptionWithItems,
        "00N7F00000Iu6TF": "Cart from Website",
        lead_source: "Website",
        "00NC5000000QKdV": "1",
        oid: "00D7F000002DPId",
        retURL: `https://gms-india.com${pathname}`,
        "00NC5000000QPWz": cartItemsText,
      }).toString();
      const results = await Promise.allSettled([
        frontendClient.request(CreateEnquiryGQL, {
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          cart: {
            items: appStore.cartItems,
            message: data.message || "",
          },
        }),
        fetch(
          "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: salesforcePayload,
          }
        ),
      ]);

      const backendResult = results[0];
      if (backendResult.status !== "fulfilled") {
        throw backendResult.reason;
      }
      appStore.clearCart();
      setFormStatus(FORM_STATUS.SUBMITTED);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      setFormStatus(FORM_STATUS.FAILURE);
    }
  };

  return (
    <div>
      <OGP title="Submit Cart" image="" />
      <div className="lg:container mx-auto lg:p-8 p-4">
        <h1 className="text-4xl text-gms">Submit your cart</h1>

        <div
          className={`mt-6 flex flex-col ${
            formStatus !== FORM_STATUS.INIT ? "hidden" : ""
          }`}
        >
          {appStore.cartItems.map((item, index) => (
            <p key={item.id} className="flex flex-row">
              {index + 1}. {item.name}
            </p>
          ))}
        </div>

        <div className="mt-6">
          <form
            method="POST"
            onSubmit={handleFormSubmit}
            className={`grid grid-cols-1 gap-y-6 ${
              formStatus === FORM_STATUS.SUBMITTED ? "hidden" : "block"
            }`}
          >
            <div>
              <label htmlFor="last_name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                required
                autoComplete="name"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Full name"
                value={data.fullName}
                onChange={(event) => handleChange(event, "fullName")}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Email"
                value={data.email}
                onChange={(event) => handleChange(event, "email")}
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                minLength={10}
                maxLength={10}
                autoComplete="tel"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Phone"
                value={data.phone}
                onChange={(event) => handleChange(event, "phone")}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Message"
                value={data.message}
                onChange={(event) => handleChange(event, "message")}
              />
            </div>

            <input
              id="00N7F00000Iu6TF"
              name="00N7F00000Iu6TF"
              title="Customer Segment"
              type="hidden"
              value="Cart"
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
            <input
              id="00N7F00000Iu6TF"
              name="00N7F00000Iu6TF"
              title="Customer Segment"
              type="hidden"
              value="Cart from Website"
            />

            <textarea
              id="00NC5000000QPWz"
              name="00NC5000000QPWz"
              className="hidden"
              value={appStore.cartItems.map((item) => `${item.name}`).toString()}
              readOnly
            />

            <div>
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-gms py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                type="submit"
                disabled={formStatus === FORM_STATUS.LOADING}
              >
                {formStatus === FORM_STATUS.LOADING ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          <div
            className={`${
              formStatus === FORM_STATUS.SUBMITTED ? "block" : "hidden"
            }`}
          >
            <div className="shadow-md rounded-md bg-green-200 p-8">
              <p className="text-2xl">
                Enquiry has been saved. We will get back to you soon.
              </p>
              <p className="text-xl text-gray-700">
                You will now be redirected to Homepage
              </p>
            </div>
          </div>

          <div
            className={`${
              formStatus === FORM_STATUS.FAILURE ? "block" : "hidden"
            }`}
          >
            <div className="shadow-md rounded-md bg-red-200 p-8">
              <p className="text-2xl">Something went wrong. Please try again.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitCartPage;
