let inputOne="";
let inputTwo="";
let operation=null;
let result=null;
let display = document.getElementById("display");

const getNumber= number =>{
	console.log(number);
	let value 
	if(!operation  && !result){
		value = inputOne += number
	} else if(inputOne && operation && !result){
		value = inputTwo += number;
	}
	display.value = value
	
	
};

const getOperation=op=> {
	console.log(operation);
	operation = op;
};

const getResult=()=> {
	//perfom task
	console.log("get result!!!!");
	switch(operation) {
		case "addButton":
			return(display.value = result = parseInt(inputOne)+ parseInt(inputTwo));
		case "subtractButton":
			return(display.value = result = parseInt(inputOne)- parseInt(inputTwo));
		case "multiplyButton":
			return(display.value = result = parseInt(inputOne)* parseInt(inputTwo));
		case "divideButton":
			return(display.value = result = parseInt(inputOne)/ parseInt(inputTwo));
		default:
			return null;
	}

};

//const resetAll=()=>{
	//set everything to their initial values
	//console.log("resetAll");

document.getElementById('resetAll')
	.addEventListener('click', function(){
		
		let currentValue= display.value;
		display.value = currentValue.substring(0, currentValue.length -1);
	});


