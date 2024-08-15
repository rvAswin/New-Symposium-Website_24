document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    video.playbackRate = 2.0; // Adjust the playback speed (2.0 is double speed)

    // Countdown Timer
    var countdownDate = new Date("August 30, 2024 23:59:59").getTime();
    
    var countdownFunction = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "days: " + hours + "hours: "
        + minutes + "minutes: " + seconds + "seconds ";

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
});
