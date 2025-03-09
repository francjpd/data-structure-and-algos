const Node = (val, next = null) => {
	return {
		val,
		next,
	};
};

const reverseLL = (node) => {
	let prev = null;
	let current = node;
	let temp = null;
	while (current != null) {
		temp = current.next;
		current.next = prev;
		prev = current;
		current = temp;
	}
	return prev;
};

const ll = Node(1, Node(2, Node(3)));
console.log(ll.val);
console.log(reverseLL(ll));
//1,2,3 = 3 , 2 ,1          1.2  = 2.1
// 1  => 2
// temp = 2
//
