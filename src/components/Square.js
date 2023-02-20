import '../style/square.css'
import Circle from './Circle';
import Cross from './Cross'

function Square({position}) {
    return (
      <div className="square">
        <Circle/>
      </div>
    );
  }
  
  export default Square;