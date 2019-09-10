import React from 'react';

class ClassDemo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleInput= this.handleInput.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name;
    this.handleColor();
  }

  componentDidUpdate() {
    document.title = this.state.name;
    this.handleColor();
  }

  handleInput(e) {
    this.setState({ name: e.target.value });
  }

  handleColor() {
    if (this.state.name === 'Voldemort') {
      document.getElementsByClassName('form')[0].style.backgroundColor = 'red';
    } else {
      document.getElementsByClassName('form')[0].style.backgroundColor = 'white';
    }
  }

  render() {

    return(

      <section className='form'>
        <header>Welcome, {this.state.name}</header>
        <label>Please provide your name 
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