let typeofPackage = "overnight"

switch (typeofPackage) {
    case "standard":
        console.log("Your package will be delivered in next 3-5 days");
        break;
    case "express":
        console.log("Your package will be delivered in next 1-2 days");
        break;
    case "overnight":
        console.log("Your package will be delivered by tomorrow");
        break;

    default:
        console.log("Invalide package type!!!");
        break;
}