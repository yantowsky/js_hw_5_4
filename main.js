let integer = +prompt("Введіть ціле число:");

switch (integer) {
    case 1:
        console.log(`${integer} - не є не простим, не складовим числом, тому що у нього тільки один дільник.`);
        break;
    default:
        for (i = 2; i <= integer; i++) {
            if (integer % i === 0 && i < integer) {
                console.log(`${integer} - складове число`);
                break;
            } else if (i === integer) {
                console.log(`${integer} - просте число`);
            }
        }
}