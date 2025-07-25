import "./App.css"
import "./components/CustomNavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/SingleMovie.css"
import CustomNavBar from "./components/CustomNavBar"
import MainMenu from "./components/MainMenu"
import MovieCarousel from "./components/MovieCarousel"
import MovieCarouselSecond from "./components/MovieCarouselSecond"
import MovieCarouselThird from "./components/MovieCarouselThird"
import CustomFooter from "./components/CustomFooter"

function App() {
  return (
    <>
      <CustomNavBar />
      <MainMenu />
      <MovieCarousel />
      <MovieCarouselSecond />
      <MovieCarouselThird />
      <CustomFooter />
    </>
  )
}

export default App
