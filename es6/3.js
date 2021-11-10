// array foreach
const skillHolder = document.getElementById('foo');

const yourSkill = ['UX Design', 'Web development', 'Video Editor'];
skillHolder.innerHTML = yourSkill[1];
let parent = '<ul>';
yourSkill.forEach((skill) => {
    parent += `<li> ${skill} </li>`;
});
parent += '</ul>';

skillHolder.innerHTML = parent;