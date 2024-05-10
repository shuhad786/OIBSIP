document.getElementById('addItemBtn').addEventListener('click', function() {
  var input = document.getElementById('itemInput');
  var itemText = input.value;

  if (itemText.trim() !== '') {
    var newItem = document.createElement('li');
    newItem.innerHTML = itemText;

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', function() {
      this.parentNode.remove();
    });

    newItem.appendChild(deleteButton);

    var itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    itemContainer.appendChild(newItem);

    itemContainer.addEventListener('click', function() {
      newItem.classList.toggle('completed');
    });

    itemContainer.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      this.remove();
    });

    document.getElementById('itemList').appendChild(itemContainer);
    input.value = '';
  }
});
