class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    getHead() {
        if (this.isEmpty()) {
            return null
        }
        return this.head.value;
    }
    getTail() {
        let tail = ''
        if (this.isEmpty()) {
            return null
        } else {
            let curr = this.head
            while (curr) {
                tail = `${curr.value}`
                curr = curr.next
            }
        }
        return tail

    }
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    print() {
        let list = '';
        if (this.isEmpty()) {
            console.log('list is empty')
        } else {

            let curr = this.head
            while (curr) {
                list += `${curr.value} `
                curr = curr.next
            }

        }
        return list
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head;
            while (curr.next) {

                curr = curr.next
            }
            curr.next = node
            // node.next = null
        }
        this.size++
    }
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            console.log('invalid index')
        }
        if (index === 0) {
            this.prepend(value)

        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node;
            this.size++
        }
    }
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log('invalid index')
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {

            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value;
    }
    nodeAt(index) {
        if (index < 0 || index >= this.size) {
            return `invalid index`
        }
        let answer
        if (index === 0) {
            answer = this.head.value
            return answer
        } else {
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            answer = curr.next.value

        }
        return answer

    }
    contains(value) {
        if (this.isEmpty()) {
            return -1
        } else {
            let i = 0
            let curr = this.head
            while (curr) {
                if (curr.value === value) {
                    console.log('value is present')
                    return i

                }
                curr = curr.next
                i++
            }
            return -1

        }

    }
    removeGivenVal(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

}


const newNode = new LinkedList()
console.log(newNode.getSize())
newNode.print()
newNode.prepend(5)
newNode.prepend(10)
newNode.append(15)
console.log(newNode.print())
console.log(newNode.getSize())
console.log(newNode.getHead())
console.log(newNode.getTail())
newNode.insertAt(2, 1)
console.log(newNode.print())
// console.log(newNode.removeAt(1))
console.log(newNode.nodeAt(1))
console.log(newNode.contains(5))
console.log(newNode.print())
// console.log(newNode.removeGivenVal(10))
// console.log(newNode.print())







// console.log(newNode.popTheTail())






