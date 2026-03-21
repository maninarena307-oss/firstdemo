const btn = document.getElementById('btn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
  message.textContent = '🎉 웹사이트가 작동하고 있습니다!';
});
