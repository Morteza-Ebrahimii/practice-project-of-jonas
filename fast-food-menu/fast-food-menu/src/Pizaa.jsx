
function Pizza({data}) {
    return (
        data.map((data)=> {
            return(
                <li 
                className={`pizza ${data.soldOut && 'sold-out'}`}
                key={data.name}>
                    <img src={data.photoName} alt={data.name} />
                    <div>
                        <h3>{data.name}</h3>
                        <p>{data.ingredients}</p>
                        <span>{data.soldOut ? 'SOLD OUT' : data.price}</span>
                    </div>
                </li>
            )
        })
    )
}
export default Pizza