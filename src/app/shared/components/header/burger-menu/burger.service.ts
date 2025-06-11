import { Injectable, signal, Signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class BurgerMenuService{
  isShow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toInversion(){
    this.isShow.next(!this.isShow.getValue())
  }
}
