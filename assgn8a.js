var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var itemList1=document.getElementsByClassName('list-group-item');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
//add edit button
for(var i=0;i<itemList1.length;i++){
 let editbutton=document.createElement('button');
 editbutton.className='btn btn-sm float-right editbutton'
 editbutton.appendChild(document.createTextNode('EDIT'));
 itemList1[i].appendChild(editbutton);
}

// Add item
function addItem(e){
    e.preventDefault();
    console.log(e);
    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('item2').value;
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(' ' +newItem1));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
    var editbutton = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editbutton.className = 'btn btn-sm float-right editbutton';
   
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editbutton.appendChild(document.createTextNode('EDIT'));
    
  
    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editbutton);
   
    // Append li to list
    itemList.appendChild(li);
    itemList1.appendChild(li);
  }
  // Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  // Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var itemName1 = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text)!= -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }   