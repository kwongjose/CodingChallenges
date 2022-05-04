package main

func Main() {}

type MyQueue struct {
	queue []int
	stack []int
}

// solutions updates the queue each time there is a push or a pop.
func Constructor() MyQueue {
	return MyQueue{
		queue: make([]int, 0),
		stack: make([]int, 0),
	}

}

func (this *MyQueue) Push(x int) {
	this.stack = append([]int{x}, this.stack...)
	this.synceData()

}

func (this *MyQueue) Pop() int {
	val := this.queue[0]
	if (len(this.stack) - 1) == 0 {
		this.stack = nil
	} else {
		this.stack = this.stack[:len(this.stack)-1]
	}
	this.synceData()

	return val
}

func (this *MyQueue) Peek() int {
	return this.queue[0]
}

func (this *MyQueue) Empty() bool {
	return len(this.queue) == 0
}

func (this *MyQueue) synceData() {
	last := len(this.stack) - 1
	this.queue = nil
	for last >= 0 {
		this.queue = append(this.queue, this.stack[last])
		last--
	}
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Peek();
 * param_4 := obj.Empty();
 */
