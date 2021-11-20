let n= 10;
let result = '';
for (let i = 0; i < n; i++) {
  for ( k = 0; k < n - i; k++) {
    result += '*';
  }
  console.log (result);
  result = "";
}