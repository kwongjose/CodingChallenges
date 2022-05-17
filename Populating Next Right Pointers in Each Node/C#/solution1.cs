/*
// Definition for a Node.
public class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
}
*/

public class Solution {
    public Node Connect(Node root) {
        // use a map to track the last node seen for each level
        IDictionary<int, Node> tracker = new Dictionary<int, Node>();
        helper(root, 0, tracker);
        return root;
    }
    
    
    public Node helper(Node root, int level, IDictionary<int, Node> tracker) {
        if (root == null) {
            return root;
        }
        // Traverse the tree until we reach a leaf Node
        helper(root.left, level + 1, tracker);
        helper(root.right,level + 1, tracker);
        // If we have seen a node on this level assign the current node to the next value for the save node
        if (tracker.ContainsKey(level)) {
            Node leftNode = tracker[level];
            leftNode.next = root;
        }
        // update the node at this level. This ensures that the node saved is always the last node on the left seen
        tracker[level] = root;
            
        return root;
    }
}

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
  }