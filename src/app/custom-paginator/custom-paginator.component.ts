import { Component, Injectable, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class CustomPaginatorComponent extends MatPaginatorIntl {
  nextPageLabel = ' Próxima página';
  previousPageLabel = ' Voltar página';
  itemsPerPageLabel = 'Items por página';
}
