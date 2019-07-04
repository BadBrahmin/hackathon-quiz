import React from "react";

function Quiz() {
  return (
    <div className="wrapper">
      <div className="quiz-sec">
        <h2 className="title is-3 is-spaced">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos
          voluptas modi labore?
        </h2>
        <div className="quiz-showcase">
          <div className="quiz-option subtitle is-5">Ans Here</div>
          <div className="quiz-option subtitle is-5">Ans Here</div>
          <div className="quiz-option subtitle is-5">Ans Here</div>
          <div className="quiz-option subtitle is-5">Ans Here</div>
        </div>
        <button className="button is-primary is-outlined">Submit</button>
      </div>
    </div>
  );
}

export default Quiz;
