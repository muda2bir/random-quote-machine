import "./App.css";
import Quote from "./components/Quote";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState(
    "When performance exceeds ambition, the overlap is called success."
  );
  const [author, setAuthor] = useState("Cullen Hightower");

  const apiURL = process.env.REACT_APP_API_LINK;

  function newQuote() {
    let randomNumber = Math.floor(Math.random() * items.length);
    setText(items[randomNumber].text);
    setAuthor(items[randomNumber].author);
  }

  async function fetchQuotes(url) {
    const response = await fetch(url);
    const result = await response.json();
    setItems(result);
  }

  useEffect(() => {
    fetchQuotes(apiURL);
  }, [apiURL]);

  return (
    <div className="App">
      <Quote text={text} author={author} newQuote={newQuote} />
    </div>
  );
}

export default App;
