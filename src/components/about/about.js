// STYLING -------------------------------------------
var abHead = {
    padding: '20px',
    margin: '50px 0px',
    textAlign: 'center',
    fontSize: '40px'
}
var abPara = {
    maxWidth: '800px',
    margin: '20px auto',
    textAlign: 'center',
    padding: '5px 20px',
    marginBottom: '50px'
}

// COMPONENT ------------------------------------------
const About = () => {
    return (
        <>
            <h2 style={abHead}>About Food Kart</h2>
            <p style={abPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet maiores soluta
                necessitatibus quasi, sunt sint, hic iusto earum officia facilis eius distinctio culpa tempora fugit. Iusto
                repudiandae illum beatae quae cumque rem earum facilis iste necessitatibus, magnam quasi accusantium sed
                ducimus. Aperiam suscipit ipsa aliquid alias rerum quisquam quos accusamus.</p>
        </>
    );
}
export default About;