let integer = +prompt("Введіть ціле число:");

switch (integer) {
    case 1:
        console.log(`${integer} - не є ні простим, ні складовим числом, тому що у нього тільки один дільник.`);
        break;
    default:
        for (i = 2; i <= integer; i++) {
            if (integer % i === 0 && i < integer) {
                console.log(`${integer} - число не просте`);
                break;
            } else if (i === integer) {
                console.log(`${integer} - число просте`);
            }
        }
}