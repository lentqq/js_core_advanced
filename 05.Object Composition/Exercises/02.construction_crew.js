function constructionCrew(object) {
    if (object.dizziness) {
        let requiredAmountWater = object.weight * object.experience     * 0.1;
        object.levelOfHydrated += requiredAmountWater;
        object.dizziness = false;
    }
    return object;
};

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
