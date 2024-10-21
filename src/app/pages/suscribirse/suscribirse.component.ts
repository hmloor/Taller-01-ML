import { Component } from '@angular/core';

@Component({
  selector: 'app-suscribirse',
  standalone: true,
  imports: [],
  templateUrl: './suscribirse.component.html',
  styleUrl: './suscribirse.component.css'
})
export class SuscribirseComponent {

}

/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suscribirse',
  templateUrl: './suscribirse.component.html',
  styleUrls: ['./suscribirse.component.css']
})
export class SuscribirseComponent implements OnInit {
  suscribirse: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.suscribirseForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.suscribirseForm.valid) {
      console.log('Formulario enviado', this.suscribirseForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
*/
