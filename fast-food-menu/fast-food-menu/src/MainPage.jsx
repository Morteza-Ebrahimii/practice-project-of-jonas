import Pizzas from "./Pizzas"


function MainPage(){
    return(
        <>
        <main className="menu">
            <h2>Our menu</h2>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
           <Pizzas />
        </main>
        </>
    )
}
export default MainPage