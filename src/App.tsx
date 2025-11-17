import { AppBar, IconButton, Toolbar } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import { Web } from "@mui/icons-material";
import { useState } from "react";
import { Datasheet } from "./components";

const App = () => {

  const [isDataSheetOpen, setIsDataSheetOpen] = useState(false);

  return (
    <BrowserRouter>
      <AppBar position="fixed" color="primary" sx={{top: 'auto', bottom: 0}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open data sheet"
            onClick={() => setIsDataSheetOpen(true)}
          >
            <Web />
          </IconButton>
        </Toolbar>
      </AppBar>
      {isDataSheetOpen && <Datasheet close={() => setIsDataSheetOpen(false)} />}
    </BrowserRouter>
  )
}

export default App
