function Result({winner}) {
    return (
      <div className="result">
        {winner === 'CIRCLE' && "Circle is winner"}
        {winner === 'CROSS' && "Cross is winner"}
        {winner === 'no winner' && "We don't have any winner. Try again!"}
      </div>
    );
  }
  
  export default Result;