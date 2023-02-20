import '../style/result.css'

function Result({winner, reset}) {
    return (
      <div className="result">
        {winner === 'CIRCLE' && "Circle is winner!"}
        {winner === 'CROSS' && "Cross is winner!"}
        {winner === 'no winner' && "We don't have any winner.Try again!"}
        <button onClick={reset} className='button'>Try Again!</button>
      </div>
    );
  }
  
  export default Result;