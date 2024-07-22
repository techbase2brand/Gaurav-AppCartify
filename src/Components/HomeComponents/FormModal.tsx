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
  setOpen: any;
}
export const FormModal: React.FC<Props> = ({ open, setOpen }) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    website: "",
    industry: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Submit the form data to your server
    console.log(formData);
  };

  return (
    <div className="over">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="btn-cross flex justify-end relative pt-4">
          <Button onClick={() => setOpen(false)} 
            style={{color:'red', position:'absolute' ,
              top: '-29px',
              fontSize: '24px',
              right: '-22px',
              padding: '10px' }}
            >x</Button>
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <h3 className="gk-h3 text-center  ">
                Got a <span style={{ color: "#96BF48" }}>question?</span> Ask
                our expert
              </h3>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Duooiiiis mollis, est non commodo luctus, nisi erat porttitor
            ligula. */}
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="form-div flex flex-col gap-4">
              <div>
                <TextField
                  label="Your Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <TextField
                  label="Email ID*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <TextField
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
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
                label="Select Your Industry"
                name="industry"
                defaultValue="technology" // Set the default value to "technology"
                onChange={handleChange}
              >
                {/* <MenuItem value="">Select an Industry</MenuItem> */}
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="healthcare">Healthcare</MenuItem>
                {/* Add more industry options here */}
              </Select>

              <Button
                onClick={() => setOpen(false)}
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
