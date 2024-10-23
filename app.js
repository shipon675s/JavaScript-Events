//! JavaScript Events:
function subscribe() {
    document.getElementById("btn").innerHTML = "Subscribed";
    document.getElementById("btn").style.backgroundColor = "#262626";
}

function like() {
    document.getElementById("like").innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';
    document.getElementById("like").style.backgroundColor = "#262626";
}

function keyPress() {
    document.getElementById("text").innerHTML = "Key Pressed";
}

function onLoad() {
    alert("Testing javascript Onload");
    document.getElementById("text").innerHTML = "Website Loaded Properly";
}

function windowResize() {
    document.getElementById("textarea").style.height = "100px";
    document.getElementById("form").style.fontFamily = "Courier New";
}

function onScroll() {
    document.getElementById("text").innerHTML = "Scrolling";
}

//! Best Practice
// document.getElementById('btn').onclick = function() {
//     document.getElementById('btn').innerHTML = 'Subscribed 😍';
//     document.getElementById('btn').style.backgroundColor = '#000';
// }


//! Modern Practice:
document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('btn').innerHTML = 'Subscribed 🥰';
    document.getElementById('btn').style.backgroundColor = '#000';
})

document.getElementById('done').addEventListener('click', function(){
    document.getElementById('done').innerHTML = 'done ✅';
    document.getElementById('done').style.backgroundColor = '#000';
})


