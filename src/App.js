import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GradiendGenerator from "./components/GradiendGenerator";
import GradientThreeColors from "./components/GradientThreeColors";
import GradientsCircle from "./components/GradientsCircle";
import GradientCircleThreeColors from "./components/GradientCircleThreeColors";

function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ mt: "50px" }}>
        <Typography variant="h2" sx={{ fontWeight: 1000, textAlign: "center" }}>
          {" "}
          Generador CSS{" "}
        </Typography>
        <GradiendGenerator />
        <GradientThreeColors />
        <GradientsCircle />
        <GradientCircleThreeColors />
      </Container>
    </>
  );
}

export default App;
