import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header"
import SaleCard from "./components/SalesCard"

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SaleCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
