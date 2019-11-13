
// Tip: Work on one of these functions at a time.


const lightsOn = function (lights) {
    for (let light of lights) {
        light.on = true;
    }
    return lights;
}

const lightsOff = function (lights) {
    for (let light of lights) {
        light.on = false;
    }
    return lights;
}

const toggleLights = function (lights, lightsAreOn) {
    if (lightsAreOn === true) {
        return lightsOff(lights);
    } else {
        return lightsOn(lights);
    }
};
