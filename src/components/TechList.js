import React, { Component } from 'react';
import TechItem from './TechItem';
class TechList extends Component {

  static proprTypes = {
    
  }
  state = {
    newTech: '',
    techs: [
    ]
  };

  handleTechChange = e => {
    this.setState({ newTech: e.target.value });
  }
  submitChange = e => {
    e.preventDefault();

    //em um estado não se pode realizar a alteração diretamente
    //pois se fizer isto é como fazer mutação e o estado é imutável
    // ou seja, isto é errado para adicionar um item no estado
    //this.state.techs.push(e.target.value);

    //isto é o correto
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    },
    )

  }

  componentDidMount(){
    const techs = localStorage.getItem('techs');
    if(techs){
      this.setState({techs:JSON.parse(techs)});
    }
    
  }
  componentDidUpdate(_, prevState){
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  removeTech = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }
  render() {
    return (
      <form onSubmit={this.submitChange}>
        <ul>
          {this.state.techs.map(tech => <TechItem key={tech} tech={tech} onDelete={() => this.removeTech(tech)} />)}
          
        </ul>
        <h1>{this.state.newTech}</h1>
        <input
          type="text"
          onChange={this.handleTechChange}
          value={this.state.newTech}></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default TechList;