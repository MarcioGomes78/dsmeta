import Header from "./components/header"
import SaleCard from "./components/SalesCard"

function App() {
  return (
    <>
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
