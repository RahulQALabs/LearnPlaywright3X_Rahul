let browserName = "Safari";

switch (browserName) {
    case "Chrome":
    case "Edge":
    case "Opera":
    case "Brave":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Firefox Project!");
        break;
    case "Safari":
        console.log("Safari Project!");
        break;
    default:
        console.log("Unknown Browser");
        break;
}