import { useState } from "react";

function App() {
  // const articlesList = [];
  const [newArticleTitle, setNewArticleTitle] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
  };

  const handleNewTitle = (e) => {
    setNewArticleTitle(e.target.value);
  };

  return (
    <>
      <header>
        <h1>Crea un nuovo post</h1>
      </header>
      <main>
        <div>
          <form onSubmit={handlePostSubmit}>
            <label htmlFor="post-title">Inserisci il titolo del post</label>
            <input
              onChange={handleNewTitle}
              value={newArticleTitle}
              type="text"
              id="post-title"
            />
            <button>Crea</button>
          </form>
        </div>
        <div>
          <h3>I tuoi post:</h3>
          <h4>Titolo del nuovo post</h4>
        </div>
      </main>
    </>
  );
}

export default App;
