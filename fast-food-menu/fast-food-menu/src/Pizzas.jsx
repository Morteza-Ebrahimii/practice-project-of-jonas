import Pizza from './Pizaa'
import data from '../public/data.js'


function Pizzas() {
    return (
        <>
            <ul className="pizzas">
            < Pizza data={data}/>
            </ul>
        </>
    )
}
export default Pizzas