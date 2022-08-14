import { Typography } from "@mui/material";
import TypeWriterEffect from "react-typewriter-effect";
import BitmojiImage from "../img/u-there.png";
import Box from "@mui/material/Box";

function Header() {
  return (
    <div className="Header">
      <Box sx={{ flexDirection: "row", display: "flex", alignItems: "end" }}>
        <Box sx={{ display: "flex", paddingBottom: 2 }}>
          <img src={BitmojiImage} alt="bitmoji" width="100" height="100"></img>
        </Box>
        <Typography
          variant="h4"
          component="h2"
          style={{ fontWeight: 200 }}
          gutterBottom
        >
          {
            <TypeWriterEffect
              textStyle={{ fontFamily: "Roboto" }}
              startDelay={100}
              cursorColor="rgb(0, 128, 251)"
              text="Hi! I'm Kevin."
              typeSpeed={130}
            />
          }
        </Typography>
      </Box>
    </div>
  );
}

export default Header;
