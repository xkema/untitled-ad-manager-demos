document.addEventListener('DOMContentLoaded', () => {
  console.log(`%cobject debugger ::`, `color:blue;font-weight:bold;`, 'DOMContentLoaded');
});

window.addEventListener('load', () => {
  console.log(`%cobject debugger ::`, `color:red;font-weight:bold;`, 'load');
});

let largeLorem = `
`;

let blockerContainer = document.getElementById('blocker-content');
blockerContainer.innerHTML = `<p style="background:green;" class="animated pulse">blocker content loaded!</p>`;