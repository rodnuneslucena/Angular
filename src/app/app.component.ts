import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  text = '';
  nome = 'Rodrigo Nunes de Lucena';

  pessoas = [
    {
        nome: "Rodrigo",
        sobrenome: "Lucena"
    },
    {
      nome: "Laura",
      sobrenome: "LL"
    },
    {
      nome: "Fulano",
      sobrenome: "Detal"
    }
  ];
  
  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: string): void {
    console.log('Clicou!!!', nome)
  }
  
}
