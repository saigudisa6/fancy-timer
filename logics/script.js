var design_challenge_start = new Date();
        var design_challenge_end = new Date(design_challenge_start.getTime() + 15 * 60000);
        var content = document.getElementById("time-until-date");
        var intervalId;

        function timeDifferenceCalc(targetDate) {
            var today = new Date();
            var time_str = "";

            var diff = (targetDate - today) / 1000;

            var diff_seconds = diff;
            var diff_minutes = Math.floor(diff_seconds / 60);

            diff_minutes = diff_minutes % 60;
            diff_seconds = Math.floor(diff_seconds % 60);

            if (diff_minutes > 9) {
                time_str += diff_minutes + " : "
            } else if (diff_minutes >= 0) {
                time_str += "0" + diff_minutes + " : "
            }

            if (diff_seconds > 9) {
                time_str += diff_seconds
            } else if (diff_seconds >= 0) {
                time_str += "0" + diff_seconds
            }

            content.innerHTML = time_str + "";
        }

        function startTimer() {
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                var today = new Date();
                if (today - design_challenge_end >= 0) {
                    content.innerHTML = "00 : 00";
                    clearInterval(intervalId);
                } else {
                    timeDifferenceCalc(design_challenge_end);
                }
            }, 1000);
        }

        function stopTimer() {
            clearInterval(intervalId);
        }

        document.getElementById("start-timer").addEventListener("click", startTimer);
        document.getElementById("stop-timer").addEventListener("click", stopTimer);
   