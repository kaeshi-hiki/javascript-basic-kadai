let num = Math.floor(Math.random() * 100);
switch (0) {
  case num % 15:
    console.log("3と5の倍数です");
    break;
  case num % 3:
    console.log("3の倍数です");
    break;
  case num % 5:
    console.log("5の倍数です");
    break;
  default:
    console.log(num);
    break;
}