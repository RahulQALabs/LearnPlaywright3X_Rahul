let responseCode = 404;

switch (responseCode) {
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Page Not Found");
        break;
    case 500:
        console.log("Internal Error");
        break;
    default:
        break;
}