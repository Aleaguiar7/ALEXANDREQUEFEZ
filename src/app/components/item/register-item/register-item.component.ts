import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../service/item.service'; // Importe o serviço de Item
import { Item } from 'src/app/shared/models/item.model'; // Importe o modelo Item
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-item',
  templateUrl: './register-item.component.html',
  styleUrls: []
})
export class RegisterItemComponent implements OnInit {
  @ViewChild("formItem") formItem!: NgForm; // Atualize o nome do formulário se necessário
  item: Item = new Item();
  loading: boolean = false;

  constructor(
    private itemService: ItemService, // Atualize o nome do serviço se necessário
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id_item = +params['id_item']; // Obtenha o ID do item da URL
      if (id_item) {
        this.itemService.findById(id_item).subscribe(
          item => {
            this.item = item; // Carregue os dados do item a ser editado
          },
          error => {
            console.error("Erro ao obter os dados do item:", error);
          }
        );
      }
    });
  }

  salvar(): void {
    this.loading = true;
    
    if (this.formItem.form.valid) {
      if (this.item.id_item) {
        this.itemService.update(this.item).subscribe(
          () => {
            this.loading = false;
            this.router.navigate(["/item/list"]); // Atualize a rota se necessário
          },
          error => {
            console.error("Erro ao atualizar o item:", error);
            this.loading = false;
            // Adicione um tratamento de erro adequado aqui, como exibir uma mensagem de erro ao usuário.
          }
        );
      } else {
        this.itemService.insert(this.item).subscribe(
          () => {
            this.loading = false;
            this.router.navigate(["/item/list"]); // Atualize a rota se necessário
          },
          error => {
            console.error("Erro ao inserir o item:", error);
            this.loading = false;
            // Adicione um tratamento de erro adequado aqui, como exibir uma mensagem de erro ao usuário.
          }
        );
      }
    }
  }
}
