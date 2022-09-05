type quote = {
  quote: string;
  author: string;
};

const Quotes: quote[] = [
  {
    author: 'Albert Einstein',
    quote: 'In the middle of difficulty lies opportunity.',
  },
  {
    author: 'Albert Einstein',
    quote: 'The person who never made a mistake never tried anything new.',
  },
  {
    author: 'Albert Einstein',
    quote:
      'The important thing is not to stop questioning. Curiosity has its own reason for existing.',
  },
  {
    author: 'Albert Einstein',
    quote: 'Creativity is intelligence having fun.',
  },
  {
    author: 'Albert Einstein',
    quote: 'Science can flourish only in an atmosphere of free speech.',
  },
  {
    author: 'Albert Einstein',
    quote:
      "Imagination is everything. It is the preview of life's coming attractions.",
  },
  {
    author: 'Albert Einstein',
    quote: 'Imagination is more important than knowledge.',
  },
  {
    author: 'Albert Einstein',
    quote:
      'There are only two ways to live your life. One is as if nothing is a miracle. The other is as if everything is a miracle.',
  },
  {
    author: 'Marie Curie',
    quote:
      'Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.',
  },
  {
    author: 'Marie Curie',
    quote: "Have no fear of perfection; you'll never reach it.",
  },
  {
    author: 'Marie Curie',
    quote: 'Be less curious about people and more curious about ideas.',
  },
  {
    author: 'Marie Curie',
    quote:
      'I am one of those who think like Nobel, that humanity will draw more good than evil from new discoveries.',
  },
  {
    author: 'Malala Yousafzai',
    quote:
      "Let us make our future now, and let us make our dreams tomorrow's reality.",
  },
  {
    author: 'Dr. Seuss',
    quote:
      'Sometimes you will never know the value of something, until it becomes a memory.',
  },
  {
    author: 'Dr. Seuss',
    quote: "Don't cry because it's over. Smile because it happened.",
  },
  {
    author: 'Dr. Seuss',
    quote:
      'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
  },
  {
    author: 'Dr. Seuss',
    quote: 'Why fit in when you were born to stand out?',
  },
  {
    author: 'John Lennon',
    quote: 'Life is what happens when you’re busy making other plans.',
  },
];

export function getQuote(): quote {
  const randomIndex = Math.floor(Math.random() * Quotes.length);
  return Quotes[randomIndex] || (Quotes[0] as quote);
}
