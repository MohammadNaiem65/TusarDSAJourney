export default function seven(count: number) {
    const range = count * 2 - 1;

    for (let i = 1; i < count + 1; i++) {
        let row = '';
        const rowRange = i * 2 - 1;
        const whiteSpace = (range - rowRange) / 2;

        for (let k = 0; k < range; k++) {
            if (k < whiteSpace) {
                row += '_';
            } else if (k < whiteSpace + rowRange) {
                row += '*';
            } else {
                row += '_';
            }
        }
        console.log(row);
    }
}
