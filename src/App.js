import './App.scss'
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Content from "./components/Layout/Content"
import Background from "./components/Layout/Background"

function App() {
  return (
    <div className="App">
      <Background/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
