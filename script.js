//your JS code here. If required.
let element = documement.getElementById('level');



	let level = 0;
    while(element.parentElement) {
	        level++;
	        element = element.parentElement;
           }
    alert(`The level of the element is: ${level}`);


