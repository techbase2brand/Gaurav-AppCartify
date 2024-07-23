import React, { useState } from "react";

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
  });

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      // Send the form data to your backend API
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission
        console.log("Question submitted successfully!");
        // Reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          industry: "",
        });
      } else {
        // Handle errors
        console.error("Error submitting question:", response.status);
      }
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  return (
    <>
      <section className="bg-[#151820] lg:pt-[60px] lg:pb-[60px] pt-14 pb-14 border-[#8d8d8d7a] border-b-2">
        <div className="container">
          <div className="queastionform border-2 border-white rounded-xl">
            <h2 className="gk-h2  text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6 ">
              GOT A <span style={{color:"#96BF48"}}>QUESTION? ASK</span>  OUR EXPERT
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="display-form flex flex-col gap-5 lg:pb-12 lg:pr-14 lg:pl-14 pl-4 pr-4 pb-[24px]">
                <div className="flex  flex-col lg:gap-4 gap-[5px]">
                  <label htmlFor="name" className="text-white ">
                    Your Name  
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white"
                  />
                </div>
                <div className="flex  flex-col lg:gap-4 gap-[5px]">
                  <label htmlFor="email" className="text-white">
                    Email ID 
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white"
                  />
                </div>
                <div className="flex  flex-col lg:gap-4 gap-[5px]">
                  <label htmlFor="phone" className="text-white">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white"
                  />
                </div>
                <div className="flex  flex-col lg:gap-4 gap-[5px]">
                  <label htmlFor="website" className="text-white">
                    Enter Your Website:
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white"
                  />
                </div>
                <div className="flex  flex-col lg:gap-4 gap-[5px]">
                  <label htmlFor="industry" className="text-white"></label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="bg-transparent border-b-2 border-white focus:outline-none text-white lg:pb-8 pb-4"
                  >
                    <option value="" className="bg-[#151820] text-white">Select an Industry</option>
                    <option value="tech" className="bg-[#151820] text-white">Technology</option>
                    <option value="finance" className="bg-[#151820] text-white">Finance</option>
                    <option value="healthcare" className="bg-[#151820] text-white">Healthcare</option>
                  </select>
                </div>
                <div className="w-[30%]">
                  <button className="gk-button ">Submit</button>
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
