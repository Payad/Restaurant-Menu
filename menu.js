const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        img: "images/buttermilkpancakes.jpg",
        // desc: `I'm baby woke mlkshk wolf bitters live-edge
        // blue bottle, hammock freegan copper mug whatever
        // cold-pressed`,
        desc: `Fluffy, homemade Buttermilk Pancakes are the perfect breakfast. 
        These pancakes are super soft and airy inside and with a beautifully buttery crisp edge.`
    },
    {
        id: 2,
        title: "Diner Double",
        category: "lunch",
        price: 13.99,
        img: "images/2-meat-plate-with-sausage.jpg",
        // desc: `vaporware iphone mumblecore selvage raw denim
        // computer bootlegging awesome time slow-carb gochujang 
        // helvetica man braid jianbing Marfa`,
        desc: `Diner Double is a perfect blend of the meats prepared in our kitchen, 
        served with 2 meats of your choice, with a side of soup, bread and a salad. `
    },
    {
        id: 3,
        title: "Godzilla-shake",
        category: "Beverage",
        price: 12.99,
        img: "images/godzilla-shake.jpg",
        // desc: `dragonball semi-auto deluse counterstrike film-easy double strike
        // condensation supercrop smoke-initiate morsure dublin walking-tall triple shot
        // all cool stuff`,
        desc: `Dive in to your flavor dream, with this oversized shake comes in 3 flavors: Chocolate, Vanilla, and Strawberry.`
    },
    {
        id: 4,
        title: "Road House Burger",
        category: "lunch",
        price: 17.99,
        img: "images/roadhouse-burger.jpg",
        // desc: `vaporware iphone mumblecore selvage raw denim
        // computer supercrop smoke-initiate slow-carb gochujang 
        // helvetica man braid jianbing Marfa`,
        desc: `Road House Burger is our signature homestyle burger, 
        topped with lettuce, tomato, red onions, mayo, mustard, 100% Angus beef, all on a roicheta bun, comes with fries.`
    },
    {
        id: 5,
        title: "Chiken Faijita Bowl",
        category: "dinner",
        price: 14.99,
        img: "images/chicken-fajita-bowl.jpg",
        // desc: `vaporware  braid jianbing Marfa selvage raw denim
        // computer bootlegging awesome time  helvetica gochujang 
        // helvetica man braid jianbing Marfa`,
        desc: `These chicken Fajita Bowls are a healthy all-in-one-meal with chicken, veggies, and rice that's restaurant quality and bursting with bold flavor!`
    },
    {
        id: 6,
        title: "Rootbeer Float",
        category: "Beverage",
        price: 11.99,
        img: "images/rootbeer-float.jpg",
        desc: `vaporware iphone mumblecore selvage raw denim
        computer bootlegging awesome time slow-carb gochujang 
        helvetica man braid jianbing Marfa`,
    },
    {
        id: 7,
        title: "Ceasar Salad",
        category: "lunch",
        price: 8.99,
        img: "images/ceasar-salad.jpg",
        desc: `vaporware iphone mumblecore helvetica man braid jianbing
        computer bootlegging awesome time slow-carb gochujang 
        helvetica man braid jianbing Marfa`,
    },
    {
        id: 8,
        title: "Steak Dinner",
        category: "dinner",
        price: 20.99,
        img: "images/steak-dinner.jpg",
        desc: `america hell yea coming to save the day Yea, 
        america hell yea coming to save the day Yea, tv sunscreen bandaids 
        audio visual practical effects screen shots`,
    },
    {
        id: 9,
        title: "Grilled Chicken Breast Dinner",
        category: "dinner",
        price: 16.99,
        img: "images/grilled-chicken-dinner.jpg",
        desc: `1914 somewhere in the deep blue sea awesome time slow-carb 
        gochujang helvetica man braid jianbing Marfa musical chairs kindergarten 
        education lifestyle`,
    },
    {
        id: 10,
        title: "Lean Turkey Breast Dinner",
        category: "dinner",
        price: 12.99,
        img: "images/turkey-breast-dinner.jpg",
        desc: `vaporware iphone mumblecore selvage raw denim
        computer bootlegging awesome time slow-carb gochujang 
        helvetica man braid jianbing Marfa`,
    },
    {
        id: 11,
        title: "Breakfast Burger",
        category: "breakfast",
        price: 16.99,
        img: "images/breakfast-burger.jpg",
        // desc: `I'm baby woke mlkshk wolf bitters live-edge
        // blue bottle, hammock freegan copper mug whatever
        // cold-pressed`,
        // desc: `Fluffy, homemade Buttermilk Pancakes are the perfect breakfast. 
        // These pancakes are super soft and airy inside and with a beautifully buttery crisp edge.`
        desc: `100% beef patty topped with a fresh egg, pepperjack cheese, hashbrowns, applesmoked bacon, served with a bioche bun.`
    },
    {
        id: 12,
        title: "Street Tacos",
        category: "lunch",
        price: 15.99,
        img: "images/street-tacos.jpg",
        // desc: `I'm baby woke mlkshk wolf bitters live-edge
        // blue bottle, hammock freegan copper mug whatever
        // cold-pressed`,
        // desc: `Fluffy, homemade Buttermilk Pancakes are the perfect breakfast. 
        // These pancakes are super soft and airy inside and with a beautifully buttery crisp edge.`
        desc: `Our Signature street tacos comes with your choice of steak, chicken, pork, with guacamole, diced onions, cilantro, and a wedge of lemon.`
    },
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function() {
    const allBtn = document.querySelector('.all');
    // console.log(allBtn);
    const catBtn = document.querySelectorAll('.menu-btns');
    catBtn.forEach((btn) => {
        if (btn.classList.contains('all')) {
            // console.log('Hello');
            btn.classList.toggle('show-color');
        } 
        else {
            btn.addEventListener('click', function(e) {
                const cat = e.currentTarget;
                console.log(cat);
                if (!cat.classList.contains('all')) {
                    // cat.classList.remove('show-color');
                    allBtn.classList.remove('show-color');
                }
                // else {
                //     cat.classList.toggle('show-color');
                // }
            })
        }
        // else if (!btn.classList.contains('all')) {
        //     btn.classList.toggle('show-color');
        // }
    })
    // if (!allBtn.classList.contains('show-color')) {
    //     allBtn.classList.toggle('show-color');
    // } else if (catBtn !== 'all') {
    //     allBtn.classList.toggle('show-color')
    // }

    // else if (allBtn.classList.contains('show-color')) {
    //     allBtn.classList.toggle('show-color');
    // }
    // if (allBtn) {
    //     allBtn.classList.toggle('show-color');
    // } else {
    //     allBtn.classList.toggle('show-color');
    // }
// const menuBtns = document.querySelectorAll('.menu-btns');
//     menuBtns.forEach((btn) => {
//         if (btn.classList.contains('all') && !btn.classList.contains('show-color')) {
//             btn.classList.toggle('show-color');
//         } else {
//             btn.classList.toggle('show-color');
//         }
//     });
        // allBtn.style.backgroundColor = 'red';
        // if (allBtn === 'all' && !allBtn.classList.contains('show-color')) {
        //     // allBtn.style.backgroundColor = 'green'
        //     allBtn.classList.toggle('show-color');
        // } else if () {
        //     // allBtn.style.bagroundColor = 'green'
        //     allBtn.classList.toggle('show-color');
        // }

    // if (button === allBtn && !allBtn.classList.contains('show-color')) {
    //     // displayMenuItem(menu);
    //     // color.classList.add('show-color');
    //     allBtn.classList.toggle('show-color');
    //     // allBtn.style.backgroundColor = 'red'
    //     menuBtns.forEach(function(item) {
    //         if (button !== item) {
    //             // item.classList.toggle('show-color');
    //             return item;
    //         } else {
    //             item.classList.toggle('show-color');
    //         }
    //     })
    //     // if (button !== color) {
    //     //     color.classList.toggle('show-color');
    //     // }
    // } 
    // else {
    //     // displayMenuItem(menuCategory);
    //     // color.classList.toggle('show-color');
    //     allBtn.classList.toggle('show-color');
    // }

//     function displayMenuItem() {
//     let displayMenu = menu.map((item) => {
//         console.log(item);

//         // return item;

//         return `<article class="menu-item">
//                 <img src="${item.img}" class="photo" alt="${item.title}">
//                 <div class="item-info">
//                     <header>
//                         <h4>${item.title}</h4>
//                         <h4 class="price">$${item.price}</h4>
//                     </header>
//                     <p class="item-text">${item.desc}</p>
//                     <button class="add-to-cart">Add to cart</button>
//                 </div>
//             </article>`
//     });
// //<button class="add-btn">Add to cart</button>
//     displayMenu = displayMenu.join("");

//     sectionCenter.innerHTML = displayMenu;
//     console.log(displayMenu);
// }

displayMenuItem(menu);
});

