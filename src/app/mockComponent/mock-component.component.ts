import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mock-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './mock-component.component.html',
  styleUrl: './mock-component.component.css'
})
export class MockComponent {
@Input() backgroundColor: string = '#000435';
@Input() brandColor: string = '#f1f1f1';
@Input() accentColor:string = '#ffffff';
@Input() rectShape: string = '#f1f1f1';
@Input() buttonColor:string = '#007bff';
@Input() fontType:string = 'Arial, sans-seriff';
  
}
