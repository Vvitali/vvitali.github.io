import React from 'react';
import ReactDOM from 'react-dom';


const title = React.createElement(
    'h1',   // элемент, который мы создаем
    {id: 'title'},  // свойства, которые будет иметь создаваемый элемент
    'Hello React'   // внутреннее содержимое
)

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>;
  }
}