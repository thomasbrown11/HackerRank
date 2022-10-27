//This is a basic hash map using closed addressing to create array buckets for collisions 
//(multiple identical values from running hash() are placed in one index). 
//hash function is the hash algorithm used to first place and then recall where an item is stored in an array
//this is a basic algorithm based on key character char codes (ASCII);
//HashTable() is where things are stored and where related setters/getters are housed in a generic way for more iterations
//notice that running this file shows some buckets filling already.. hard to say without a ton of data but 
//the simplicity of this algorithm may not be distributing hash() values evenly. Would need to manipulate for efficiency

function hash(string, arrayLength) {
  let value = 0;
  //sum all char codes for string 
  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    value = value + char
  }
  //remainder of value divided by arraylength
  //if array is constant than obviously hardcode
  return value % arrayLength
}

//
let HashTable = function (limit) {
  //this will be the actual hash table storing values
  let storage = [];
  //this is the max length of storage which can be changed based on load factor 
  const storageLimit = limit;

  // simple print to see storage after calls have been made
  this.print = function () {
    console.log(storage)
  }

  //add values to storage method
  this.set = function (key, value) {
    //scrub for correct array index in storage 
    let index = hash(key, storageLimit);

    //if no value is at array index equal to return value of hash function for key (the string): 
    if (storage[index] === undefined) {
      //set the string and it's next qualifier (associated data like second array or object element such as last name)
      //as the array index equal to hash. (value could be a whole object.. really whatever)
      storage[index] = [
        [key, value]
      ];
      //this just checks if they key (whatever string) exists and updates the associated value is it does 
      //(all keys must be unique)
    } else {
      //will determine next conditional 
      let inserted = false;
      //loop through all arrays stored in storage array's index = to hash()'s value (can be multiple arrays at each index)
      //this is open addressing 
      for (let i = 0; i < storage[index].length; i++) {
        // if the key matches the array stored at storage index = to hash()'s value (multiple keys match this)
        //then set that key's value (key is always storage[index][x][0], value is always storage[index][x][1])
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          //change to true so next conditional is false 
          inserted = true;
        }
        //if no existant keys matched the key in question push key,value pair to storage[index] array
        if (inserted === false) {
          storage[index].push([key, value]);
        }
      }

    }
  }

  //delete storage items 
  this.delete = function (key) {
    let index = hash(key, storageLimit);
    //if there's only one value at the index and the key at said index matches argument delete item
    if (storage[index].lenth = 1 && storage[index][0][0] === key) {
      delete storage[index];
      //if more than 1 entry scrub through and delete item with matching key to argument 
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  }

  //lookup item
  this.get = function (key) {
    let index = hash(key, storageLimit);
    //if there's no items at this array index return undefined 
    if (storage[index] === undefined) {
      return undefined;
      //else loop array index array and return the value of the array with key matching argument 
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          //just return value 
          //return storage[index][i][1];
          //return whole key,value 
          return storage[index][i]
        }
      }
    }

  }
}

//call hash
//console.log(hash('cat', 10));

//define new hashTable
//argument fed to HashTable is the table limit... would be cool to code in an auto doubler if 
//load factor rises about .75 (load factor = number of items in array/ total array size)
let ht = new HashTable(10);

//call adds on ht to add new items to ht's storage array
ht.set('dan', 'cat');
ht.set('stan', 'dog');
ht.set('chan', 'gull');
ht.set('cran', 'waynston');

//print storage
ht.print();

//return value of a key
console.log(ht.get('stan'))

//delete a key,value
ht.delete('stan');
ht.print();
console.log(ht.get('stan'))