var head; 
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

 function printList()
{
    var n = head;
    while (n != null) {
        console.log(n.data + " ");
        n = n.next;
    }
}

   var head = new Node(1);
    var second = new Node(2);
    var third = new Node(3);

    head.next = second;
    second.next = third; 
    printList();