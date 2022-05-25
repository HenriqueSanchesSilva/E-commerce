import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Book } from './model/book';

@Injectable()

export class BookService{
  private url = 'https://localhost:44382/api/bookstore';

  constructor(){}
}