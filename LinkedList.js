class Node {
    int data;
    Node next;
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedList {
    Node head;
    // Insert at beginning
    void insertAtBeginning(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }
    // Insert at end
    void insertAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    // Delete from beginning
    void deleteFromBeginning() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        head = head.next;
    }
    void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtBeginning(0);
        list.display(); 
        list.deleteFromBeginning();
        list.display(); 
    }
}
