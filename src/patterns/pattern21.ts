export default function twentyOne(number: number) {
    for (let i = 0; i < number; i++) {
        let row = '';

        for (let j = 0; j < number; j++) {
            if (i === 0 || j === 0 || i === number - 1 || j === number - 1) {
                row += '*';
            } else {
                row += '-';
            }
        }

        console.log(row);
    }
}
