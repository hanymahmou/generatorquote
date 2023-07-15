var quotes = [
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    writer: `― Oscar Wilde`,
  },
  {
    quote: `“So many books, so little time.”`,
    writer: `― Frank Zappa`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    writer: `― Mae West`,
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    writer: `― Mahatma Gandhi`,
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    writer: `― Mark Twain`,
  },
  {
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    writer: `― Elbert Hubbard`,
  },
  {
    quote: `“Without music, life would be a mistake.”`,
    writer: `― Friedrich Nietzsche`,
  },
  {
    quote: `“Knowing yourself is the beginning of all wisdom.”`,
    writer: `― Aristotle`,
  },
  {
    quote: `“The only true wisdom is in knowing you know nothing.”`,
    writer: `― Socrates`,
  },
  {
    quote: `“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.”`,
    writer: `― Rumi`,
  },
];

var btn = document.getElementById("Qbtn");
var qoute = document.getElementById("qoute");
var writer = document.getElementById("writer");

function findQoute() {
  var random = Math.floor(Math.random() * quotes.length);
  qoute.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
}
