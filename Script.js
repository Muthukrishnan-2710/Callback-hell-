document.getElementById('startButton').addEventListener('click', () => {
    // Hide the button
    document.getElementById('startButton').classList.add('hidden');

    // Countdown function using callback hell
    setTimeout(() => {
        document.getElementById('countdown').innerText = 10;
        setTimeout(() => {
            document.getElementById('countdown').innerText = 9;
            setTimeout(() => {
                document.getElementById('countdown').innerText = 8;
                setTimeout(() => {
                    document.getElementById('countdown').innerText = 7;
                    setTimeout(() => {
                        document.getElementById('countdown').innerText = 6;
                        setTimeout(() => {
                            document.getElementById('countdown').innerText = 5;
                            setTimeout(() => {
                                document.getElementById('countdown').innerText = 4;
                                setTimeout(() => {
                                    document.getElementById('countdown').innerText = 3;
                                    setTimeout(() => {
                                        document.getElementById('countdown').innerText = 2;
                                        setTimeout(() => {
                                            document.getElementById('countdown').innerText = 1;
                                            setTimeout(() => {
                                                document.getElementById('countdown').classList.add('hidden');
                                                document.getElementById('independenceDayMessage').classList.remove('hidden');
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});
