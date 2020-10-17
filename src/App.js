import React, {useState} from 'react';

const [headers] = useState(["About me", "Portfolio", "Contact", "Resume"]);
const [projects] = useState([
  {
    title: "Fibonacci",
    features: "Number Theory",
    image: "./assets/work-images/fib-paper.png",
    deployedLink: "https://arxiv.org/abs/1702.01855",
    githubLink: "https://arxiv.org/abs/1702.01855"
  },
  {
    title: "Hike Finder",
    features: "Full Front End App",
    image: "./assets/work-images/hike-finder.png",
    deployedLink: "https://jennifermulder.github.io/explore/",
    githubLink: "https://github.com/jennifermulder/explore"
  },
  {
    title: "Linked List Data",
    features: "Data Structures",
    image: "./assets/work-images/linked-list.png",
    deployedLink: "https://github.com/nmcanall/1.3-LinkedList-Assignment",
    githubLink: "https://github.com/nmcanall/1.3-LinkedList-Assignment"
  },
  {
    title: "Movie Finder",
    features: "Full Stack App",
    image: "./assets/work-images/movie-finder.png",
    deployedLink: "https://movie-finder-256.herokuapp.com/",
    githubLink: "https://github.com/nmcanall/Movie-Finder"
  },
  {
    title: "Run Buddy",
    features: "CSS Tricks",
    image: "./assets/work-images/run-buddy.png",
    deployedLink: "https://nmcanall.github.io/Run-Buddy/",
    githubLink: "https://github.com/nmcanall/Run-Buddy"
  },
  {
    title: "Tip Calculator",
    features: "Android",
    image: "./assets/work-images/tip-calculator.png",
    deployedLink: "https://github.com/nmcanall/Tip-Calculator",
    githubLink: "https://github.com/nmcanall/Tip-Calculator"
  }
])

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
