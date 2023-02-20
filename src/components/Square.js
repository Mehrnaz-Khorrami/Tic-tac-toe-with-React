import '../style/square.css'
import Circle from './Circle';
import Cross from './Cross'

function Square({position, value, takeTurn}) {

    function handleClick(){
        if(value === 'EMPTY') takeTurn(position)
    }

    return (
      <div className="square" onClick={handleClick}>
        {value === 'CIRCLE' && <Circle/>}
        {value === 'CROSS' && <Cross/>}
      </div>
    );
  }
  
  export default Square;