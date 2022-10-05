import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Typography } from "@mui/material";

const GradientThreeColors = () => {
  const [color1, setColor1] = useState("#ad7fa8");
  const [color2, setColor2] = useState("#ef2929");
  const [color3, setColor3] = useState("#3465a4");
  const [grades, setGrades] = useState(90);

  return (
    <Box sx={{ mt: "50px" }}>
      <Paper elevation={24} sx={{ padding: "50px" }}>
        <Typography variant="h3" sx={{ fontWeight: 1000, textAlign: "center" }}>
          3 colores
        </Typography>
        <Box sx={{ mt: "50px", overflow: "auto", borderRadius: "10px" }}>
          <Box
            sx={{
              padding: "20px",
              margin: "auto",
              width: "400px",
              borderRadius: "10px",
              height: "400px",
              backgroundColor: color1,
              backgroundImage: `linear-gradient(${grades}deg, ${color1}, ${color2}, ${color3})`,
            }}
          >
            <Typography
              sx={{ color: "white", textAlign: "center" }}
              variant="body"
            >
              Para archivos .css:<br></br>
              {`background-color: ${color1};  /*Browsers antiguos*/`}
              <br></br>
              {`background-image: linear-gradient(${grades}deg, ${color1}, ${color2}, ${color3});`}
            </Typography>
            <br></br>
            <Typography sx={{ textAlign: "center" }} variant="body">
              Para estilos en línea React: <br></br>
              {`backgroundColor: "${color1}",  //Browsers antiguos`}
              <br></br>
              {`backgroundImage: "linear-gradient(${grades}deg, ${color1}, ${color2}, ${color3})"`}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "50px" }}>
              <Box
                sx={{ width: "50px", height: "50px" }}
                component="input"
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
              />
            </Box>
            <Box sx={{ width: "50px" }}>
              <Box
                sx={{ width: "50px", height: "50px" }}
                component="input"
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
              />
            </Box>
            <Box sx={{ width: "50px" }}>
              <Box
                sx={{ width: "50px", height: "50px" }}
                component="input"
                type="color"
                value={color3}
                onChange={(e) => setColor3(e.target.value)}
              />
            </Box>
            <Box sx={{ width: "50px" }}>
              <Box
                sx={{ width: "50px", height: "50px" }}
                component="input"
                type="text"
                value={grades}
                onChange={(e) => setGrades(+e.target.value)}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default GradientThreeColors;
