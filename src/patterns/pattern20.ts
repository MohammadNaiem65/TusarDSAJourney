export default function twenty(number: number) {
    const totalSize = number * 2;
    let decrease = 0;

    for (let i = 1; i < totalSize; i++) {
        let row = '';

        if (i > number) {
            decrease += 2;
        }

        const totalRowStars = (i - decrease) * 2;
        const rowStars = totalRowStars / 2; // for each side
        const whitespaces = totalSize - totalRowStars;

        for (let j = 0; j < totalSize; j++) {
            if (j < rowStars || j > rowStars + whitespaces - 1) {
                row += '*';
            } else {
                row += '_';
            }
        }

        console.log(row);
    }
}
