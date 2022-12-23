import Date from "./Date";
import Header from "./Header";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Grid from '@mui/material/Grid';
function App() {
  return (
    <div >
       <Grid container spacing={2}>
       <Grid item xs={12}>
       <Header />
        </Grid>
        <Grid item xs={8}>
       < Body />
        </Grid>
        <Grid item xs={4}>
       < Sidebar />
        </Grid>
      
      </Grid>
    </div>
  );
}

export default App;
