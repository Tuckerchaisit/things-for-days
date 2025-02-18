import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-manliest-things">Haziq's Things</Link><br/>
      <Link to="/the-functional-things">Shahzad's Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-silly-things">Jayden's Things</Link><br/>
    </>
  )
}
 
export default Landing