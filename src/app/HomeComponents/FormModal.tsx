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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phoneNo || !formData.website || !formData.sector) {
      toast.error("Please fill all fields before submitting", {
        position: "top-center",
      });
      return;
    }
    try {
      const response = await fetch("https://invoice-backend.base2brand.com/api/add-appcartify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
            <Button onClick={() => setState(false)}
              style={{
                color: 'red', position: 'absolute',
                top: '-29px',
                fontSize: '24px',
                right: '-22px',
                padding: '10px'
              }}
            >x</Button>
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
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  label="Email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  label="Phone Number"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextField
                  label="Enter Your Website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              <Select
              
                label="Select"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
              >
                
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="healthcare">Healthcare</MenuItem>
              
              </Select>
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
