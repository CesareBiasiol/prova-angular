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
  @Output('editLibro') editLibro = new EventEmitter<Libro>();
  edit: boolean = false;
  hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  OnDelLibro(libro:Libro){
    console.log(libro);
    this.delLibro.emit(libro);
  }

  OnEditLibro(libro:Libro){
    this.editLibro.emit(libro);
  }

  OnAbilitaEdit(titolo){
    this.edit = !this.edit;
    this.hidden = !this.hidden;
    titolo.focus()
  }
}
