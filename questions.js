const questions = [
    "����� ����� �������� � ���� ����������?",
    "����� �� � ��������� ��� ���������� ���� ���������?",
    "��� �� �� ����� �������� � ���� �����, ���� ���� ����� �� �������?",
    "����� ���� ������� ������������ ������ ���������� ���������?",
    "��� ��� ���� ������ ��������� ��������?",
    "���� �� �� ��� ��������� � ���� ������ ����� � ����� �� �� ������?",
    "��� ���� ������ �����������, ���� ����� ��� ������?",
    "����� ��������� �����, � ��� � ��� �����."
];

document.getElementById('spin').addEventListener('click', () => {
    const q = questions[Math.floor(Math.random() * questions.length)];
    const el = document.getElementById('question');
    el.textContent = q;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 500);
});
