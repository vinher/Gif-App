import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gift.interface';

//const API_KEY = 'KNwdShpKTj1wQ3UHbSFOxNSF4dLT3Z0g'


@Injectable({providedIn: 'root'})
export class GiftService {

    public gifList:Gif[]=[];
    private _tagHistory:string[] = [];

    private apiKey:string = 'KNwdShpKTj1wQ3UHbSFOxNSF4dLT3Z0g';
    private searchUrl:string = 'https://api.giphy.com/v1/gifs';
    constructor( private http:HttpClient ) { 
        this.localStoragesShow();
    }

    get tagsHistory(){
        return [...this._tagHistory];
    }

    private organizeHistory(tag: string){
        tag = tag.toLowerCase();

        if(this._tagHistory.includes(tag)){
            this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
        }
        this._tagHistory.unshift(tag);
        this._tagHistory = this.tagsHistory.splice(0,10);
        this.safeLocalStorage();

    }

    private safeLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagHistory));

    }
    private localStoragesShow(): void {
        if(!localStorage.getItem('history'))return;
       
       this._tagHistory = JSON.parse(localStorage.getItem('history')!);

       if( this._tagHistory.length === 0 ) return;
        this.searchTag(this._tagHistory[0]);
    }


        searchTag(tag:string):void{
        if(tag.length === 0) return;
        this.organizeHistory(tag);
        console.log(this._tagHistory);

        const params = new HttpParams()
        .set('api_key',this.apiKey)
        .set('limit','10')
        .set('q',tag)

        //Esto Es Un Observable
        this.http.get<SearchResponse>(`${this.searchUrl}/search`,{params})
        .subscribe( (resp) => {
            console.log(resp.data[0].images.fixed_height);
            this.gifList = resp.data;
            console.log({ gift: this.gifList});
        })



        //Angular trae las herramientas para hacer peticiones http 
        // fetch('https://api.giphy.com/v1/gifs/search?api_key=KNwdShpKTj1wQ3UHbSFOxNSF4dLT3Z0g&q=valorant&limit=10')
        // .then(resp => resp.json())
        // .then( data => console.log(data));
    }
    
}