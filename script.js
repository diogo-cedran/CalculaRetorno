document.getElementById('lunchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const lunchTime = document.getElementById('lunchTime').value;
    const lunchDuration = document.getElementById('lunchDuration').value;

    if (!lunchTime) {
        alert('Por favor, insira a hora que você saiu para o almoço.');
        return;
    }

    const [lunchHour, lunchMinute] = lunchTime.split(':').map(Number);
    const [durationHour, durationMinute] = lunchDuration.split(':').map(Number);

    const lunchDate = new Date();
    lunchDate.setHours(lunchHour);
    lunchDate.setMinutes(lunchMinute);

    const endLunchDate = new Date(lunchDate);
    endLunchDate.setHours(lunchDate.getHours() + durationHour);
    endLunchDate.setMinutes(lunchDate.getMinutes() + durationMinute);

    const returnHour = endLunchDate.getHours().toString().padStart(2, '0');
    const returnMinute = endLunchDate.getMinutes().toString().padStart(2, '0');

    const resultText = `Você deve retornar às ${returnHour}:${returnMinute}`;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = resultText;
    resultDiv.style.display = 'block';
});
