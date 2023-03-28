function reverse(head){
    let current = head;
    let previous = null;
    while(current!=null){
        let nextAdjacent = current.next;
        current.next = previous;

        //shifting our previous and current, just like i++ or j++ step
        previous = current;
        current = nextAdjacent;
    }
    //previous has access to last elem of original linked list
    return previous;
}