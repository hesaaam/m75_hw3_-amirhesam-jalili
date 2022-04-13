let listOfEmployees = [];
let h = {
	add: 0,
	remove: 0
}


//Function to add the employee as an object in the array

let addUser = (name, family, hoursPerMonth, salaryPerMonth) => {
	let idx = listOfEmployees.findIndex(user => user.name === name && user.family === family) 
	let user = {};
	if (hoursPerMonth >= 160 && idx === -1) {
			user = 	{
			name,
			family,
			hoursPerMonth,
			salaryPerMonth
		}
		listOfEmployees.push(user)
		h.add++;
	}
	return user;
}

// Function to delete employee by first and last name

let removeUser = (name, family) => {
	let foundUser = {}
	let idx = listOfEmployees.findIndex(user => user.name === name && user.family === family)

	if (idx !== -1) {
		foundUser = listOfEmployees[idx]
		listOfEmployees.splice(idx, 1)
		h.remove++;
	}
	return foundUser
}


// Function to remove employee based on income to range ratio

let removeWithRange = (min, max) => {
	let count = 0;
	let removeList = []

	for (let i = 0; i < listOfEmployees.length; i++) {
		if (listOfEmployees[i].salaryPerMonth <= max && listOfEmployees[i].salaryPerMonth >= min) {
			count++
			removeList.push(listOfEmployees[i])
		}
	}

	for (let user of removeList) {
		removeUser(user.name, user.family)
	}

	alert(`${count} number of employees got removed`)

	return removeList
}

// Function to find the highest income among employees

let findMaxSalary = () => {
	let maxSalary = 0;

	listOfEmployees.forEach(user => {
		if (user.salaryPerMonth >= maxSalary) {
			maxSalary = user.salaryPerMonth
		}
	})

	return maxSalary
}

// Function to find the lowest income among employees

let findMinSalary = () => {
	let minSalary = Infinity;

	listOfEmployees.forEach((user) => {
		if (user.salaryPerMonth <= minSalary) {
			minSalary = user.salaryPerMonth;
		}
	});

	return minSalary;

}

// Function to calculate the average income of employees

let calculateAvg = () => {
	let sum = 0;
	listOfEmployees.forEach((x) => {
		sum += x.salaryPerMonth
	})
	let avg = sum / listOfEmployees.length

	return avg
}

//Function to show employees whose income is below and above average

let salaryInfo = () => {
	let avg = calculateAvg();
	let below = [];
	let above = [];

	listOfEmployees.forEach(user => {
		if (user.salaryPerMonth >= avg) above.push(user)
		else below.push(user)
	})

	return {
		below,
		above
	}

}

let history = () => {
	return h
}

// Display the desired employee information

let showInfo = (name, family) => {
	let user = {};
	let idx = listOfEmployees.findIndex(user => user.name === name && user.family === family)
	if (idx !== -1) {
		user = listOfEmployees[idx];

	}
	return user;
}

// Display information of all employees

let showAllInfo = () => {
	return listOfEmployees;
};


let loop = true;
while (loop) {
	let userCommand = prompt("Please Enter a command");
	let name;
	let family;
	let hoursPerMonth;
	let salaryPerMonth
	console.log(userCommand)
	switch (userCommand) {
		case "add":
			console.log(userCommand);
			name = prompt("Please Enter employee's name")
			family = prompt("Please Enter employee's family")
			hoursPerMonth = +prompt("Please Enter employee's hoursPerMonth")
			salaryPerMonth = +prompt("Please Enter employee's salaryPerMonth")
			addUser(name, family, hoursPerMonth, salaryPerMonth)
			break;
		case "remove":
			name = prompt("Please Enter employee's name")
			family = prompt("Please Enter employee's family")
			console.log(removeUser(name, family));
			break;
		case "removeWithRange":
			let min = +prompt("Please Enter minimum of the range")
			let max = +prompt("Please Enter maximum of the range");
			console.log(removeWithRange(min, max));
			break
		case "findMaxSalary":
			console.log(findMaxSalary());
			break
		case "findMinSalary":
			console.log(findMinSalary());
			break
		case "salaryInfo":
			console.log(salaryInfo());
			break
		case "history":
			console.log(history());
			break
		case "showInfo":
			name = prompt("Please Enter employee's name");
			family = prompt("Please Enter employee's family");
			console.log(showInfo(name, family));
			break
		case "showAllInfo":

			console.log(showAllInfo());
			break;
		case "end":
			loop = false
			break
		default:
			loop = false
			break;
	}
}
