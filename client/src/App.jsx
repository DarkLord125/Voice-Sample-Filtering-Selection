import Filterbar from "./components/Filterbar"
import GridList from "./components/GridList"
import { Box } from "@mui/material";

function App() {
  return (
    <Box display={"flex"}>
          <Filterbar/>
          <GridList/>
    </Box>
  )
}

export default App
