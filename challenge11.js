
const busTimes = buses => {


    let busArrivalTime = {};
    for (const bus in buses) {
        busArrivalTime[bus] = buses[bus].distance / buses[bus].speed;
    }
    return busArrivalTime;
};
