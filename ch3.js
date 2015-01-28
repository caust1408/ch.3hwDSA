// Craig Austgen
// Homework for chapter 3
// 1-26-2015
// Adds an element to a list if that element is smaller than the rest
// of the elements in the list


function List() {
	this.dataStore = [50];
	this.insert = insert;
	this.pos = 0;
}

function insert(element) {
	var nums = this.dataStore;
	this.dataStore.splice(0,0,element);
        console.log('   this is before ' + nums);                    
	for (var i = 0;i < nums.length;i++) {
		console.log('       this is inside for loop ' + nums );
		if ( element > nums[i]) {
			this.dataStore.splice(0,1);
			console.log('After ' + nums);
		}
		
	}
		
		
	
	//console.log(element);
	//console.log(dataStore);
	return this.dataStore;
}


var names = new List();
names.insert(40);
names.insert(35);
names.insert(60);
console.log(names.insert(1));
