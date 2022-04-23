import React from 'react';

export default class Answer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
      console.log(this.state.value)
      alert('A name was submitted: ' + this.state.value);
    }
  
    render() {
      return (
        <div className='steps'>
            <h2>Answer</h2>
            <form>
                <label>
                    When a is 3 and b is 3, what is X?
                    <input alue={this.state.value} />
                </label>
                <input type="button" value="Submit" onClick={() => this.handleChange}/>
            </form>
        </div>
      );
    }
  }