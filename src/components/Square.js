import '../style/square.css'

function Square({position}) {
    return (
      <div className="square">
        {position}
      </div>
    );
  }
  
  export default Square;