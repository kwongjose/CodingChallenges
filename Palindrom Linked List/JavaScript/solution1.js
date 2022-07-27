/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let f = helper(head, head)
    if(f === false) {
        return false
    }
    
    return true
};

//**
 * Recurs until we get to the end of the list. 
* Then return the last node
* Compaire that node to the first node in the list
* if equal return the next node from the front of the list
* if not return false
 * @param {*} head  The head or first node
 * @param {*} node The current node to check
 * @returns 
 */
var helper = function(head, node) {
    // base case for exit
    if(node === null) {
        return head
    }
    let partner = helper(head, node.next)
    if(partner === false) {
        return partner
    }
    // if the partner is not equal to the current node result is false
    if(partner.val !== node.val) {
        return false
    }
    // return the next partner
    return partner.next
    
}