import { from } from 'rxjs';
import { map } from 'rxjs/operators';

from([
    { first: 'Gary', last: 'Simon', age: '34'},
    { first: 'Jane', last: 'Simon', age: '34'},
    { first: 'John', last: 'Simon', age: '34'},
])
    .pipe(map(data => data.first))
    .subscribe(next => addItem(next));

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
