/**
 * leftmost, head, current we will mantain
 * 
 * while leftmost is not null, current level is done and we are doing next level
 * 1. reset everything -> head = null, current = leftmost, leftmost = null as now we have setup the next level
 * 
 * While current is not null, we will do something
 * 1. Process current.left and current.right
 * 2. When both are processed, we will move current to current.next
 * 
 * 
 * 
 * 
 * 
 * Process function will have a child
 * 1. if child is null, return
 * 2. if head is null, you are touching the first node of the level, so set head = child, and leftmost = child
 * 3. else if head is not null, you are touching the next node of the level, so set head.next = child, and move head to head.next
 */

let leftmost, head;

function connect(root) {
    leftmost = root;
    head = null;
    let current = null;
    while (leftmost != null) {
        curr = leftmost;
        head = null;
        leftmost = null;

        while (curr != null) {
            processChild(curr.left);
            processChild(curr.right);
            curr = curr.next;
    }
}

return root;
}


function processChild (childNode) {
    if (childNode == null) return;
    if (head == null) {
        head = childNode;
        leftmost = childNode;
    } else {
        head.next = childNode;
        head = head.next;
    }
}

