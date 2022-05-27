const theme = document.getElementById('theme');
const newItemInput = document.getElementById('addItem');
const todoList = document.querySelector('.content ul');
const itemsLeft = document.querySelector('.items-left span');

itemsLeft.innerText = document.querySelectorAll('.list-item input[type="checkbox"]').length;

theme.addEventListener('click', () => {
    document.querySelector('body').classList = [theme.checked ? 'theme-light' : 'theme-dark'];
});

document.querySelector('.add-new-item span').addEventListener('click', () => {
    if (newItemInput.value.length > 0) {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});

newItemInput.addEventListener('keypress', (e) => {
    if (e.charCode === 13 && newItemInput.value.length > 0) {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});

function createNewTodoItem(text) {
    const elem = document.createElement('li');
    elem.classList.add('flex-row');
    
    elem.innerHTML = `
        <label class="list-item">
        <input type="checkbox" name="todoItem">
        <span class="checkmark"></span>
        <span class="text">${text}</span>
    </label>
    <span class="remove"></span>
    `;
    
    if (document.querySelector('.filter input[type="radio"]:checked').id === 'completed') {
        elem.classList.add('hidden');
    }
    todoList.append(elem);
    updateItemsCount(1);
}

function updateItemsCount(number) {
    itemsLeft.innerText = +itemsLeft.innerText + number;
}

// remove todo item

function removeTodoItem(elem) {
    elem.remove();
    updateItemsCount(-1);
}

todoList.addEventListener('click',(event) => {
    if (event.target.classList.contains('remove')) {
        removeTodoItem(event.target.parentElement);
    }
});

// clear comleted items

document.querySelector('.clear').addEventListener('click', () => {
    document.querySelectorAll('.list-item input[type="checkbox"]:checked').forEach(item => {
        removeTodoItem(item.closest('li'));
    });
});


// filter todo list items
document.querySelectorAll('.filter input').forEach(radio => {
    radio.addEventListener('change', (e) => {
        filterTodoItems(e.target.id);
    });
});

function filterTodoItems(id) {
    const allItems = todoList.querySelectorAll('li');

    switch(id) {
        case 'all':
            allItems.forEach(item => {
                item.classList.remove('hidden');
            })
            break;
        case 'active':
            allItems.forEach(item => {
                item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
        default: 
            allItems.forEach(item => {
                !item.querySelector('input').checked ? item.classList.add('hidden') : item.classList.remove('hidden');;
            })
            break;
    }
}




function getMiddle(s)
{
    let letters = s.split("");
    console.log(letters);
  if (s.length % 2 == 0) {
    middle = (Math.ceil(s.length/2))-1;
    middle2 = middle+1;
      end1 = s[middle];
      end2 = s[middle2];
      end = end1.concat(end2);
      console.log(end);
  } else {
    middle = (Math.ceil(s.length/2))-1;
      end = s[middle];
      console.log(end);
  }
}
getMiddle("test");

function towerBuilder(h) {
  console.log( Array(h).fill('*')
    .map((s, i) =>
      ' '.repeat(h - i - 1) +
      s.repeat(i + 1).split('').join(' ') +
      ' '.repeat(h - i - 1))
    .join('\n'));
}

towerBuilder(4);

function likes(names) {
  if (names.length == 0){
      console.log(`no one likes this`);
  } else if (names.length == 1) {
      console.log(`${names[0]}, likes this`);
  } else if (names.length == 2 ){
      console.log(`${names[0]} and ${names[1]} like this`)
  } else if (names.length == 3 ) {
      console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`)
  } else if (names.length >= 4) {
       console.log(`${names[0]}, ${names[1]} and ${names.length -2} others like this`)
  }
}

likes(["Harry", "Pole", "Jade", "Peter"]);
likes(["Piter"]);
likes(["Piter", "Marry"]);
likes(["Max", "Peter", "Jack"]);
likes([]);
likes(["Harry", "Pole", "Jade", "Peter", "ssx", "faaac"]);

function smileSide(){
eyes = [":", ";", "=", ":'"];
nose = ["", "-", " "];
m = [")", "(", "[", "]", "D", "0", "{", "}", "/", "|", "<", ">", "p", "()"];

return(`${eyes[Math.floor(Math.random()*eyes.length)]}${nose[Math.floor(Math.random()*nose.length)]}${m[Math.floor(Math.random()*m.length)]}`);
}
function smileLine(){
    smile=["(´｡• ᵕ •｡) ♡", "♡( ◡‿◡ )", "(* ^ ω ^)", "(≧◡≦) ♡", "(ｏ・_・)ノ", "╮( ˘ ､ ˘ )╭", "(¬_¬ )","(´• ω •)ﾉ", "(づ◡﹏◡)づ", "ʕ ᵔᴥᵔ ʔ", "＼(≧▽≦)／"];
    return(`${smile[Math.floor(Math.random()*smile.length)]}`);
}


function smileRand(){
    if ((Math.random()*100)>80){
        return smileLine();
    } return smileSide();
}
function htmlchanger(){
  return(document.getElementById("smile").innerHTML= smileRand());
}

setInterval( htmlchanger, 1000);

function scramble(str1, str2) {
 if (str1.length > str2.length){
     let strSplitedSmall = str2.split("");
     let strSplitedBig = str1.split("");
     let big;
     for (i = 0; i < strSplitedBig.length-1; i++){
         for (j=i+1; j < strSplitedSmall.length; j++){
            if (strSplitedSmall[i] == strSplitedBig[j]){
                big++;
            }
     }
 }
}
}

scramble('world','world');

var capitals = function (word) {
  let wordsplited = word.split("");
  let uppermass = [];
  let len = wordsplited.length;
  for (let i = 0; len > i; i++){
    if (wordsplited[i] == wordsplited[i].toUpperCase){
    return (uppermass.push(is));
    }
  }
    console.log(uppermass);
  return uppermass;
}

capitals("GRhgedsSMKD");

var summation = function (num) {
    let end = 0;
  for (let i = 1; i < num; i++){
      end = end + i;
  }
    end += num;
    console.log(end);
}

summation(2);


function boolor (bool){
    console.log(bool ? "Yes" : "N0");
}

boolor (true);
boolor(false);

function alphabetPosition(text) {
    
    let result;;
    let lineone = text.split(" ").join("");
    lineone = lineone.toUpperCase();
    let letters = lineone.split("");
    for (let i = 0; i <letters.length; i++){
        (!(letters[i] >= "A" && letters[i] <= "Z")) ? delete letters[i] : true
    }
    letters = letters.join("").split("");
    
}

alphabetPosition("The sunset sets at twelve o' clock.");

function alphabetPosition(text) {
  return text.toLowerCase().split('')
        .filter( c => c >= 'a' & c <= 'z' )
        .map( c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
        .join(' ');
}

function anagrams(word, words) {
    let buone = word.split("");
    let butwo = words.split("");
}

anagrams("bob", "bbo");

function even_or_odd(number) {
  console.log(((number%2) == 0) ? "Even" : "Odd");
}

even_or_odd(2);

numbers = [1,3,7,88,95,102,776];
x = 770;
var output = numbers.reduce(function (prev, curr) {
  return Math.abs(curr - x) < Math.abs(prev - x) ? curr : prev
});

console.log(output);