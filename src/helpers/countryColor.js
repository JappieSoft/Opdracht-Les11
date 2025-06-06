function colorChecker(region) {
    let colorCheck = "";
    switch (region) {
        case "Africa":
            colorCheck = "africa";
            break;
        case "Americas":
            colorCheck = "americas";
            break;
        case "Asia":
            colorCheck = "asia";
            break;
        case "Europe":
            colorCheck = "europe";
            break;
        case "Oceania":
            colorCheck = "oceania";
            break;
        default:
            colorCheck = "other";
    }


    return colorCheck;

}

export default colorChecker;