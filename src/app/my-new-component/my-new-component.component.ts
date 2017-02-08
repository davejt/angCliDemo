import {Component, OnInit, Injectable} from '@angular/core';
import { ExerciseClass } from './../exercise-class';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  randomNumber = 5;
  exerciseName = 'Big Man Squats';
  exercises = [
      new ExerciseClass(0, 'Squats'),
      new ExerciseClass(1, 'Deadlifts'),
      new ExerciseClass(2, "Bench Press")
  ];
  newId = this.exercises[2].addToId(this.exercises[2].id);
  myExercise = new ExerciseClass(155, "Pull-Ups");
  newValue = this.myExercise.addToId(this.myExercise.id);
  constructor() { }

  ngOnInit() {
  }

}
