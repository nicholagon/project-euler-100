function fiboEvenSum(n) {
  let sum = 0;
  let a = 1;
  let b = 1;
  let temp;

  for(let i = 1; i <= n; i++)
  {
    temp = a;
    a = b;
    b = b + temp;
    if (a % 2 === 0 && a <= n)
    {  
      sum += a;
    }
  }
  
  console.log(sum);
  return sum;
}

fiboEvenSum(10);
