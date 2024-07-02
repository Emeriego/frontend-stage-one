document.addEventListener('DOMContentLoaded', function () {
    // Display the current time in UTC
    function updateTime() {
        const currentTimeUTC = document.getElementById('currentTimeUTC');
        const now = new Date();
        const hours = now.getUTCHours();
        const minutes = now.getUTCMinutes();
        const seconds = now.getUTCSeconds();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        currentTimeUTC.textContent = formattedTime;
    }

    // Display the current day of the week
    function updateDay() {
        const currentDay = document.getElementById('currentDay');
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        currentDay.textContent = days[now.getUTCDay()];
    }

    // Update time and day on load
    updateTime();
    updateDay();

    // Update time every second
    setInterval(updateTime, 1000);
});
