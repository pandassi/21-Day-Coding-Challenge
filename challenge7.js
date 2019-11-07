const interviews = [
    'smart city',
    'arts funding',
    'transportation'
]

const termTopics = (interviews) => {
    // Code here!
    let count = [0, 0, 0];

    for (interview of interviews) {

        if (interview === 'smart city') {
            count[0]++;
        }
        if (interview === 'arts funding') {
            count[1]++;
        }
        if (interview === 'transportation') {
            count[2]++;
        }
    }

    // Remember to return an array!
    return count
}
