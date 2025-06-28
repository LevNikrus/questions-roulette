const questions = [
    "Какой запах вызывает у тебя ностальгию?",
    "Когда ты в последний раз чувствовал(а) себя настоящим(ей)?",
    "Что бы ты хотел(а) услышать в свой адрес, чего тебе никто не говорил?",
    "Какое твое детское воспоминание всегда заставляет улыбаться?",
    "Что для тебя значит искренняя близость?",
    "Если бы ты мог(ла) вернуться в один момент жизни — какой бы ты выбрал(а)?",
    "Что тебя всегда вдохновляет, даже когда все сложно?",
    "Опиши идеальный вечер, и кто в нем рядом.",
    "Какая песня вызывает у тебя самые сильные эмоции? Почему?",
    "Какой самый смешной случай из твоего детства ты помнишь?",
    "Что тебя успокаивает лучше всего?",
    "Какое место на земле ты считаешь самым уютным?",
    "Какой фильм или книга произвели на тебя наибольшее впечатление?",
    "Если бы у тебя был один день, чтобы прожить его идеально, что бы ты делал(а)?",
    "Что ты больше всего ценишь в наших отношениях?"
];

let counter = 0;
const questionElement = document.getElementById('question');
const counterElement = document.getElementById('counter');

document.getElementById('spin').addEventListener('click', () => {
    // Анимация исчезновения
    questionElement.style.opacity = 0;

    setTimeout(() => {
        // Выбор случайного вопроса
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

        // Обновление вопроса
        questionElement.innerHTML = `<p class="new-question">${randomQuestion}</p>`;
        questionElement.style.opacity = 1;

        // Увеличение счетчика
        counter++;
        counterElement.textContent = counter;

        // Удаление использованного вопроса (опционально)
        // questions.splice(randomIndex, 1);

    }, 300);
});