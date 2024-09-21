
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Box from '@mui/material/Box';
import WeatherApp from "./WeatherApp";
function App() {
  let handleClick = () =>{
    console.log("Button was clicked");
  }
  return(
    <>
    <WeatherApp/>
      {/* <Button variant="text" onClick={handleClick}>Text</Button>
      <Button variant="contained" onClick={handleClick}>Text</Button>
      <Button variant="outlined" onClick={handleClick}>Text</Button>

      <Button variant="outlined" color="secondary" onClick={handleClick} size="small">Text</Button>
      <Button variant="contained" color="error" onClick={handleClick}>Text</Button>
      <Button variant="contained" color="success" onClick={handleClick}>Text</Button>
      <Button variant="contained"  onClick={handleClick} startIcon={<DeleteIcon />}>Delete</Button> */}
    </>
  );
}
export default App
