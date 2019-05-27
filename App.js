import React from 'react';
import ReactDOM from 'react-dom';

class StateComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            move: 0,
            arr: [["0", "0", "0", "0"], ["0", "0", "0", "0"], ["0", "0", "0", "0"],
            ["0", "0", "0", "0"]]
        };
        this.increment = this.increment.bind(this);
        this.smashRight = this.smashRight.bind(this);
        this.smashLeft = this.smashLeft.bind(this);
        this.smashUp = this.smashUp.bind(this);
        //this.smashDown = this.smashDown.bind(this);

        this.right = this.right.bind(this);
        this.left = this.left.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        //this.smashDown = this.smashDown.bind(this);
        
        
        //this.insertRandomFirst(this.state.arr);
    }
    bealdTable = () => {
        let table = []
        const cell = {
            width: '100px',
            height: '80px',
            border: 'solid 2px black',
            textAlign: 'center',
            display: 'table-cell',
            WebkitTransition: 'all',
            msTransition: 'all'
        };
        // Outer loop to create parent
        for (let i = 0; i < 4; i++) {
            let children = []
            for (let j = 0; j < 4; j++) {
                children.push(<div style={cell}>{this.state.arr[i][j]}</div>);
            }

            table.push(<div>{children}</div>);
        }
        return table;
    }


    insertRandomFirst(arr) {
        let I = Math.floor(Math.random() * 4);
        let J = Math.floor(Math.random() * 4);
        arr[I][J] = 2;
        return arr;
    }

    insertRandom(arr) {
        var randNum = Math.floor((Math.random() * 2) + 1) * 2;
        console.log("insertRandom arr: " + arr);
        var zeroArray = new Array(0);
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (arr[i][j] == 0) { //Don't ===  (couse error) !!!!!
                    zeroArray.push(i + ':' + j);
                    console.log("zero array push")
                }
            }
        }
        console.log("zeroArray : " + zeroArray);
        let ranNum = Math.floor(Math.random() * zeroArray.length);
        console.log("ranNum: " + ranNum);
        var elem = zeroArray[ranNum];
        console.log("elem : "+elem);
        var I = elem.split(':')[0];
        var J = elem.split(':')[1];
        arr[I][J] = randNum;
        return arr;
    }

    increment() {
        this.setState((prState) => {
            return {
                move: prState.move + 1
            };
        }

        );
    }

    smashRight(arr) {
        for (var k = 0; k < 4; k++) {
            for (var j = 0; j < 3; j++) {
                for (var i = 0; i < 4; i++) {
                    if (arr[i][j] != 0 && arr[i][j] == arr[i][j + 1]) {
                        arr[i][j + 1] = arr[i][j] * 2;
                        arr[i][j] = 0;
                        
                    }
                }
            }
        }
        return arr;
    }

    smashLeft(arr) {
        for (var k = 0; k < arr[0].length; k++) {
            for (var j = 1; j < arr[0].length; j++) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i][j] != 0 && arr[i][j] == arr[i][j - 1]) {
                        arr[i][j - 1] = arr[i][j] * 2;
                        arr[i][j] = 0;
                    }

                }
            }
        }
        return arr;
    }

    smashUp(arr) {
        for (var k = 0; k < arr.length; k++) {
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    if (arr[i][j] != 0 && arr[i][j] == arr[i + 1][j]) {
                        arr[i][j] = arr[i + 1][j] * 2;
                        arr[i + 1][j] = 0;
                        //if ((i + 2) < a && typeof arr[i + 2][j] !== "undefined") {
                        //    if (arr[i + 2][j] != 0) {
                        //        pushUp();
                        //    }
                        //}
                    }
                }
            }
        }
        return arr;
    }

    right() {
        this.increment();
        this.setState((prState) => {
            var arr = prState.arr;//[prState.arr[3], prState.arr[2], prState.arr[1], prState.arr[0]];
            for (var k = 0; k < arr[0].length; k++) {
                for (var j = arr[0].length - 1; j > 0; j--) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i][j] == 0) {
                            arr[i][j] = arr[i][j - 1];
                            arr[i][j - 1] = 0;
                        }
                    }
                }
            }
            arr = this.smashRight(arr);
            arr = this.insertRandom(arr);
            return {
                arr: arr
            };
        }
        );
    }
    left() {
        this.increment();
        this.setState((prState) => {
            var arr = prState.arr;//[prState.arr[3], prState.arr[2], prState.arr[1], prState.arr[0]];
            for (var k = 0; k < arr[0].length; k++) {
                for (var i = 0; i < arr.length; i++) {
                    for (var j = 0; j < arr[0].length - 1; j++) {
                        if (arr[i][j] === 0) {
                            arr[i][j] = arr[i][j + 1];
                            arr[i][j + 1] = 0;
                        }
                    }
                }
            }
            console.log("arr from left : " + arr);
            arr = this.smashLeft(arr);
            arr = this.insertRandom(arr);
            return {
                arr: arr
            };
        }
        );
    }



    up() {
        this.increment();
        this.setState((prState) => {
            var arr = prState.arr;//[prState.arr[3], prState.arr[2], prState.arr[1], prState.arr[0]];
            for (var k = 0; k < arr.length; k++) {
                for (var i = 0; i < arr.length - 1; i++) {
                    for (var j = 0; j < arr[0].length; j++) {
                        if (arr[i][j] === 0) {
                            arr[i][j] = arr[i + 1][j];
                            arr[i + 1][j] = 0;
                        }
                    }
                }
            }
            arr = this.smashUp(arr);
            arr = this.insertRandom(arr);
            return {
                arr: arr
            };
        }
        );
    }

    smashDown(arr){        
    for (var k = 0; k < arr.length; k++) {
      for (var i = 0; i < arr.length-1; i++) {
          for (var j = 0; j < arr[0].length; j++) {
              if (arr[i][j] != 0 && arr[i][j] == arr[i + 1][j]) {
                  arr[i + 1][j] = arr[i][j] * 2;
                  arr[i][j] = 0;

                  //if((i+2) < a && typeof arr[i+2][j] !== "undefined"){
                  //  if(arr[i+2][j] !== 0)
                  //  //pushDown();
                  //}
              }
          }
        }
      }
      return arr;
    }

    down() {
        this.increment();
        this.setState((prState) => {
            var arr = prState.arr;//[prState.arr[3], prState.arr[2], prState.arr[1], prState.arr[0]];
            for (var k = 0; k < arr.length; k++) {
                for (var i = arr.length - 1; i > 0; i--) {
                    for (var j = 0; j < arr[0].length; j++) {
                        if (arr[i][j] == 0) {
                            arr[i][j] = arr[i - 1][j];
                            arr[i - 1][j] = 0;
                        }
                    }
                }
            }
            arr = this.smashDown(arr);
            arr = this.insertRandom(arr);
            return {
                arr: arr
            };
                       
        }
        );
    }

    render() {
        return (
            <div>
                <h1>Move : {this.state.move}</h1>

                <button onClick={this.left}>Left</button>
                <button onClick={this.up}>Up</button>
                <button onClick={this.down}>Down</button>
                <button onClick={this.right}>Right</button>
                <table>{this.bealdTable()}</table>
            </div>
        );
    }
}



function App() {

    return (
        <div className="App">
            <StateComp name="Osip" />

        </div>
    );
}

export default App;
