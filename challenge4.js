
const registerToVote = (name, unregisteredVoters) => {
    // Code here!
    let mailingList = [];
    let i;
    for (i = 0; i < unregisteredVoters.length; i++) {
        if (name != unregisteredVoters[i]) {
            mailingList.push(unregisteredVoters[i]);
        }
    }
    // Remember to return a value!
    return mailingList;
}
