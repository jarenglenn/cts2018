import React, { Component } from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';

export default class Library extends Component {
 render() {
    return (
      <div className = "schedule">
        <h1 className = "schedule__title">Schedule</h1>
        <ScheduleCourse title = {'Problem Solving'}/>
        <ScheduleCourse title = {'Problem Solving'}/>
        <ScheduleCourse title = {'Problem Solving'}/>
        <ProgressTracker/>
        <Gradient/>
      </div>
    );
  }
}