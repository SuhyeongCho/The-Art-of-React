import React, { Component } from 'react';
import IterationSample from './IterationSample';
// import MyComponent from './MyComponent;'
// import EventPractice  from './EventPractice';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      // <MyComponent name="조수형" age={25}/>
      // <EventPractice/>
      // <ValidationSample/>
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox=ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨 밑으로
      //   </button>
      // </div>
      <IterationSample/>
    );
  }
}

export default App;