const menuBtns = document.querySelectorAll('.menu-btns');

menuBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const button = e.currentTarget.dataset.id;
        const color = e.currentTarget;
        console.log(color);
        console.log(button);

        const menuCategory = menu.filter((menuItem) => {
            if (menuItem.category === button) {
                return menuItem;
            }
        });
        if (button === 'all' && !color.classList.contains('show-color')) {
            displayMenuItem(menu);
            // color.classList.toggle('show-color');
        } else {
        
            // if (button === 'all' && !color.classList.contains('show-color')) {
                // displayMenuItem(menu);
                // color.classList.toggle('show-color');
                // menuBtns.forEach(function(item) {
                //     if (item !== button) {
                //         // item.classList.toggle('show-color');
                //         return item;
                    
                //     } else {
                //         item.classList.toggle('show-color');
                //         // return item
                //     }
                // });
                
                // }
                // if (!button.classList.contains('all') && color.classList.contains('show-color')) {
                //     color.classList.toggle('show-color');
                // }
            // }
            //  else {
            //     displayMenuItem(menuCategory);
            //     color.classList.toggle('show-color');
            // }

        console.log(menuCategory);
        // color.classList.toggle('show-color');
        displayMenuItem(menuCategory);
        // color.classList.add('show-color');
        }
    // }
    });
})


