import React, { useContext, useRef, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import Editor from "../Editor/Editor";
import ContextAPI from "../../contextAPI/contextAPI";
import { themeColor } from "../../App";
import Resume from "../Resume/Resume";
import ReactToPrint, { useReactToPrint } from "react-to-print";

const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

const MainSection = () => {
  // const [resumeInformation, setResumeInformation] = useState({
  //   [sections.basicInfo]: {
  //     id: sections.basicInfo,
  //     sectionTitle: "",
  //     detail: {},
  //   },
  //   [sections.workExp]: {
  //     id: sections.workExp,
  //     sectionTitle: "",
  //     details: ["hi", "44"],
  //   },
  //   [sections.projects]: {
  //     id: sections.projects,
  //     sectionTitle: "",
  //     details: ["yo"],
  //   },
  //   [sections.education]: {
  //     id: sections.education,
  //     sectionTitle: "",
  //     details: [],
  //   },
  //   [sections.skills]: {
  //     id: sections.skills,
  //     sectionTitle: "",
  //     points: [],
  //   },
  //   [sections.achievements]: {
  //     id: sections.achievements,
  //     sectionTitle: "",
  //     points: [],
  //   },
  //   [sect  // const [resumeInformation, setResumeInformation] = useState({
  //   [sections.basicInfo]: {
  //     id: sections.basicInfo,
  //     sectionTitle: "",
  //     detail: {},
  //   },
  //   [sections.workExp]: {
  //     id: sections.workExp,
  //     sectionTitle: "",
  //     details: ["hi", "44"],
  //   },
  //   [sections.projects]: {
  //     id: sections.projects,
  //     sectionTitle: "",
  //     details: ["yo"],
  //   },
  //   [sections.education]: {
  //     id: sections.education,
  //     sectionTitle: "",
  //     details: [],
  //   },
  //   [sections.skills]: {
  //     id: sections.skills,
  //     sectionTitle: "",
  //     points: [],
  //   },
  //   [sections.achievements]: {
  //     id: sections.achievements,
  //     sectionTitle: "",
  //     points: [],
  //   },
  //   [sections.hobbies]: {
  //     id: sections.hobbies,
  //     sectionTitle: "",
  //     points: [],
  //   },
  //   [sections.summary]: {
  //     id: sections.summary,
  //     sectionTitle: "",
  //     detail: "",
  //   },
  //   [sections.others]: {
  //     id: sections.others,
  //     sectionTitle: "",
  //     detail: {},
  //   },
  // });ions.hobbies]: {
  //     id: sections.hobbies,
  //     sectionTitle: "",
  //     points: [],
  //   },
  //   [sections.summary]: {
  //     id: sections.summary,
  //     sectionTitle: "",
  //     detail: "",
  //   },
  //   [sections.others]: {
  //     id: sections.others,
  //     sectionTitle: "",
  //     detail: {},
  //   },
  // });
  const { resumeInformation, setResumeInformation, sections } =
    useContext(ContextAPI);
  const resumeRef = useRef();
  const componentRef = useRef();

  // Use the useReactToPrint hook to get the print function
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        maxWidth: "100vw",
        m: "auto",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: "2.5rem", padding: "50px 0" }}>
        Resume Builder
      </Typography>
      <Editor sections={sections} information={resumeInformation} />
      <Resume />
    </Stack>
  );
};

export default MainSection;
