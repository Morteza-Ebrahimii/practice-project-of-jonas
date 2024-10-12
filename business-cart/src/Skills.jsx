

function Skills({ skills, imogy, bg }) {
    return (
        <>
            <div className="skill-list"
                style={{ backgroundColor: bg }}>
                <h5 className='skill'>
                    {skills}
                    <span>{imogy}</span>
                </h5>
            </div>
        </>
    )
}
export default Skills