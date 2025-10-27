export default function nine(count: number) {
    const totalRows = count * 2;
    const width = totalRows - 1;
    let invertRowCount = count;

    for (let i = 1; i < totalRows + 1; i++) {
        let row = '';

        if (i < count + 1) {
            const stars = i * 2 - 1;
            const whiteSpace = (width - stars) / 2;
            for (let j = 0; j < width; j++) {
                if (j < whiteSpace || j > whiteSpace + stars - 1) {
                    row += '_';
                } else if (j < whiteSpace + stars) {
                    row += '*';
                }
            }
        } else {
            const stars = invertRowCount * 2 - 1;
            const whiteSpace = (width - stars) / 2;

            for (let j = 0; j < width; j++) {
                if (j < whiteSpace || j > whiteSpace + stars - 1) {
                    row += '_';
                } else if (j < whiteSpace + stars) {
                    row += '*';
                }
            }

            invertRowCount--;
        }

        console.log(row);
    }
}
