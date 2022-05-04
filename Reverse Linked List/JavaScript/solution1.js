// Not the fastest but take advantage of some JS features
// Load the list  into an array then reverse the array and set the next values

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    var listArr = [];
    var node = head;
    // load into an array
    while(node != null){
        listArr.push(node);
        node = node.next;
    }
    // reverse the array
    listArr.reverse();
    // iterate over the array
    for(var i = 0; i < listArr.length; i++){
        // if it's the last item in the array then it points to null else it points to the next index
        listArr[i].next = (i+1 < listArr.length) ? listArr[i+1] : null;
    }
    // return either the first node or empty depending
    return listArr[0] ? listArr[0] : [];
};