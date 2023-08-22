import React, { useContext, useState } from "react";
import { TextField, Stack, Button, InputAdornment } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkIcon from "@mui/icons-material/Work";
import { themeColor } from "../../App";
import ContextAPI from "../../contextAPI/contextAPI";

const BasicInfoForm = () => {
  const { resumeInformation, setResumeInformation, sections } =
    useContext(ContextAPI);
  // form data taken from localstorage
  const localData = JSON.parse(localStorage.getItem(sections.basicInfo)) || {
    jobTitle: "",
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    linkedIn: "",
    github: "",
    website: "",
    twitter: "",
  };
  console.log(localData);

  const [formData, setFormData] = useState({ ...localData });

  const handleSubmit = (e) => {
    // Here you can perform actions with the gathered data
    // e.preventDefault();
    const data = {
      id: sections.basicInfo,
      sectionTitle: "",
      detail: formData,
    };
    setResumeInformation({
      ...resumeInformation,
      [sections.basicInfo]: data,
    });
    //save into the localstorage
    localStorage.setItem(sections.basicInfo, JSON.stringify(formData));

    console.log("Submitted data:", resumeInformation);
  };

  return (
    <Stack spacing={2} mt={2}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <TextField
        label="Job Title"
        variant="outlined"
        fullWidth
        value={formData.jobTitle}
        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Stack direction="row" alignItems="center" spacing={1}>
        {/* <TextField
          label="Country Code"
          variant="outlined"
          type="number"
          value={formData.countryCode}
          onChange={(e) =>
            setFormData({ ...formData, countryCode: e.target.value })
          }
          InputProps={{
            startAdornment: <InputAdornment position="start">+</InputAdornment>,
          }}
          sx={{ width: "120px" }}
        /> */}
        <TextField
          label="Phone Number"
          variant="outlined"
          type="tel"
          fullWidth
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Stack>
      <TextField
        label="LinkedIn"
        variant="outlined"
        fullWidth
        value={formData.linkedIn}
        onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkedInIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="GitHub"
        variant="outlined"
        fullWidth
        value={formData.github}
        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GitHubIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Website"
        variant="outlined"
        fullWidth
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LanguageIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Twitter"
        variant="outlined"
        fullWidth
        value={formData.twitter}
        onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TwitterIcon />
            </InputAdornment>
          ),
        }}
      />
      {/* <TextField
        label="Others Link"
        variant="outlined"
        fullWidth
        value={formData.others}
        onChange={(e) => setFormData({ ...formData, others: e.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LanguageIcon />
            </InputAdornment>
          ),
        }}
      /> */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          width: "fit-content",
          bgcolor: themeColor,
          ":hover": {
            bgcolor: "red",
          },
        }}
      >
        Save
      </Button>
    </Stack>
  );
};

export default BasicInfoForm;
