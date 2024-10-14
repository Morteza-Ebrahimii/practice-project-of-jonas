

function Footer(){

    const hour = new Date().getHours()
    const closeTime = 24
    const openTime = 12

    return(
        <p className="footer">
             
            {hour < closeTime && hour >= openTime ? `we\`re open :)` 
            : `We're happy to welcome you between ${openTime}:00 and ${closeTime}:00` }
        </p>
    )
}
export default Footer