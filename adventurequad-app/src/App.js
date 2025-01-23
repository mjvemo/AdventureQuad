import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";

// Creamos un tema personalizado para nuestra aplicación
const theme = createTheme({
  palette: {
    primary: {
      main: "#0F1A20", // e91e63 Color principal de la marca
    },
    secondary: {
      main: "##F42C04", // Color secundario de la marca
    },
  },
});

// Componente principal de la aplicación
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      {/* Aplicamos el tema personalizado */}
      <CssBaseline /> {/* Normaliza estilos entre navegadores */}
      {/* AppBar */}
      <AppBar position="static">
        {" "}
        {/* Barra de navegación superior */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon /> {/* Icono de menú */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Nombre de la marca */}
            Adventure Quads
          </Typography>
          <Button color="inherit">Login</Button> {/* Botón de login */}
        </Toolbar>
      </AppBar>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          {" "}
          {/* Contenedor con ancho limitado */}
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {/* Título principal */}
            Adventure Quads Nosara
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {/* Subtítulo */}
            Costa Rican adventure tours & rental. Best quality and prices in
            Nosara
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="outlined" sx={{ mt: 3, mb: 2 }}>
              {/* Botón de llamado a la acción */}
              Ver Catálogo
              <IconButton aria-label="delete">
                <VisibilityIcon />
              </IconButton>
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Sección de productos destacados */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {/* Título de la sección */}
          Productos Destacados
        </Typography>
        <Grid container spacing={4}>
          {" "}
          {/* Grid para mostrar los productos */}
          {/* Mapeo de productos (ejemplo) */}
          {[1, 2, 3].map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="https://images.squarespace-cdn.com/content/v1/52897d8be4b0ae3ab6b93f9f/8d6030f3-2681-4c2e-8432-ccdac7bdfccf/2022-pioneer-520-gallery-01-750x750.jpg?format=1500w" // Reemplazar con imágenes de productos
                    alt="imagen de producto"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {/* Nombre del producto */}
                      Producto {item}
                    </Typography>
                    <Typography>
                      {/* Descripción del producto */}
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ver detalles</Button>{" "}
                    {/* Botón para ver detalles */}
                    <Button size="small">Agregar al carrito</Button>{" "}
                    {/* Botón para agregar al carrito */}
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Sección de búsqueda */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {/* Título de la sección */}
          Encuentra lo que buscas
        </Typography>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Buscar productos"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon /> {/* Icono de búsqueda */}
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Container>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            {/* Nombre de la empresa */}
            Belleza Radiante
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {/* Información de contacto */}
            Dirección: Calle Principal, Ciudad
            <br />
            Teléfono: +506 1234 5678
          </Typography>
          <Copyright /> {/* Componente de copyright */}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

// Componente de copyright
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        {/* Enlace a la página web */}
        Belleza Radiante
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
  //hello
}
