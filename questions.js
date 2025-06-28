const questions = [
    "Какой запах вызывает у тебя ностальгию?",
    "Когда ты в последний раз чувствовал себя настоящим?",
    "Что бы ты хотел услышать в свой адрес, чего тебе никто не говорил?",
    "Какое твое детское воспоминание всегда заставляет улыбаться?",
    "Что для тебя значит искренняя близость?",
    "Если бы ты мог вернуться в один момент жизни — какой бы ты выбрал?",
    "Что тебя всегда вдохновляет, даже когда все сложно?",
    "Опиши идеальный вечер, и кто в нем рядом."
];

document.getElementById('spin').addEventListener('click', () => {
    const q = questions[Math.floor(Math.random() * questions.length)];
    const el = document.getElementById('question');
    el.textContent = q;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 500);
});
