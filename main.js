window.onload = function () {
    var tooldbar = document.getElementsByClassName("toolbar-editor")[0];
    var btn = document.createElement("BUTTON");
    btn.onclick = function () {
        const body = document.body;
        let bodyText = body.innerHTML;
        bodyText = bodyText.replace(/。/g, "．");
        bodyText = bodyText.replace(/、/g, "，");
        body.innerHTML = bodyText;
    };
    btn.innerHTML = "．";
    tooldbar.append(btn);
};
