import "./App.css"
import "./components/CustomNavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavBar from "./components/CustomNavBar"
import MainMenu from "./components/MainMenu"
import MovieCarousel from "./components/MovieCarousel"

function App() {
  return (
    <>
      <CustomNavBar />
      <MainMenu />
      <MovieCarousel SectionTitle="" />
    </>
  )
}

export default App
