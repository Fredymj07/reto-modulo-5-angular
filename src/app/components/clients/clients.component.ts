import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit, AfterViewInit, OnDestroy {

  // Declaración de variables
  public name: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _clientsService: ClientsService
  ) {
    console.log('Se ejecuta de primero tan pronto es llamada la vista para que carguen variables y/o formularios.');
  }

  ngOnInit(): void {
    this.getClientData();

    console.log('Se ejecuta de segundo tan pronto se renderiza la vista. Llamado de servicios.');

    // Lectura de parámetros recibidos por la URL
    this._activatedRoute.params.forEach( (data: Params) => {
      let id = data['id'];
      console.log(`Id ${id} consultado desde la url`);
    });

    // Lectura de parámetros recibidos a través de QUERY PARAMS
    this._activatedRoute.queryParams.subscribe( response => {
      console.log('Nombre consultado desde la url ', response);
    });
  }

  ngAfterViewInit() {
    console.log('Se ejecuta de tercero tan pronto ha terminado la renderización de la vista.');
  }

  getClientData() {
    this._clientsService.getClientData().subscribe(response => {
      console.log('Response', response);
    }, error => {
      console.log('Error', error);
    });
  }

  ngOnDestroy(): void {
    console.log('Se ejecuta de cuarto tan pronto se llama una nueva vista.');
  }
}
