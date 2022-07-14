/*
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> children;

    public Node(){}
    public Node(int _val,IList<Node> _children) {
        val = _val;
        children = _children;
}
*/
public class Solution {
    public IList<int> Preorder(Node root) {
        IList<int> traversal = new List<int>();
        if(root != null) {
            helper(root, traversal);
        }
        return traversal;
    }
    
    private void helper(Node root, IList<int> list) {

        list.Add(root.val);
        foreach(Node node in root.children) {
            helper(node, list);
        }
    }
}