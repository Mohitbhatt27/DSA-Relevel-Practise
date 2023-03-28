function moveLastToFront(head){
    let temp = head;
    
    while (temp.next.next!=null){
        temp = temp.next;
    }
    //temp points to 2nd last node
    //now we need to break the connect between 2nd last node and last node, but we also need to store the last node before doing that

    let newNode = temp.next; //newNode is the tail node
    temp.next = null; //broken
    newNode.next = head;

    return newNode;
    
}