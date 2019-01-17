import React from 'react'
import './Exercise.css'


const Exercise = (props) => (
  <div>
    <span className="difficulty">Difficulty: </span><span className="difficulty-level">{props.difficulty}</span>
     <br/>
    {props.exercise}
  </div>
)

// class Exercise extends Component {
//   state = {
//     difficulty: 'easy',
//     exercise: easyLevel[Math.floor(Math.random()*easyLevel.length)]
//   }
//   handleEasy = (e) => {
//     e.preventDefault();
//     this.setState({
//       difficulty: 'easy',
//       exercise: easyLevel[Math.floor(Math.random()*easyLevel.length)]
//     })
//   }
//   handleMedium = (e) => {
//     e.preventDefault();
//     this.setState({
//       difficulty: 'medium',
//       exercise: mediumLevel[Math.floor(Math.random()*mediumLevel.length)]
//     })
//   }
//   handleHard = (e) => {
//     e.preventDefault();
//     this.setState({
//       difficulty: 'hard',
//       exercise: hardLevel[Math.floor(Math.random()*hardLevel.length)]
//     })
//   }
//   handleExpert = (e) => {
//     e.preventDefault();
//     this.setState({
//       difficulty: 'expert',
//       exercise: expertLevel[Math.floor(Math.random()*expertLevel.length)]
//     })
//   }
//   render() {
//     return (
//       <div className="custom">
//         <h1>{this.state.exercise}</h1>
//         <p><span className="difficulty">Difficulty:</span> <span className="difficulty-level">{this.state.difficulty}</span></p>
//         <button className="btn btn-floating btn-large" onClick={this.handleEasy}>Easy</button>
//         <button className="btn btn-floating btn-large" onClick={this.handleMedium}>Medium</button>
//         <button className="btn btn-floating btn-large" onClick={this.handleHard}>Hard</button>
//         <button className="btn btn-floating btn-large" onClick={this.handleExpert}>Expert</button>
//       </div>
//     )
//   }
// }


export default Exercise
