export default function twentyTwo(number: number) {
    const size = number * 2 - 1;
    let decrease = 0;
    let staticNum = number + 1;

    for (let i = 1; i <= size; i++) {
        let row = '';

        if (i > number) {
            decrease += 2;
            staticNum++;
        } else {
            staticNum--;
        }

        const normalFlowLastNum = i - decrease;
        const normalFlowTotalNum = normalFlowLastNum * 2; // both side
        const staticNumCountTotal = size - normalFlowTotalNum; // static numbers count

        for (let j = 0; j < size; j++) {
            if (j === 0 || j === size - 1) {
                row += number;
            } else if (j < normalFlowLastNum) {
                row += number - j;
            } else if (j > normalFlowLastNum + staticNumCountTotal - 1) {
                const position = j - (normalFlowLastNum + staticNumCountTotal);

                row += number - (normalFlowLastNum - position - 1);
            } else {
                row += staticNum;
            }
        }

        console.log(row);
    }
}
