import { Injectable } from '@angular/core';

const USER = "user";
const TOKEN= "token";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }
  static getUser(): any {
    const userJson = localStorage.getItem(USER);
    return userJson ? JSON.parse(userJson) : null;
  }
  static getUserId():string{
    const user =this.getUser();
    if(user == null){return '';}
    return user.id;
  }
  static getToken() {
    return window.localStorage.getItem(TOKEN);
  }

  static getUserRole(): string {
    const user =this.getUser();
    if (user == null) return"";
      return user.role;
    }
    
    
  static isAdminLoggedIn(): boolean {
    if(this.getToken()== null)return false;
    const role :string =this.getUserRole();
    return role=="ADMIN";

  }
  static isCustomerLoggedIn(): boolean {
    if(this.getToken()== null)return false;
    const role :string =this.getUserRole();
    return role=="CUSTOMER";

  }
  static logout():void {
    window.localStorage.removeItem(USER);
    window.localStorage.removeItem(TOKEN);
  }
    
  }



