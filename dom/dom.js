//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textcontent = 'Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);
//var header = document.getElementById('main-header');
//header.style.borderBottom='solid 3px #000';

//var titles = document.getElementsByClassName('title');
//titles[1].style.fontWeight='bold';
//titles[1].style.color='green';


/*var items = document.getElementsByClassName('list-group-item');
undefined
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[0].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';
for(var i=0; i<items.length ;i++){
    items[i].style.backgroundColor='#f4f4f4';
}
items[2].style.backgroundColor='green';
for(var i=0; i<items.length ;i++){
    items[i].style.fontWeight='bold';
}
var items=document.getElementsByClassName('list-group-item');
console.log(items);
//VM1256:1 HTMLCollection(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]
var li = document.getElementsByTagName('li');
console.log(li);
//VM1427:1 HTMLCollection(5) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li]
items[4].style.color='red';
//VM1492:1 Uncaught TypeError: Cannot read properties of undefined (reading 'style')at <anonymous>:1:10
li[4].style.color='red';
//'red'
for(var i=0; i<items.length ;i++){
    items[i].style.backgroundColor='#f4f4f4';
}
//'#f4f4f4'
for(var i=0; i<li.length ;i++){
    li[i].style.backgroundColor='#f4f4f4';
}
//#f4f4f4'
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//undefined
secondItem.style.backgroundColor='green';
//'green'
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//undefined
thirdItem.style.visibility='hidden';
//'hidden'
var items = document.querySelectorAll('.list-group-item');
//undefined
items[1].style.backgroundColor='green';
//'green'
var odd = document.querySelectorAll('li:nth=child(odd)');
var odd = document.querySelectorAll('li:nth-child(odd)');
//undefined
for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='yellow';
}
//'yellow'
//ParentNode & parentElement
var itemList=document.querySelector('#items');
//undefined
console.log(itemList.parentNode);
//VM876:1 <div id=​"main" class=​"card card-body">​…​</div>​flex   
//undefined
itemList.parentNode.style.backgroundColor='#f4f4f4';
//'#f4f4f4'
itemList.parentElement.style.backgroundColor='red';
//'red'
//childNode & children
console.log(itemList.childNodes);//nodelist
console.log(itemlist.children);//HTML collection
var itemList=document.querySelector('#items');
console.log(itemList.children[1]);
//VM1879:1 <li class=​"list-group-item">​Item 2​</li>​
itemList.children[1].style.backgroundColor='yellow';
//'yellow'
console.log(itemList.firstChild);
//VM2175:1 #text
console.log(itemList.firstElementChild);
//VM2294:1 <li class=​"list-group-item">​Item 1​</li>​
itemList.firstElementChild.textContent='Hello';
//'Hello'
itemList.lastElementChild.textContent='Regards';
//'Regards'
console.log(itemList.lastChild);
//VM2632:1 #text
//siblings
var itemList=document.querySelector('#items');
console.log(itemList.nextSibling);
//VM2794:1 #text
console.log(itemList.nextElementSibling);
//VM2989:1 null
console.log(itemList.previousSibling);
//VM3112:1 #text
console.log(itemList.previousElementSibling)
//VM3264:1 <h2 class=​"title">​Items​</h2>​
itemList.previousElementSibling.style.fontWeight='bold';
//'bold'
var newDiv = document.createElement('div');
console.log(newDiv);
//VM3618:1 <div>​</div>​
newDiv.className='hello';
//'hello'
console.log(newDiv);
//VM3761:1 <div class=​"hello">​</div>​
newDiv.id='hello1';
//'hello1'
console.log(newDiv);
//VM3893:1 <div class=​"hello" id=​"hello1">​</div>​
newDiv.setAttribute('title','hello title');
console.log(newDiv);
//VM4104:1 <div class=​"hello" id=​"hello1" title=​"hello title">​</div>​
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
//"Hello World"
console.log(newDiv);
//VM4396:1 <div class=​"hello" id=​"hello1" title=​"hello title">​Hello World​</div>​
var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
//<div class=​"hello" id=​"hello1" title=​"hello title">​Hello World​</div>​
newDiv.style.fontSize='30px';
//'30px'
var head = document.querySelectorAll('.title');
var head1 = head[1];
var ul = document.querySelector('ul .list-group');
var newDiv = document.createElement('h3');
h3.id='hh';
newDiv.id='hh';
//'hh'
var newDivText = document.createTextNode('Hello World');
//undefined
newDiv.appendChild(newDivText);
//"Hello World"
head1.insertBefore(newDiv,ul);
//<h3 id=​"hh">​Hello World​</h3>​*/



var form =document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
   
 function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var newItemDescription = document.getElementById('description').value;
    var li = document.createElement('li'); 
    var br=document.createElement('br');
    li.className='list-group-item'; 
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(br);
    li.appendChild(document.createTextNode(newItemDescription));
    
    //li.insertBefore(document.createTextNode(newItemDescription),document.createTextNode(newItem));
    var deleteBtn=document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var itemDescription = item.childNodes[2].textContent;
        if( itemName.toLowerCase().indexOf(text) != -1 || itemDescription.toLowerCase().indexOf(text) != -1 ){
            item.style.display='block';
         }  else{
            item.style.display='none';
         }
    }); 
}