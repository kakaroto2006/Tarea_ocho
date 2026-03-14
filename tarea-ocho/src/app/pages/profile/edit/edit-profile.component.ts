
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html'
})
export class EditProfileComponent {

  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    telefono: [''],
    email: ['', [Validators.required, Validators.email]],
    identidad: [''],
    nacimiento: ['']
  });

  get nombres(){ return this.profileForm.get('nombres'); }
  get apellidos(){ return this.profileForm.get('apellidos'); }

  guardar(){
    if(this.profileForm.valid){
      console.log(this.profileForm.value);
      alert("Perfil actualizado");
    }
  }
}
