import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService{

     signUp(email: string, password: string){
         firebase.auth().createUserWithEmailAndPassword(email, password)
         .catch(
             error => console.log(error.message)
         )
     }

     signIn(email: string, password: string){
         firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                response => console.log(response)
            )
            .catch(
                error => console.log(error.message)
                
            )
     }
}