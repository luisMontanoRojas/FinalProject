import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarBrand } from '../models/CarBrand';
import { CarModel } from '../models/CarModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DealerShipService {

  brandsUrl: string = 'https://localhost:44345/api/carbrand';
  salesLimit = '?_limit=10';

  constructor(private http: HttpClient) { }
  //CarBrand
  getBrands(): Observable<CarBrand[]> {
    return this.http.get<CarBrand[]>(`${this.brandsUrl}`);
  }
  brandadd(carbrand: CarBrand): Observable<CarBrand> {
    return this.http.post<CarBrand>(this.brandsUrl, carbrand, httpOptions);
  }
  getBrand(id: string): Observable<CarBrand> {
    return this.http.get<CarBrand>(`${this.brandsUrl}/${id}`);
  }
  deleteBrand(carbrand: CarBrand) {
    const url = `${this.brandsUrl}/${carbrand.id}`;
    return this.http.delete<CarBrand>(url, httpOptions);
  }
  toggleCompleted(carbrand:CarBrand):Observable<any>{
    const url=`${this.brandsUrl}/${carbrand.id}`;
    return this.http.put(url,carbrand,httpOptions);
  }
  //CarModel
  getModelsSales(id:string):Observable<CarModel[]> {
    return this.http.get<CarModel[]>(`${this.brandsUrl}/${id}/carmodels/sales/${this.salesLimit}`);
  }
  getModels(id:string): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(`${this.brandsUrl}/${id}/carmodels`);
  }
  modeladd(id: string, carmodel: CarModel): Observable<CarModel> {
    const url = `${this.brandsUrl}/${id}/carmodels`;
    return this.http.post<CarModel>(url, carmodel, httpOptions);
  }
  getModel(id: string, idM: string): Observable<CarModel> {
    return this.http.get<CarModel>(`${this.brandsUrl}/${id}/carmodels/${idM}`);
  }
  deleteModel(id: string, carmodel: CarModel) {
    const url = `${this.brandsUrl}/${id}/carmodels/${carmodel.id}`;
    return this.http.delete<CarModel>(url, httpOptions);
  }
  toggleCompletedModel(id: string, carmodel: CarModel):Observable<any>{
    const url=`${this.brandsUrl}/${id}/carmodels/${carmodel.id}`;
    return this.http.put(url,carmodel,httpOptions);
  }
}