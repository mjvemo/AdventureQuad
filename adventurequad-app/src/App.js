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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";

// Creamos un tema personalizado para nuestra aplicación
const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63", // Color principal de la marca
    },
    secondary: {
      main: "#9c27b0", // Color secundario de la marca
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
            Belleza Radiante
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
            Descubre tu Belleza Interior
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {/* Subtítulo */}
            En Belleza Radiante, te ofrecemos una amplia gama de cosméticos de
            alta calidad para realzar tu belleza natural.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
              {/* Botón de llamado a la acción */}
              Ver Catálogo
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
                <CardMedia
                  component="img"
                  image="https://plus.unsplash.com/premium_photo-1679064287018-a47e283f73f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Reemplazar con imágenes de productos
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
}
