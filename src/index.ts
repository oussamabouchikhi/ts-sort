import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

// Sort a string
const charactersCollection = new CharactersCollection('Xsjah');
charactersCollection.sort();
console.log(charactersCollection.data);

// Sort an array of numbers
const numbersCollection = new NumbersCollection([-1, 15, 7]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Sort a linked list
const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-10);
linkedList.add(18);
linkedList.add(-4);
linkedList.add(7);
linkedList.sort();
linkedList.print();
