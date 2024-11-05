if (!localStorage.getItem("visitCount")) {

    localStorage.setItem("visitCount", 1);
} else {

    let currentCount = parseInt(localStorage.getItem("visitCount"));
    localStorage.setItem("visitCount", currentCount + 1);
}

document.getElementById("visitCount").textContent = localStorage.getItem("visitCount");
