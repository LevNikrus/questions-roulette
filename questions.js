const questions = [
    "����� ����� �������� � ���� ����������?",
    "����� �� � ��������� ��� ����������(�) ���� ���������(��)?",
    "��� �� �� �����(�) �������� � ���� �����, ���� ���� ����� �� �������?",
    "����� ���� ������� ������������ ������ ���������� ���������?",
    "��� ��� ���� ������ ��������� ��������?",
    "���� �� �� ���(��) ��������� � ���� ������ ����� � ����� �� �� ������(�)?",
    "��� ���� ������ �����������, ���� ����� ��� ������?",
    "����� ��������� �����, � ��� � ��� �����.",
    "����� ����� �������� � ���� ����� ������� ������? ������?",
    "����� ����� ������� ������ �� ������ ������� �� �������?",
    "��� ���� ����������� ����� �����?",
    "����� ����� �� ����� �� �������� ����� ������?",
    "����� ����� ��� ����� ��������� �� ���� ���������� �����������?",
    "���� �� � ���� ��� ���� ����, ����� ������� ��� ��������, ��� �� �� �����(�)?",
    "��� �� ������ ����� ������ � ����� ����������?"
];

let counter = 0;
const questionElement = document.getElementById('question');
const counterElement = document.getElementById('counter');

document.getElementById('spin').addEventListener('click', () => {
    // �������� ������������
    questionElement.style.opacity = 0;

    setTimeout(() => {
        // ����� ���������� �������
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

        // ���������� �������
        questionElement.innerHTML = `<p class="new-question">${randomQuestion}</p>`;
        questionElement.style.opacity = 1;

        // ���������� ��������
        counter++;
        counterElement.textContent = counter;

        // �������� ��������������� ������� (�����������)
        // questions.splice(randomIndex, 1);

    }, 300);
});