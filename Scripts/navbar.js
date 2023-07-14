(function() {
    function generateNavbar() {
      // Get the current URL
      var currentUrl = window.location.href;
  
      // Get the root directory of the current file
      var rootDirectory = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
  
      // Get all the files in the root directory
      var files = [
        'index.html', 'Family_Tree.html', 'Valerie_Walker_Benson.html', 'John_Edgar.html',
        'John_Edgar_Stait__Pancho_.html', 'Doris_Benson.html', 'Harry_Walker_Benson.html', 'Margaret_Edgar.html',
        'Oscar_Ernest_Stait.html', 'Oscar_Ernest_Stait_-_WW1.html', 'Oscar_Ernest_Stait_-_Mementoes.html',
        'James_William_Benson_&_Louisa_McKeown.html', 'Harriet_Moran.html', 'W_H_McKeown.html', 'W_H_McKeown_Ephemera.html',
        'Sarah_Leckey.html', 'Lucy_Bradley.html', 'Sarah_McManus.html', 'James_Bradley.html',
        'James_Benson_&_Elizabeth_Hayward.html', 'Sarah_Barnes.html', 'Richard_Stait.html',
        'Richard_Stait_-_In_Defense.html', 'Samuel_Benson_&_Charlotte_Walker.html', 'The_Candlestick_Story.html',
        'Bensons.html', 'Jane_Poole.html', 'James_McManus_Snr.html', 'Francis_Lewis.html', 'Rose_Brimble.html',
        'Brimbles_and_Brains.html', 'Wright_Thompson.html', 'James_McManus_II.html', 'Hannah_Cudbold.html',
        'John_Oscar_and_Jane_Stait.html', 'Mary_Ann_Taylor_&_James_Leckey.html', 'Leckeys_of_Donegal.html',
        "Leckies_of_Stirlingshire.html", 'Edgars_of_Berwickshire.html', 'Scottish_Families.html', 'Bibliography.html'
      ];
  
      // Create the navbar container
      var navbarContainer = document.createElement('div');
      navbarContainer.className = 'navbar';
  
      // Create the unordered list for the navbar
      var navbarList = document.createElement('ul');
      navbarList.className = 'navbar-list';
  
      // Create a list item with a link for each file
      for (var i = 0; i < files.length; i++) {
        var fileName = files[i];
  
        // Remove the ".html" extension from the file name
        var displayName = fileName.replace('.html', '');
  
        // Replace underscores with spaces
        displayName = displayName.replace(/_/g, ' ');

        // Check if the file is the "index.html" file
        if (fileName == 'index.html') {
          displayName = 'Welcome'; // Change the display name to "Welcome"
        }
  
        // Create the list item
        var listItem = document.createElement('li');
        listItem.style.whiteSpace = 'nowrap'; // Prevent the file name from spanning over two lines
  
        // Create the link
        var link = document.createElement('a');
        link.href = rootDirectory + '/' + fileName;
        link.textContent = displayName;
  
        // Set the current page as active
        if (currentUrl.endsWith(fileName)) {
          listItem.className = 'current-page';
        } else {
          listItem.className = 'noncurrent-page';
        }
  
        // Append the link to the list item
        listItem.appendChild(link);
  
        // Append the list item to the navbar list
        navbarList.appendChild(listItem);
      }
  
      // Append the navbar list to the navbar container
      navbarContainer.appendChild(navbarList);
  
      // Get the element where you want to place the navbar
      var navbarElement = document.getElementById('navbar');
  
      // Append the navbar container to the navbar element
      navbarElement.appendChild(navbarContainer);
    }
  
    // Call the generateNavbar function when the page is loaded
    document.addEventListener('DOMContentLoaded', generateNavbar);
  })();
  