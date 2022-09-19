'use strict';

const itemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsRef.length}`);

//example-1
for (let i = 0; i < itemsRef.length; i += 1) {
    console.log(
        `Category: ${itemsRef[i].children[0].textContent}\nElements: ${itemsRef[i].children[1].children.length}`
    );
}

//example-2
itemsRef.forEach(item => {
    console.log(
        `Category: ${item.children[0].textContent}\nElements: ${item.children[1].children.length}`
    );
});
