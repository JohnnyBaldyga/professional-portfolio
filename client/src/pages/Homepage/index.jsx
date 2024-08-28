// import React from "react";
// import "../../index.css";
// import avatar from "../../assets/avatar.jpg";
// import "./homepage.css";

// export default function Homepage() {
//   return (
//     <section className="homepage-container">
//       <div className="image-container">
//         <img src={avatar} alt="Developer" />
//       </div>
//       <div className="text-container">
//         <h2>About Me</h2>
//         <p>Jonathan is a new Developer...</p>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import "../../index.css";
import avatar from "../../assets/avatar.jpg";
import "./homepage.css";
import { Button, Modal, Box, Typography } from "@mui/material";

export default function Homepage() {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <section className="homepage-container">
      <div className="image-container">
        <img src={avatar} alt="Developer" />
      </div>
      <div className="text-container">
        <h2>About Me</h2>

        {/* Buttons for About Me, Skills, and Schools */}
        <div className="button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen("About Me!")}
            sx={{ marginRight: 1 }}
          >
            About Me
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen("Skills")}
            sx={{ marginRight: 1 }}
          >
            Skills
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen("Experience")}
          >
            Experience
          </Button>
        </div>
      </div>

      {/* Modal for displaying content */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {modalContent}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {/* Content based on the button clicked */}
            {modalContent === "About Me!" && (
              <p>
                Hi! My names Jonathan Baldyga I've been a Gymnastics Coach for
                13 years, throughout those years ive learned a vast amount about
                the dedication of and determination it requires to master ones
                craft. After years of teaching the complexity of the sport of
                gymnastics to countless high level athletes and guiding them
                towards a succesful life in and outside the gym with that same
                level dedication and determination. I have decided to pursue
                another passion of mine through software development, I love
                spending time embracing and learning new things and hope to put
                my hard work ethic towards a new direction!
              </p>
            )}
            {modalContent === "Skills" && (
              <>
                <p>Some of the skills I have Profiency include:</p>
                <ul>
                  <li>Computer Science</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>HTML & CSS</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>SQL</li>
                  <li>GitHub</li>
                </ul>
              </>
            )}
            {modalContent === "Experience" && (
              <ul>
                <li>All American Gymnastics- Head Coach 2011-2024</li>
                <li>Columbia Engineering Boot Camp- May 2024-Aug 2024</li>
              </ul>
            )}
          </Typography>
        </Box>
      </Modal>
    </section>
  );
}
