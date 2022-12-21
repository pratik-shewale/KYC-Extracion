import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { ExtractionComponent } from './components/extraction/extraction.component';
import { KycComponent } from './kyc.component';

@NgModule({
  declarations: [
    UploadfileComponent,
    ExtractionComponent,
    KycComponent
  ],
  imports: [CommonModule],
})
export class KycModule {}
