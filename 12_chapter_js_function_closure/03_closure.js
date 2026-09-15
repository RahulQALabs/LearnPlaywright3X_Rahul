function startBrowser() {
    let name = "Rahul";

    function installBrowser() {
        console.log(name);   //When inner fn remembers the outer variables, this is called closure
    }

    return installBrowser;
}

const runTC = startBrowser();
runTC();


//installBrowser();  inner function is not allowed