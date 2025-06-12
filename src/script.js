console.log("Hello, World!");
console.log(5+7);
// alert("Hello, World!");
document.getElementById("click-me").addEventListener("click", function() {
    // alert("Button clicked!");
    document.getElementById("manuu").innerText = "Clicked!";
    console.log("Button clicked!");
    document.getElementById("manuu").style.backgroundColor = "green";

});

document.getElementById("manuu").addEventListener("click", function() {
    document.getElementById("manuu").innerText = "Mazuuuze";
    document.getElementById("manuu").style.backgroundColor = "red";
    console.log("Paragraph clicked!");
});
document.addEventListener("scroll", function() {
    console.log("Scrolled!");
});