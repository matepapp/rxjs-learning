import { Observable, Subject, interval, Observer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

let observable1 = Observable.create((observer: Observer<any>) => {
    var i = 1;
    setInterval(() => observer.next(i++), 1000);
}) 

let observable2 = new Subject();

setTimeout(() => {
    observable2.next('Hey!');
}, 3000);

let newObs: Observable<any> = observable1.pipe(skipUntil(observable2));
newObs.subscribe(data => addItem(data));

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
