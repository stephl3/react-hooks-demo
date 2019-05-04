import React from 'react';

class ClassDemo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: 'Julie Andrews',
    }
    this.handleInput= this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ name: e.target.value });
  }

  render() {

    return(

      <section className='form'>
        <header>Salutations, {this.state.name}</header>
        <label>Please provide your name: 
          <input
            value={this.state.name}
            onChange={this.handleInput}
          />
        </label>
      </section>

    )
  }
}

export default ClassDemo;