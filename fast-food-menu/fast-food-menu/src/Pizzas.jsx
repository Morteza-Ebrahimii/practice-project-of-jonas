import Pizza from './Pizaa'
import data from '../public/data.js'


function Pizzas() {
    return (
        <>
            <ul className="pizzas">
                {data.map(data => < Pizza data={data} key={data.name}/>)}
            </ul>
        </>
    )
}
export default Pizzas