import { Typography } from '@mui/material';
import TypeWriterEffect from 'react-typewriter-effect';

function Header() {
    return (
        <div className="Header">
             
            <Typography variant="h4" component="h2" style={{ fontWeight: 200 }} gutterBottom>
                        {<TypeWriterEffect
                        textStyle={{ fontFamily: 'Roboto' }}
                        startDelay={100}
                        cursorColor="rgb(0, 128, 251)"
                        text="Hi! I'm Kevin."
                        typeSpeed={130}
                />}
            </Typography>
        </div>
    );
  }

export default Header;