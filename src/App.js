import React, { Component } from 'react';
import './App.css';

import Title from './components/Title'
import Exercise from './components/Exercise'
import PreviousTitle from './components/PreviousTitle'
import PreviousWorkout from './components/PreviousWorkout'


let easyLevel = ['10 pushups', '10 situps', '5 jumping jacks', '5 lunges', '5 squats', '30 second plank', '1 mile run']
let mediumLevel = ['25 pushups', '25 situps', '15 jumping jacks', '10 lunges', '10 squats', '1 min plank', '2 mile run']
let hardLevel = ['50 pushups', '50 situps', '30 jumping jacks', '20 lunges', '15 squats', '2 min plank', '5 mile run']
let expertLevel = ['100 pushups', '100 situps', '60 jumping jacks', '40 lunges', '30 squats', '5 min plank', '10 mile run']

function getTime(current) {
  return Math.round((new Date().getTime() - current)/1000)
}

function getSeconds(current) {
  return Math.round((new Date().getTime() - current)/1000) - Math.floor(getTime(current)*0.0166667)*60
}

function getExercise(level) {
  return level[Math.floor(Math.random()*level.length)]
}
function immutableUnshift(arr, newEntry) {
  return [newEntry, ...arr];
}

class App extends Component {
  state = {
    button: 'start',
    clock: '0:00:00',
    difficulty: 'easy',
    exercise: easyLevel[Math.floor(Math.random()*easyLevel.length)],
    previousWorkouts: ['Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
    previousTimes: ['0', '0', '0', '0', '0', '0', '0', '0']
  }
  handleEasy = (e) => {
    e.preventDefault();
    this.setState({
      difficulty: 'easy',
      exercise: getExercise(easyLevel)
    })
  }
  handleMedium = (e) => {
    e.preventDefault();
    this.setState({
      difficulty: 'medium',
      exercise: getExercise(mediumLevel)
    })
  }
  handleHard = (e) => {
    e.preventDefault();
    this.setState({
      difficulty: 'hard',
      exercise: getExercise(hardLevel)
    })
  }
  handleExpert = (e) => {
    e.preventDefault();
    this.setState({
      difficulty: 'expert',
      exercise: getExercise(expertLevel)
    })
  }
  handleClick = (e) => {
    e.preventDefault();
    let current = new Date().getTime();
    if (this.state.button === 'start') {
      this.interval = setInterval(() => this.setState({
        button: 'stop',
        clock: (getTime(current) < 10) ? '0:00:0' + getTime(current) :
        (getTime(current) < 60) ? '0:00:' + getTime(current) :
        (getTime(current) < 600) ? '0:0' + Math.floor(getTime(current)*0.0166667) + ':' + ((getSeconds(current) < 10) ? '0' + getSeconds(current) : getSeconds(current)) : 'Overtime'
      }),
      1000);
    } else {
      clearInterval(this.interval);
      this.setState({
        button: 'start'
      })
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      previousWorkouts: immutableUnshift(this.state.previousWorkouts.slice(0, -1), this.state.exercise),
      previousTimes: immutableUnshift(this.state.previousTimes.slice(0, -1), this.state.clock)
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col s6 card-panel teal lighten-4">
          <div className="title">
            <Title />
          </div>
          <div className="timer">
            <button className="teal btn startbutton" onClick={this.handleClick}>{this.state.button}</button>
            <h1>{this.state.clock}</h1>
          </div>
          <div className="exercise">
            <Exercise difficulty={this.state.difficulty} exercise={this.state.exercise}/>
            <br />
            <button className="btn btn-floating btn-large" onClick={this.handleEasy}>Easy</button>
            <button className="btn btn-floating btn-large" onClick={this.handleMedium}>Medium</button>
            <button className="btn btn-floating btn-large" onClick={this.handleHard}>Hard</button>
            <button className="btn btn-floating btn-large" onClick={this.handleExpert}>Expert</button>
          </div>
          <div className="submitbutton">
            <button className="btn black submit" onClick={this.handleSubmit}>Finished!</button>
          </div>
        </div>
        <div className="col s6 card-panel teal lighten-4">
          <div className="prevtitle">
            <PreviousTitle />
          </div>
          <div className="previous-workout">
            <div className="breaker">
              <PreviousWorkout workout={this.state.previousWorkouts[0]} time={this.state.previousTimes[0]}/>
            </div>
            <div className="breaker">
            <PreviousWorkout workout={this.state.previousWorkouts[1]} time={this.state.previousTimes[1]}/>
          </div>
          <div className="breaker">
            <PreviousWorkout workout={this.state.previousWorkouts[2]} time={this.state.previousTimes[2]}/>
          </div>
          <div className="breaker">
            <PreviousWorkout workout={this.state.previousWorkouts[3]} time={this.state.previousTimes[3]}/>
          </div>
          <div className="breaker">
            <PreviousWorkout workout={this.state.previousWorkouts[4]} time={this.state.previousTimes[4]}/>
          </div>
          <div className="breaker">
            <PreviousWorkout workout={this.state.previousWorkouts[5]} time={this.state.previousTimes[5]}/>
          </div>
          <div className="breaker">
            <PreviousWorkout workout={this.state.previousWorkouts[6]} time={this.state.previousTimes[6]}/>
          </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
