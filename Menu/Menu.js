/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.  
*/
function menuMaker(arr) {

    //create elements
    const menu = document.createElement('div');
    const unorderedlist = document.createElement('ul');    

    arr.forEach(element => {
        let listItem = document.createElement('li');
        unorderedlist.appendChild(listItem);
        listItem.textContent = element;
        listItem.classList.add('listItem');
    });
       
    ////add class
    menu.classList.add('menu');
    unorderedlist.classList.add("list");

    //add event listener to button
    const button = document.querySelector(".menu-button");
    button.addEventListener("click", () => {
        menu.classList.toggle("menu--open");
        const menuAnimation = document.querySelectorAll(".listItem",);
        TweenMax.to(menuAnimation, 2.5, { x: 70, ease: Bounce.easeOut });

        if (document.querySelector(".menu--open")) {
            menu.addEventListener('mouseout', (e) => {
                TweenMax.from(menuAnimation, 2.5, { x: 70, ease: Bounce.easeIn });
            });
        }
     });
    //const menuClose = document.querySelector('div .menu')
    

    //menuClose.addEventListener("mouseleave", () => {
    //    const menuAnimation = document.querySelectorAll(".listItem");
    //    TweenMax.from(menuAnimation, 2.5, { x: 70, ease: Bounce.easeIn });
    //});

    //append
    menu.appendChild(unorderedlist);

   return menu;
};

const header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems));


