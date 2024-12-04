import { useState } from "react";

function App() {
  const [articlesList, setArticleList] = useState([]);
  const [newArticleTitle, setNewArticleTitle] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (!newArticleTitle) return;

    const newArticle = {
      title: newArticleTitle,
    };

    const updatedArticlesList = [...articlesList, newArticle];

    setArticleList(updatedArticlesList);
    setNewArticleTitle("");
  };

  const handleNewTitle = (e) => {
    setNewArticleTitle(e.target.value);
  };

  const deletePost = (index) => {
    alert(index);
  };

  return (
    <>
      <header>
        <div className="container mt-4 mb-3">
          <h1>Crea un nuovo post</h1>
        </div>
      </header>
      <main>
        <section>
          <div className="container mb-3">
            <div className="row">
              <div className="col-4">
                <form onSubmit={handlePostSubmit}>
                  <div className="mb-3">
                    <label htmlFor="post-title" className="form-label">
                      Inserisci il titolo del post
                    </label>
                    <input
                      onChange={handleNewTitle}
                      value={newArticleTitle}
                      type="text"
                      id="post-title"
                      className="form-control"
                    />
                  </div>
                  <button className="btn btn-info">Crea</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mb-3">
            <h3 className="mb-3">I tuoi post:</h3>
            <div className="row-cols-4">
              {articlesList.length ? (
                articlesList.map((article, index) => {
                  return (
                    <div className="card">
                      <div key={index} className="card-body">
                        <button
                          onClick={() => deletePost(index)}
                          className="btn btn-close"
                        ></button>
                        <h4 className="card-title">{article.title}</h4>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>
                  <h3>Nessun post creato</h3>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
