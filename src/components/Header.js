import { Typography } from '@mui/material';

function Header() {
    return (
        <div className="Header">
            <Typography variant="h3" component="h2" style={{ fontWeight: 500 }} gutterBottom>
                {"Hi! I'm Kevin."}
            </Typography>
        </div>
    );
  }

export default Header;