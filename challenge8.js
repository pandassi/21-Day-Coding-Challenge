const bins = {
    waste: 0,
    recycling: 0,
    compost: 0,
}

const trash = ' '

const smartGarbage = (trash, bins) => {
    // Code here!
    let updatedBins = bins;

    if (trash === "waste") {
        updatedBins.waste++
    } else if (trash === "recycling") {
        updatedBins.recycling++
    } else if (trash === "compost") {
        updatedBins.compost++
    }
    return updatedBins;
}