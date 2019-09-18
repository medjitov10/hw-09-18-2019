const fizzbuzz = (times) => {
  let i = 1;
  let result = '';
  while( i <= times ) {
    result = '';
    i % 3 === 0 ? result += 'fizz' : null;
    i % 5 === 0 ? result += 'buzz' : null;
    console.log(result || i);
    i++;
  }
}

fizzbuzz(100);
