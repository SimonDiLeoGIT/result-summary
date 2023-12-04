import reaction from "./assets/images/icon-reaction.svg"
import memory from "./assets/images/icon-memory.svg"
import verbal from "./assets/images/icon-verbal.svg"
import visual from "./assets/images/icon-visual.svg"

function App() {
  return (
    <section className="App">
      <section className="result-container">
        <h1> Your Result </h1>
        <article className="score">
          <h2> 76 </h2>
          <span> of 100 </span>
        </article>
        <article>
          <h2> Great </h2>
          <p> You scored higher than 65% of the people who have taken these tests </p>
        </article>
      </section>
      <section className="summary-container">
        <h1> Summary </h1>
        <section className="statistics-container">
          <article className="statistic">
            <div> <img  src={reaction} alt="reaction" /> <p> Reaction </p> </div>
            <div> <p> 80 <span>/ 100 </span> </p> </div>
          </article>
          <article className="statistic">
            <div> <img  src={memory} alt="memory" /> <p> Memory </p> </div>
            <div> <p> 92 <span>/ 100 </span> </p> </div>
          </article>
          <article className="statistic">
            <div> <img  src={verbal} alt="verbal" /> <p> Verbal </p> </div>
            <div> <p> 61 <span>/ 100 </span> </p> </div>
          </article>
          <article className="statistic">
            <div> <img  src={visual} alt="visual" /> <p> Visual </p> </div>
            <div> <p> 72 <span>/ 100 </span> </p> </div>
          </article>
        </section>
        <button> Continue </button>
      </section>
    </section>
  );
}

export default App;
