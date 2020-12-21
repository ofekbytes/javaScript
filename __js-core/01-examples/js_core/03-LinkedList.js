
// Linked List
function taskLinkedList() {


//-----------------------------------------------------------//
//   variable - global variable 
//-----------------------------------------------------------//   
    var length = 0;
    var head = null;
    var count = 0;



//-----------------------------------------------------------//
//   Node() - add a new 'node'
//-----------------------------------------------------------//   
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };


//-----------------------------------------------------------//
//   add() - add a new 'element' into LinkedList
//-----------------------------------------------------------//
    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            // ! // while 'currentNode' != null
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };


//-----------------------------------------------------------//
//   countLinks() - count all element in LinkedList
//-----------------------------------------------------------//
    this.countLinks = function () {

        var currentNode = head;
        var tc = 1;

        if (head === null) {
            tc = (-1);
        }
        else {
            while (currentNode.next) {
                currentNode = currentNode.next;
                tc++;
            }
        }
        count = tc;

        return tc;
    };


//-----------------------------------------------------------//
//   printLinkedList() - print all element in LinkedList
//-----------------------------------------------------------//
    this.printLinkedList = function () {

        var currentNode = head;
        var tc = 1;
        var index = 0;

        if (head === null) {
            tc = (-1);
        }
        else {

            console.log(`print all linked list element `);
            while (currentNode.next !== null) {
                console.log(`_[ ${index} ]_ ===> ${currentNode.element}`);
                currentNode = currentNode.next;
                index++;
            }    
            console.log(`_[ ${index} ]_ ===> ${currentNode.element}`); //print the last element.

        }
        return tc;
    };

   
//-----------------------------------------------------------//
//   main() 
//-----------------------------------------------------------//
    this.main = function(numbers, number) {

        var index = 0;
        var prev = 0;
        for (prev = 0 , index=0; index < numbers.length; index++) {

            // write first array
            if (index === 0) {
                this.add(numbers[index])
            }
            else {
               prev = index -1;
               if( ((numbers[index] + numbers[prev]) / 2 === number )  )
               {
                   this.add(number);
                //    console.log(`number is equal add 10 between this value = ${number} `);
               }
               this.add(numbers[index]);
            }

            // console.log(` prev ==> ${numbers[prev]}  index ==> ${numbers[index]} `);
        }
        
        // print all linked list array.
        this.printLinkedList();

    };

}


//-----------------------------------------------------------//
//
//   code start here 
//
//-----------------------------------------------------------//    



//-----------------------------------------------------------//
//   Test #1 - 
//-----------------------------------------------------------//    
var number = 5;
var numbers = [20, -10, 30, -10, 20];


//-----------------------------------------------------------//
//   Test #2
//-----------------------------------------------------------//    
// var number = 10;
// var numbers = [0, 20, 30, -10];


//-----------------------------------------------------------//
//   main()
//-----------------------------------------------------------//    
var task = new taskLinkedList();
task.main(numbers, number);

