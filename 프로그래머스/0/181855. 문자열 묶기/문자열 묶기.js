function solution(strArr) {
    const groupSizes = {};

    for (const str of strArr) {
        const len = str.length;
        groupSizes[len] = (groupSizes[len] || 0) + 1;
    }

    return Math.max(...Object.values(groupSizes));
}