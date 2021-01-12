import React from "react";

const Tags = () => {
  return (
    <article id="mainArticle">
      <div className="filterQuestions">
        <p id="title">Tags</p>
        <p className="descriptionsTags">
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </p>
        <input id="searchTags" placeholder="  &#128269;   Filter by tag name" />
      </div>
      <div className="allQuestions"></div>
    </article>
  );
};

export default Tags;
