// Question:-
// Implement a stack using ES6 classes.
// What is stack? 
// => a stack is a special kind of data structure, like a physical stack, or pipe, 

// Hints:
// A Stack has two essential operations push for adding ans object, and 
// pop to remove the object on the top. So we can call the push method.
// Now unlike arrays, we cannot access objects in a stack using their index,
// but we can always remove the object on top of the stack by calling the pop method.
// so we call the pop method from last.


// Solution:
// 1. Implement a private property, let's define a constant called _items, and set to a new WeakMap.
// 2. Implement a stack class.
// 3. Add constructor. 
//    ->_items.set(), and pass the key this object, and value is an empty array[].
// 4. Now let's add to push method, here pass an obj, 
// 5. -Now we need to access empty array here, ->so we call _items.get(), pass this.push()method,
//    and this will always add an obj at the end of the array.
// 6. Now the pop method, 
// 7. First we need to chcek empty or not. ->if, _items.get(this.length) is equals 0.
// 8. We're going to ->throw new Error 'stack is empty'.
// 9. Otherwise we should remove this object from the top of the stack.
//    ->_items.get method, pass this,.pop method, that removes the object at the end of the array, 
//      so call that and return the pop result.
// To remove this deuplicate, we can refactor this code, and store this array in a constant in the method.
// 10. let's add constant called items. -> const items = _items.get(this); and replace to this -_items.get(this with items
//     finally, we call the pop method on the items array.
// 11. Now the peak method -> define a constant items, initialize it and set it to _items.get method, pass this
// 12. Check if the stack is empty -> if items.length is equals 0, 
// 13. we throw new Error 'stack is empty.'
// 14. otherwise, return items, of items.length -1.
// Count is a read only property. that's where we use getter.
// 15. get count property, we return _items.get method, pass this.length.

const _items = new WeakMap();

class Stack {
    constructor(){
        -_items.set(this, []);
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop(){
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('stack is empty.');

        return items.pop()
    }

    pick(){
        const items = _items.get(this);
        if (items.length === 0)
            throw new Error('stack is emppty.')
        return items[items.length -1]
    }

    get count() {
        return _items.get(this).length;
    }
}



