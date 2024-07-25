"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./FormModal.css";
import { AppStateContext } from "../Context/AppStateContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "@mui/icons-material/Close";
import { ClassNames } from "@emotion/react";

<CloseIcon />;
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export interface Props {
  open: any;
  setState: any;
}

const initialFormData = {
  name: "",
  email: "",
  phoneNo: "",
  website: "",
  sector: "",
};

export const FormModal = () => {
  const { state, setState } = React.useContext(AppStateContext);
  const [formData, setFormData] = React.useState(initialFormData);
  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    phoneNo: false,
    website: false,
    sector: false,
  });
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
    } else if (name === "email" && value && !value.includes("@")) {
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
      email: !formData.email || !formData.email.includes("@"),
      phoneNo: !formData.phoneNo,
      website: !formData.website || !formData.website.includes("."),
      sector: !formData.sector,
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }
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
        setState(false);
        setFormData(initialFormData);
        toast.success("Booking Confirm", {
          position: "top-center",
        });
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="over">
      <Modal
        open={state}
        onClose={() => setState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="btn-cross flex justify-end relative pt-4">
            {/* <Button onClick={() => setState(false)}
              style={{
                color: 'red', position: 'absolute',
                top: '-29px',
                fontSize: '24px',
                right: '-22px',
                padding: '10px'
              }}
            >x</Button> */}
            <CloseIcon
              className="tlool absolute top-[-18px] right-[-15px]"
              onClick={() => setState(false)}
            />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <h3 className="gk-h3 text-center capitalize">
                Got a <span style={{ color: "#96BF48" }}>question?</span> Ask
                our expert
              </h3>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <form onSubmit={handleSubmit}>
            <div className="form-div flex flex-col gap-4">
              <div>
                <TextField
                  label="Your Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  helperText={errors.name && "Name is required"}
                />
              </div>
              <div>
                <TextField
                  label="Email ID *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email && "Email is required"}
                />
              </div>
              <div>
                <TextField
                  label="Phone Number *"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  error={errors.phoneNo}
                  helperText={errors.phoneNo && "PhoneNo is required"}
                />
              </div>
              <div>
                <TextField
                  label="Enter Your Website *"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  error={errors.website}
                  helperText={errors.website && "Website is required"}
                />
              </div>
              <Select
                label="Select"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                error={errors.sector}
                style={{ borderColor: errors.sector ? "red" : "inherit" }}
              >
                <MenuItem value="ecommerce">Ecommerce</MenuItem>
                <MenuItem value="food&Restaurant">Food & Restaurant</MenuItem>
                <MenuItem value="beauty">Beauty</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="automotives">Automotives</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                
              </Select>
              {errors.sector && (
                <span className="text-[red] relative top-[-14px] text-[13px] ml-3">Industry is required</span>
              )}
              <Button
                type="submit"
                className="submit-button p-[15px] w-[35%] text-white"
                style={{
                  background: `linear-gradient(4deg, rgba(77, 143, 45, 1) 46%, rgba(130, 188, 41, 1) 100%)`,
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
