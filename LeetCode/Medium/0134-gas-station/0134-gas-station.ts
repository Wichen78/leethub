function canCompleteCircuit(gas: number[], cost: number[]): number {
    const gastank = gas.map((val, index) => val - cost[index]);
    if (gastank.reduce((a, b) => a + b, 0) < 0) {
        return -1;
    }
    for (let i = 0, tank = 0, useReserveIndex = -1; i < gastank.length; i++, tank = 0, useReserveIndex = -1) {
        for (let j = 0; j < gastank.length; j++) {
            if (useReserveIndex === -1 && gastank[(i + j) % gastank.length] < 0) {
                useReserveIndex = (i + j) % gastank.length;
            }
            tank += gastank[(i + j) % gastank.length];
            if (tank < 0) {
                if (useReserveIndex !== -1) {
                    i = useReserveIndex;
                }
                break;
            }
        }
        if (tank >= 0) {
            return i;
        }
    }
    return -1;
};