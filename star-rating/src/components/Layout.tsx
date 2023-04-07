import { Grid } from "@mui/material"
import StarRating from "./StarRating"


const Layout = () => {
  return (
    <Grid container sx={{ padding: 5, justifyContent: "center" }}>
      <Grid item >
        <Contents />
      </Grid>
    </Grid>
  )
}

const Contents = () => {
  return(
      <StarRating style={{backgroundColor: '#abcdef'}} />
  )
}

export default Layout;