function displayMenuItem(menu) {
    let displayMenu = menu.map((item) => {
        // console.log(item);

        // return item;

        return `<article class="menu-item">
                <img src="${item.img}" class="photo" alt="${item.title}">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                    <button class="add-to-cart">Add to cart</button>
                </div>
            </article>`
    });
//<button class="add-btn">Add to cart</button>
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
    // console.log(displayMenu);
}



// const allMenuBtn = document.querySelector('.all');
// const breakfastMenuBtn = document.querySelector('.breakfast');
// const lunchMenuBtn = document.querySelector('.lunch');
// const dinnerMenuBtn = document.querySelector('.dinner');


// // all menu btn

// allMenuBtn.addEventListener('click', function () {
//     let displayMenu = menu.map((item) => {
//         console.log(item);

//         // return item;

//         return `<article class="menu-item">
//                 <img src="${item.img}" class="photo" alt="${item.title}">
//                 <div class="item-info">
//                     <header>
//                         <h4>${item.title}</h4>
//                         <h4 class="price">$${item.price}</h4>
//                     </header>
//                     <p class="item-text">${item.desc}</p>
//                     <button class="add-to-cart">Add to cart</button>
//                 </div>
//             </article>`
//     });

//     displayMenu = displayMenu.join('');
//     sectionCenter.innerHTML = displayMenu;
// });

// //breakfast menu btn//

// breakfastMenuBtn.addEventListener('click', function() {
//     let displayMenu = menu.map((item) => {
//         if (item.category == 'breakfast') {
//             return `<article class="menu-item">
//             <img src="${item.img}" class="photo" alt="${item.title}">
//             <div class="item-info">
//                 <header>
//                     <h4>${item.title}</h4>
//                     <h4 class="price">$${item.price}</h4>
//                 </header>
//                 <p class="item-text">${item.desc}</p>
//                 <button class="add-to-cart">Add to cart</button>
//             </div>
//         </article>`
//         }
//     });

//     displayMenu = displayMenu.join('');
//     sectionCenter.innerHTML = displayMenu;
// })

// // lunch menu btn
// lunchMenuBtn.addEventListener('click', function() {
//     let displayMenu = menu.map((item) => {
//         if (item.category == 'lunch') {
//             return `<article class="menu-item">
//                 <img src="${item.img}" class="photo" alt="${item.title}">
//                 <div class="item-info">
//                     <header>
//                         <h4>${item.title}</h4>
//                         <h4 class="price">$${item.price}</h4>
//                     </header>
//                     <p class="item-text">${item.desc}</p>
//                     <button class="add-to-cart">Add to cart</button>
//                 </div>
//             </article>`
//         }
//     });
//     displayMenu = displayMenu.join('');
//     sectionCenter.innerHTML = displayMenu;
// });

// // dinner menu btn

// dinnerMenuBtn.addEventListener('click', function() {
//     let displayMenu = menu.map((item) => {
//         if (item.category == 'dinner') {
//             return `<article class="menu-item">
//             <img src="${item.img}" class="photo" alt="${item.title}">
//             <div class="item-info">
//                 <header>
//                     <h4>${item.title}</h4>
//                     <h4 class="price">$${item.price}</h4>
//                 </header>
//                 <p class="item-text">${item.desc}</p>
//                 <button class="add-to-cart">Add to cart</button>
//             </div>
//         </article>`
//         }
//     });
//     displayMenu = displayMenu.join('');
//     sectionCenter.innerHTML = displayMenu;
// });

// if (item.category == 'lunch') {

// }