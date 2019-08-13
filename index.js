var quotes=[
  "there are no limits to what you can accomplish.",
  "positivity always wins.",
  "only you can change how you feel, so choose happiness.",
  "look for something positive in each day, even if some days you have to look a little harder.",
  "you are the only one who can limit your greatness.",
  "in the middle of every difficulty lies opportunity.",
  "if you don't like the road you're walking, start paving another one.",
  "make yourself proud.",
  "stop over-thinking things and just do.",
  "smiling is the best way to face any problem, to crush any fear, and to hide every pain.",
  "everyday may not be a good day, but there is good in every day.",
  "stars can't shine without darkness.",
  "you can't start the next chapter of your life if you keep re-reading the last one.",
  "let your smile change the world, but don't let the world change your smile.",
  "one small positive thought in the morning can change your whole day.",
  "don't give up, you can do it!",
  "don't let yesterday take up too much of today."
]
function newQuote() {
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}
