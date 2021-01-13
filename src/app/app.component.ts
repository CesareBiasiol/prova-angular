import { Component } from '@angular/core';
import { Libro } from './domain/Libro';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'primo';
  libri : Libro[] = [
    {titolo: 'Angular', autore:"google",genere:"web tech"},
    {titolo: 'React', autore:"facebook",genere:"web tech"}
  ];

  onClick(libro:Libro){
    console.log(libro);
  }

  OnDelLibro(libro: Libro){
    console.log("Log da componente padre", libro)
    this.libri = this.libri.filter( libroInElenco => libro.titolo !== libroInElenco.titolo);
  }

  OnEditLibro(libro:Libro){

  }
}
