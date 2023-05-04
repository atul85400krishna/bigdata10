import React from "react";
import { Box, Button,  } from "@mui/material";
import Menu from "./Menu"
// import { borders } from '@material-ui/system';
import {GiHamburgerMenu} from "react-icons/gi"
import { ThemeContext } from "../context/theme"; 
import { useContext } from 'react';
function Navbar() {
  const { themename, toggeltheme } = useContext(ThemeContext);
  const handleThemeChange = () =>{
    toggeltheme();
  }

   
    let Home = [
      "Home One",
      "Home Two",
      "Home Three",
      "Home Four",
      "Home Five"
    ]

    let Sevices = [
      "Sevices",
      "Sevices Details"
      
  ]
  let About  = [
    "About Us"
  ]

  let Project = [
    "Project",
    "Project Details"
  ]

  let  Blog = [
    "Blog",
    "Blog Details"
  ]

  let Pages = [
    "Shop",
"Single Product",
"Cart",
"Checkout",
"Login",
"Contact Us",
"FAQ",
"404 Error"
  ]
  return (
    <>
      <Box
        border={"none"}
        padding={{xs: "20px", md : "20px",}}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        // back={ themename==="dark" ? }
        backgroundColor={themename === "dark" ? "black" : "white"}
      >
        <Box  display={"flex"} alignItems={"center"} justifyContent={{xs:"space-between", md:"flex-start"}} width={{xs : "100%", md : 'auto'}}>
        <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAAmCAYAAACyLctlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI1N0EzODZFNzU4QTExRUFBMENBRjU5NzQzNzgzQkI5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI1N0EzODZGNzU4QTExRUFBMENBRjU5NzQzNzgzQkI5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjU3QTM4NkM3NThBMTFFQUEwQ0FGNTk3NDM3ODNCQjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjU3QTM4NkQ3NThBMTFFQUEwQ0FGNTk3NDM3ODNCQjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz42mV5qAAAGnUlEQVR42uxcX2gcRRj/Lrk0/xrjRVJplNJeJP0DajEBfamiXqoPEUG9SLFPpV4hDxoVTR6stn0oRsWW6oM5QRB8kAb1QW2sOcRSFATPoJbWGnPUqIkU2mtMmqbNP+cj3+L22Nmb2czuTpv54Edydzuzv7v97Xx/ZmYjTz07CoK2leEo+GNtDF/INPjw4GowtrwtKnHcAR95vMXwFcOMaIORpjnpk6z5rdRc8evISgSP62DY5COPJoZnzOUwplq89Qx7A+Cym85lzJgy8e5juDEALrUM+80lMaYq5t3M8HSAfHY8eqJm6O6RytvY/80MaxnqKBa+gKEuQ5ZhgKGf4aK5hEa8PDvEEGSWU/JTw3QPE2/h+2UUUtSTqFMM4wwfMPQwjJpLacRrtyTDlqAJnambgV9WX4bbx8pFwgxM8nYwvEw32oKf3LZ3jnVJNkEvkRE4TrTfHCGrmY4SLlwDF28Vw5th/RL9GyZhw9kVUDYXETl8JcNButFQyP/6SO01D23yDH0M3fS/in6tPtOaCHnA4b1u8oqBJ2wvMawJ65e4UDkHx9dNyTZ7nOFrGpF1shiFOcMU8qjs8weGXnptqg0k2hfDJnascQrGK+Zlm6E4PgHxyZegRdzrQ7+WiJuNeBfDhaqwic2ULsCXLHzwYA8wvKrp791MuYRqi5Prji1n8W7x6cf1ZD83TMNIbMZLU0yANgZEE2O7SAEaXWLRuGC/GM+22tBOMWTOZWQ/LNBvko5bsOE8eYVm22g+4IDCG3GAE+869aGcj929llLGro3ht/hs0wR0fFcHEbk6ApbWXmHYFhL1HIltmCMy0T4KKxVW4tfFSfIShIyLuBMuMTRiF71OCIRBiSLeIF6k/ZL42EdenIzYrJtr+Lt2FgZvmfbS9AmGMJee5VwqBUu1HhIxb8RzEsOAgCCBRjy/va8SPpZ4cfp3n66xzdH1k3A5Kl3CjZKAw7IU5/2Mov55IUSSE0bJJHR+J39K+FhhAy680XZRzET5PHzTeBEeOr1Stun9DG/7TI/n9ro4cazKumzaJXzI2Ny32yRIlrxBTFJQeds5ZCYplPFB8eJSxw7dM8tv112Clj8r4aYpqdnqOwOglhB0f2kXV+/VRJLClIv42gs8QYLi0JjguVtt6YnT9+2R8EjSfDBsOAB61kWvstmSBejfKF06u1UT+t2UeOQDOl+siGcAB6FYIU17CJ7KEx8U7xW4Rgxrv5K2QhPq6NrDmkho5oyaGZeYPHst8MER93ka/st1Fi7qtu1kjWyzyQCoZQp+eKtElHC4aJhhNyocgeOSlQ7L+gS+U5A3mic+KN4hhncYXtBZvPecqYL6SenVmaMBibeHM8IUznrFaBTe5eMoJiJekWRMJ8vzwgY0LJP9o6twq6+UwIO/V3tpOhgi7SwlLYWWVCjcFEe4xdx+YomfBxUHu35uiReXEe7WVbxbT1dDxUzES9PjGo4YMRCfInZLyHpdqhrFKhIJl1E77rN4lfGxz7C9T0mFVtYwHoWWvyo9FSgYPg2Regzcy0JL6ZO3vDLvIF5eItTrcBPh68MKvz8vzFLCx14im6fk7RgsLi4J3ZBE26ka2XUNln0cUMzLG6VSnBE2LyjeVEHfIpMITgveUcxdnLBjmD7PEdckeFuZlndoVziL1qqaT9TBzX4E4S1oucruGK2AtefLvDTFpWh7A6IpOknBc+tulYS4ZL9pTgzc5xJrpxQlrUnBG1sZnxLO3TsVtnBxC9DDv1Z7bY7Z/ykNw/cs+LM1prtIBUN2gkS2WpGWPF4JHyfx4vby18O+yvcNV0HttKeNy7gVaI+GwrVmi/KK+2wRuCHydFxWUIhpDzxkyn9K+PD2sL1BIg4n05kqhXtznjZzYML5GMOcJoLN0Q/fTjFfTkF/GRppG6nPrETbFmqb43iFdvBeg04TJ9HFR0vmE3F5SuSTFP8GbtsGa0W2vhfaEYrVubuHl/qgve2dY3AdmT2mzkL4ExPSfNzEG6HKQ6DPboifWwE7v5d6uhROAWON+hBVTMAv8RrTy9yeVYYFqs5iglBKhp3xkZPCa3bxiTn4vIYm+jtvLufysmJLIX+ExcmLncGIN/LezRNRfIA17gC+i9wIDsO4Ouwswx/w/wokDBMumUu4fC0i8GT0VbC4eOcGn7mcY1hPf4va/iOrpE9gwoblEzZYhiNeEPvb9ogK15gxUfECJUNDPvI4wfCuuRzGVMa8luF063MMn/vEA5/2OGtCAGMy9p8AAwDfK6e7u3/EXwAAAABJRU5ErkJggg=="
              alt=""
            />
        <Box display={{xs:"block",md : "none"}}><GiHamburgerMenu fontSize={"26px"} /></Box>
        </Box>

        <Box  display = {{xs : "none", md : "flex"}}
        alignItems={"center"}
        justifyContent={"space-between"} gap={"20px"}>
            <Menu name="Home" section={Home} />

            <Menu name=" Sevices" section={ Sevices} />
            <Menu name=" About" section={About}/>
            <Menu name=" Project" section={Project}/>
            <Menu name="Blog" section={Blog}/>
            <Menu name="Pages" section={Pages}/>
            

        </Box>

        <Box>
        <Button onClick={handleThemeChange}>
          Theme
        </Button>

        </Box>
        <Box display={{xs : "none", md :"block"}}>
          <Button
            sx={{ borderRadius: "40px" }}
            padding="0 35px"
            variant="contained"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
