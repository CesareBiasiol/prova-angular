import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from '../domain/Libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  @Input()
  libro!: Libro;
  @Output('delLibro') delLibro = new EventEmitter<Libro>();

  constructor() { }

  ngOnInit(): void {
  }

  OnDelLibro(libro:Libro){
    console.log(libro)
  }

}
