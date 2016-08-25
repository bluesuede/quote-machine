var arrayWithAllQuoteObjects = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch"
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling"
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard"
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde"
  },
  {
    quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    author: "Oscar Wilde"
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "Narcotics Anonymous"
  }
];

/**
  * Return random integer between 1 and length of quote array
  *
  * @return integer
  *
  **/
function getRandomInt() {
  var min = 1, max = arrayWithAllQuoteObjects.length;

  // Returns a random number between min (inclusive) and max (exclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
  * Return a quote object from array arrayWithAllQuoteObjects
  *
  * @param int integer
  * @return object from var arrayWithAllQuoteObjects
  *
  */
function getQuoteObject(int) {
  var newInt;

  newInt = int - 1; // To make sure integer can work properly with array

  return arrayWithAllQuoteObjects[newInt];
};

function changeQuote() {

  var quote   = document.getElementById("quote"),
      author  = document.getElementById("author"),
      quoteObject;

  quoteObject         = getQuoteObject(getRandomInt());
  quote.textContent   = quoteObject.quote;
  author.textContent  = quoteObject.author;

};

document.addEventListener("DOMContentLoaded", function() {
  var button  = document.getElementById("quote-button");

  changeQuote();

  button.addEventListener("click", function() {
    console.log("klickad");
    changeQuote();
  });

});
