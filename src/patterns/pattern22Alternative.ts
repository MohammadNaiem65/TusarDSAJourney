// NOTE: This approach is not scalable

export default function twentyTwoAlt(number: number) {
    const size = number * 2 - 1;

    for (let i = 0; i < size; i++) {
        let row = '';

        for (let j = 0; j < size; j++) {
            if (i === 0 || j === 0 || i === size - 1 || j === size - 1) {
                row += number;
            } else if (i === 1 || j === 1 || i === size - 2 || j === size - 2) {
                row += number - 1;
            } else if (i === 2 || j === 2 || i === size - 3 || j === size - 3) {
                row += number - 2;
            } else {
                row += 1;
            }
        }

        console.log(row);
    }
}
