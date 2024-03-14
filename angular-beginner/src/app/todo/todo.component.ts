import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  taskArray=[{taskName: 'Study', isCompleted:false}];
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
    form.reset();
  }
  onDelete(index: number){
    console.log(index);
    this.taskArray.splice(index, 1);
  }
  onCheck(index: number){
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
