const num = Math.ceil(Math.random() * 10);
const gnum = prompt('Вгадай число (від 1 до 10)');
if (gnum == num)
   console.log('Правильно');
else
   console.log('Не вгадав, номер був: ' + num);