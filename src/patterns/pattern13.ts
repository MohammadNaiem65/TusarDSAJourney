export default function thirteen(count: number) {
    let printCount = 1;

    for (let i = 0; i < count; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row += printCount;
            printCount += 1;
        }
        console.log(row);
    }
}
