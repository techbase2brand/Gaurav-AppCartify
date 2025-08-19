import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialFormData = {
  name: "",
  email: "",
  phoneNo: "",
  website: "",
  sector: "",
};

const QuestionForm = () => {
  const [formData, setFormData] = React.useState(initialFormData);
  const router = useRouter();
  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    phoneNo: false,
    website: false,
    sector: false,
  });
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // Validation for phoneNo to accept only numbers
    if (name === "phoneNo" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate website contains at least one dot
    if (name === "website" && value && !value.includes(".")) {
      setErrors({
        ...errors,
        [name]: true,
      });
    } else {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      phoneNo: !formData.phoneNo,
      website: !formData.website || !formData.website.includes("."),
      sector: !formData.sector,
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://invoice-backend.base2brand.com/api/add-appcartify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setFormData(initialFormData);
        toast.success("Booking Confirm", {
          position: "top-center",
        });
        router.push("/thank-you");
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-[#151820] lg:pt-[60px] lg:pb-[60px] pt-14 pb-14 border-[#8d8d8d7a] border-b-2 ">
        <div className="container">
          <div className="queastionform border-2 border-white rounded-xl">
            <h2 className="gk-h2  text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6 " data-aos="fade-up"  data-aos-duration="800">
              GOT A <span style={{ color: "#96BF48" }}>QUESTION? ASK</span> OUR
              EXPERT
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="display-form flex flex-col gap-5 lg:pb-12 lg:pr-14 lg:pl-14 pl-4 pr-4 pb-[24px]">
                <div className="flex  flex-col  gap-[5px]"  data-aos="fade-right"  data-aos-duration="800">
                  <label htmlFor="name" className="text-white ">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white  text-[17px]"
                  />
                  {errors.name && (
                    <span className="text-[red] text-[16px]">Name is required</span>
                  )}
                </div>
                <div className="flex  flex-col  gap-[5px]"  data-aos="fade-left"  data-aos-duration="900">
                  <label htmlFor="email" className="text-white">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white text-[17px]"
                  />
                  {errors.email && (
                    <span className="text-[red]  text-[16px]">Email is required</span>
                  )}
                </div>
                <div className="flex  flex-col  gap-[5px]"  data-aos="fade-right"  data-aos-duration="1000">
                  <label htmlFor="phoneNo" className="text-white">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white  text-[17px]"
                  />
                  {errors.phoneNo && (
                    <span className="text-[red]   text-[16px] ">PhoneNo is required</span>
                  )}
                </div>
                <div className="flex  flex-col gap-[5px]"  data-aos="fade-left"  data-aos-duration="1100">
                  <label htmlFor="website" className="text-white">
                    Enter Your Website *
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white  text-[17px]"
                  />
                  {errors.website && (
                    <span className="text-[red]  text-[16px]">Website is required</span>
                  )}
                </div>
                <div className="flex  flex-col  gap-[5px]"  data-aos="fade-right"  data-aos-duration="1200">
                  <label htmlFor="sector" className="text-white"></label>
                  <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white  pt-[20px]"

                  >

                    <option value="" className="bg-[#151820] text-white">
                      Select an Industry
                    </option>
                    <option value="ecommerce" className="bg-[#151820] text-white">
                      Ecommerce
                    </option>
                    <option value="food&Restaurant" className="bg-[#151820] text-white">
                      Food & Restaurant
                    </option>
                    <option
                      value="beauty"
                      className="bg-[#151820] text-white"
                    >
                      Beauty
                    </option>
                    <option
                      value="sports"
                      className="bg-[#151820] text-white"
                    >
                      Sports
                    </option>
                    <option
                      value="automotives"
                      className="bg-[#151820] text-white"
                    >
                      Automotives
                    </option>
                    <option
                      value="electronics"
                      className="bg-[#151820] text-white"
                    >
                      Electronics
                    </option>

                  </select>
                  {errors.sector && <span className="text-[red] text-[16px]">Industry is required</span>}

                </div>

                <div className="w-[30%]">
                  <button className="gk-button" disabled={loading}  data-aos="fade-left"  data-aos-duration="1300">{loading ? "Submitting..." : "Submit"}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuestionForm;
