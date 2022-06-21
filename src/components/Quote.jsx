import React from "react";

const Quote = ({ text, author, newQuote }) => {
  const tweetQuote = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
  return (
    <div className="quote_container" id="quote-box">
      <div className="text_author_container">
        <p className="quote_text" id="text">
          {text}
        </p>
        <span className="author_name" id="author">
          {author === null ? "Unknown" : author}
        </span>
      </div>
      <div className="buttons_container">
        <a
          href={tweetQuote}
          target="_blank"
          className="btn twitter_btn"
          rel="noreferrer"
          id="tweet-quote"
        >
          Tweet
        </a>
        <button onClick={newQuote} className="btn new_quote_btn" id="new-quote">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
