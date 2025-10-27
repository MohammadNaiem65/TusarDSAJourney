export default function nineteen(number: number) {
    const totalSize = number * 2;

    for (let i = 0; i < totalSize; i++) {
        let row = '';

        let totalRowStars;

        if (i < 5) {
            totalRowStars = totalSize - 2 * i;
        } else {
            totalRowStars = (totalSize - 2 * (i + 1)) * -1;
        }

        const totalWhitespaces = totalSize - totalRowStars;
        const rowStars = totalRowStars / 2; // row stars for each side

        for (let j = 0; j < totalSize; j++) {
            if (j < rowStars || j > totalWhitespaces + rowStars - 1) {
                row += '*';
            } else {
                row += '_';
            }
        }

        console.log(row);
    }
}
