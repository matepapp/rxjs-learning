import { Observable, Observer, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

Observable.create((observer: Observer<any>) => {
    observer.next('Hey guys!');
})
    .pipe(map((next: string) => next.toUpperCase()))
    .subscribe((data: any) => addItem(data));

function addItem(value: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
