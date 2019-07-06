import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
    .subscribe( parametros => {
      // console.log(parametros['id']);
      this.productoService.getProducto(parametros['id'])
      .subscribe( (producto: ProductoDescripcion) => {
        this.id = parametros['id'];
        this.producto = producto;
      });

    });

  }


}
