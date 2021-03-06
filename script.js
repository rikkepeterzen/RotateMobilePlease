window.addEventListener("orientationchange", function() {
    console.log("the orientation of the device is now " + screen.orientation.angle);
});

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // false for not mobile device
    document.getElementById('img1').style.display = 'none';
    document.write("not mobile device");
} else {
    // true for mobile device
    document.write("mobile device");

    if (window.innerHeight > window.innerWidth) {
        var timeout = setTimeout(function() {
            document.getElementById('img1').style.display = 'none';
        }, 3800)
    } else {
        document.getElementById('img1').style.display = 'none';
    }
}