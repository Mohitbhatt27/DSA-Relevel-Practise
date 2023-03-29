//Reversing a linked list between two positions, left and right.
function reverseList(head,left,right){
    if(!head) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    //Move prev to the node before the left node. Starting from 1, not 0. 
    for(let i = 1; i<left; i++){
        prev = prev.next;
    }
    //curr is the node at the left position
    let curr = prev.next;

    //Reverse the nodes between left and right
    for(let i = left; i<right; i++){
        //Reversing the nodes in pairs 

        let newNode = curr.next;
        curr.next = newNode.next;
        newNode.next = prev.next;
        prev.next = newNode;
    }

    return dummy.next;
}