﻿// Вопросы в явном UTF-8 формате
const questions = [
    "Какой запах вызывает у тебя ностальгию?",
    "Когда ты в последний раз чувствовал(а) себя настоящим(ей)?",
    "Что бы ты хотел(а) услышать в свой адрес, чего тебе никто не говорил?",
    "Какое твое детское воспоминание всегда заставляет улыбаться?",
    "Что для тебя значит искренняя близость?",
    "Если бы ты мог(ла) вернуться в один момент жизни — какой бы ты выбрал(а)?",
    "Что тебя всегда вдохновляет, даже когда все сложно?",
    "Опиши идеальный вечер, и кто в нем рядом.",
    "Какая песня вызывает у тебя самые сильные эмоции?",
    "Что ты больше всего ценишь во мне?",
    "Какой самый неожиданный комплимент ты получал(а)?",
    "Какое твое качество тебе самому(ой) нравится больше всего?",
    "Что ты хотел(а) бы изменить в своем подходе к отношениям?",
    "Какой момент в наших отношениях ты вспоминаешь с особой теплотой?",
    "Что делает тебя по-настоящему счастливым(ой)?"
];

let counter = 0;
const questionElement = document.getElementById('question');
const counterElement = document.getElementById('counter');

document.getElementById('spin').addEventListener('click', () => {
    questionElement.style.opacity = '0';

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

        questionElement.innerHTML = `<p class="new-question">${randomQuestion}</p>`;
        questionElement.style.opacity = '1';

        counter++;
        counterElement.textContent = counter;
    }, 300);
});