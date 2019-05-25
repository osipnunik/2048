import React from 'react';
import ReactDOM from 'react-dom';

class StateComp extends React.Component {
    constructor(props) {
        super(props);
        
        this.right = this.right.bind(this);
        this.left = this.left.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        //this.smashDown = this.smashDown.bind(this);
        this.state = {
            count: 0,
            arr: [["0", "0", "0", "0"], ["0", "0", "0", "0"], ["0", "0", "0", "0"], 
            ["0", "0", "0", "0"]]
        };
        this.insertRandomFirst(this.state.arr);
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

   
    insertRandomFirst(arr){
      let I = Math.floor(Math.random()*4);
      let J = Math.floor(Math.random()*4);
      arr[I][J] = 2;
    return arr;
    }

    insertRandom(arr){
      var randNum = Math.floor((Math.random() * 2) + 1)*2;
      var zeroArray = new Array();
    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 4; j++){
        if(arr[i][j] === 0){
          zeroArray.push(i+':'+j);
        }
      }
    }
    var elem = zeroArray[Math.floor(Math.random()*zeroArray.length)];
    var I = elem.split(':')[0];
    var J = elem.split(':')[1];
    arr[I][J] = randNum;
    return arr;
    }

    right() {
      this.setState((prState) => {
        var arr = prState.arr;//[prState.arr[3], prState.arr[2], prState.arr[1], prState.arr[0]];
        for (var k = 0; k < arr[0].length; k++){
      for (var j = arr[0].length-1; j > 0; j--) {
        for (var i = 0; i < arr.length; i++) {
          if(arr[i][j] == 0){
            arr[i][j] = arr[i][j-1];
            arr[i][j-1] = 0;
          }
        }
      }
    }
      arr = this.insertRandom(arr);
        return {
            arr: arr
        };
      } 
       );
    }
    left() {
      this.setState((prState) => {
        var arr = prState.arr;//[prState.arr[3], prState.arr[2], prState.arr[1], prState.arr[0]];
        for (var k = 0; k < arr[0].length; k++){
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length-1; j++) {
          if(arr[i][j] === 0){
            arr[i][j] = arr[i][j+1];
            arr[i][j+1] = 0;
          }
        }
      }
    }   
    arr = this.insertRandom(arr); 
        return {
            arr: arr
        };
      } 
        );
    }
    up() {
      this.setState((prState) => {
        var arr = prState.arr;//[prState.arr[3], prState.arr[2], prState.arr[1], prState.arr[0]];
        for (var k = 0; k < arr.length; k++) {
      for (var i = 0; i < arr.length-1; i++) {
        for (var j = 0; j < arr[0].length; j++) {
          if(arr[i][j] === 0){
            arr[i][j] = arr[i+1][j];
            arr[i+1][j] = 0;
          }
        }
      }
    }
      arr = this.insertRandom(arr);
        return {
            arr: arr
        };
      } 
       );
    }

    /*smashDown(arr){        //only ufter pushdown
    for (var k = 0; k < arr.length; k++) {
      for (var i = 0; i < arr.length-1; i++) {
        for (var j = 0; j < arr[0].length; j++) {
          if(arr[i][j] != 0 && arr[i][j] == arr[i+1][j]){
            arr[i+1][j] = arr[i][j]*2;
            arr[i][j] = 0;
            //i--;
            /*if((i+2) < a && typeof arr[i+2][j] !== "undefined"){
              if(arr[i+2][j] !== 0)
              //pushDown();
            }
          }
        }
      }
      return arr;
    }*/

    down() {
      this.setState((prState) => {
        var arr = prState.arr;//[prState.arr[3], prState.arr[2], prState.arr[1], prState.arr[0]];
        for (var k = 0; k < arr.length; k++) {
      for (var i = arr.length-1; i > 0; i--) {
      for (var j = 0; j < arr[0].length; j++) {
        if(arr[i][j] == 0){
          arr[i][j] = arr[i-1][j];
          arr[i-1][j] = 0;
        }
      }
    }
  }
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
                <h1>Count : {this.state.count}</h1>
                         
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
          <StateComp name="Osip"/>

    </div>
  );
}

export default App;

/*class Header extends React.Component {
  render() {
  const title = 'text123rfv123'; 
  
    return (
      <div>
    <p>my osip Akopiants text 
    <Comp propkey={this.a}/>
    <FormComp />
    </p>
    </div>
    );
  }
}

const jsx = (
  <div>
    <Header />
  </div>
  );

class Comp extends React.Component{
  remooveAllButton(){
    alert('remoove all button');
  }

  render() {

    return (
    <div>
    <button onClick={this.remooveAllButton}>remoove all</button>
    <p>this new include{this.props.propkey}</p>
    </div>
  );
}
}
class FormComp extends React.Component{
  handleAddOption(e){
    e.preventDefault();
    const val = e.target.elements.option.value;
    if(val){
    alert('value is '+val);
  }
}
  render(){
    return (
      <div><h2>this is FormComp</h2>
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button type="submit"></button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Header />, document.getElementById('root'));
*/