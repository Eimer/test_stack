import React from "react";

const ArticlePage = () => {
    return (
      <article id="mainArticle">
        <div className="filterQuestions">
          <p id="title">All Questions</p>
          <button id="btnAskQues">Ask Questions</button>
          <p className="allShowQuestions">
            <span id="countQue">2000</span> questions
          </p>
          <div className="btn-tags">
            <button>Activity</button>
            <button>Votes</button>
            <button>Creation</button>
          </div>
        </div>
        <div className="allQuestions">
          
        </div>
      </article>
    );
}

export default ArticlePage;