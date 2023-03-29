let start = null;
function f(end){
    if(end==null){
        return false;
    }
    let b = f(end.next);
    if(!b && (start.next == end || start == end)){
        return true;
    }
    if(b==false){
        let nextOfStart = start.next;
        start.next = end;
        end.next = nextOfStart;
        start = nextOfStart;
    }
    return b;
}

var reorderList = function(head) {
    if(head == null){
        return null;
    }
    start = head;
    f(head);
    return head;
};