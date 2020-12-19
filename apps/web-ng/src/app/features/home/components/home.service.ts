import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    /** 模态框的状态 */
    modalStatus: number = null;
    constructor() { }
}
