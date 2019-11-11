const spots = [
    // COLUMNS ARE X
    //    0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'R', 'M'], // 1
    ['s', 'M', 's', 'S', 'R', 'm'], // 2
    ['S', 'r', 's', 'm', 'R', 'M'], // 3
    ['S', 'r', 's', 'm', 'R', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S'], // 5
]

const vehicule = "regular";

// regular cars can park in regular spots
// small cars can park in small and regular spots
// motos can park in small, regular and moto spots
// none of them can park in full spots
// R, S, M : available spots
// r, s, m: unavailable 
// given regular car to park with [x, y] coordinates


const whereCanIPark = (spots, vehicle) => {

    for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[y].length; x++) {

            const spot = spots[y][x];

            if (vehicule === "regular") {
                if (spot === "R") {
                    return [y, x];
                }
            }

            else if (vehicule === "small") {
                if (spot === "S" || spot === "R") {
                    return [y, x];
                }
            }

            else if (vehicule === "motorcycles") {
                if (spot === "S" || spot === "R" || spot === "M") {
                    return [y, x];
                }
            }

        }
    }
    return false;
};