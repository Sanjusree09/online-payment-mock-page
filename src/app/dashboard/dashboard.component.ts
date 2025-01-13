import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MockComponent} from '../mockComponent/mock-component.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, MockComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  logoUrl: string = '';
  backgroundColor: string = '#000435';
  brandColor: string = '#f1f1f1';
  accentColor: string = '#007bff';
  fontType: string = 'Arial, sans-serif';

  onLogoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.logoUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Handle color updates
  updateBgColor(color: string): void {
    this.backgroundColor = color;
  }

  updateBrandColor(color: string): void {
    this.brandColor = color;
  }

  updateAccentColor(color: string): void {
    this.accentColor = color;
  }

  updateFontType(font: string): void {
    this.fontType = font;
  }

}




















