let stars = 0;

// Kéo thả số cho bài học
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.innerHTML = `5 + ${data} = 8`;
    const checkBtn = document.getElementById('checkBtn');
    checkBtn.onclick = () => {
        if (data === "3") {
            document.getElementById('result').innerText = "Đúng! Bạn nhận 1 sao!";
            stars++;
            updateStars();
            showReward();
        } else {
            document.getElementById('result').innerText = "Sai! Hãy thử lại.";
        }
    };
}

// Kéo thả số cho trò chơi
function dropGame(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const target = parseInt(event.target.getAttribute('data-target'));
    const current = document.getElementById('gameResult').textContent === "?" ? 0 : parseInt(document.getElementById('gameResult').textContent);
    const newValue = current + parseInt(data);
    document.getElementById('gameResult').textContent = newValue;
    if (newValue === target) {
        document.getElementById('gameFeedback').innerText = "Tuyệt vời! Bạn đã ghép thành 10!";
        stars++;
        updateStars();
        showReward();
    } else if (newValue > target) {
        document.getElementById('gameFeedback').innerText = "Quá số! Hãy thử lại.";
        document.getElementById('gameResult').textContent = "?";
    }
}

// Cập nhật sao và hiển thị phần thưởng
function updateStars() {
    document.getElementById('stars').textContent = stars;
}

function showReward() {
    if (stars >= 1 && !document.getElementById('reward2')) {
        const reward = document.createElement('span');
        reward.className = 'reward bg-purple-300 text-black px-3 py-1 rounded-full ml-2';
        reward.id = 'reward2';
        reward.textContent = 'Huy hiệu 2';
        document.getElementById('rewards').appendChild(reward);
    }
}
