import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SpeakerData from "./factor/SpeakerData.js";
import "./style/SpeakerPage.style.css";

export default function Speaker() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Speaker</h1>
      <div className="speaker">
        {SpeakerData.map((singleItem, index) => (
          <Stack key={index} spacing={1} alignItems="center">
            <Avatar
              sx={{
                bgcolor: "transparent",
                width: 150,
                height: 150,
                border: "solid",
                borderColor: "#06d001",
                borderRadius: 100,
              }} // Increased size
              variant="rounded"
              aria-label={singleItem.name}
              title={singleItem.name}
            >
              <img
                src={singleItem.image}
                alt={singleItem.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensures the image maintains aspect ratio
                  borderRadius: "8px", // Matches 'rounded' variant
                }}
              />
            </Avatar>
            {/* Add name below the avatar */}
            <div className="ribbon">
              <Typography variant="h6" component="div" align="center">
                {singleItem.name}
              </Typography>
            </div>
          </Stack>
        ))}
      </div>
    </>
  );
}
