setTimeout(() => {
  console.log('1 is the loneliest');
}, 0);

// microtask queue takes precedence over the task,message,callback queue
Promise.resolve('hi').then(() => console.log('2'));

console.log('3 is a crowd');

// console
// 3, 2, 1;
