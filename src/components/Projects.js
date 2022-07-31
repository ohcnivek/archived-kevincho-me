import { Typography } from "@mui/material";

function Projects() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        style={{ fontWeight: 500 }}
        gutterBottom
      >
        {"Projects"}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {
          "Im studying computer science at Georgia Tech. More specifically how the internet works (info networks) and computer graphics (media). \n"
        }
      </Typography>
    </div>
  );
}

export default Projects;
