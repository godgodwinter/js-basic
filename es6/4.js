// map dan filter
const skillHolder = document.getElementById('foo');

const yourSkill = ['UX Design', 'Web development', 'Video Editor'];
skillHolder.innerHTML = yourSkill[1];
let parent = '<ul>';
yourSkill.forEach((skill) => {
    parent += `<li> ${skill} </li>`;
});
parent += '</ul>';
// skillHolder.innerHTML = parent;

//map lebih cepat dibanding foreach katanya
//map
const printSkill = yourSkill.map(skill => {
    return skill;
});

skillHolder.innerHTML = printSkill;


//filter
const myPrimarySkill = yourSkill.filter(skill => {
    return skill != "UX Design";
});

console.log(myPrimarySkill);