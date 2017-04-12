import { Observable } from 'rxjs/observable';
import { ResponseData } from './responsedata.model';

export interface IHolaMundoService {
    SayHello(): Observable<ResponseData>;
}