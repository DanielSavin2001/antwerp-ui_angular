import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { ProgressBarModule } from '@acpaas-ui/ngx-progress-bar';
import { UPLOAD_VALIDATION_MESSAGES } from './upload.conf';
import { ValidationMessages } from './types/upload.types';
import { UploadComponent } from './components/upload/upload.component';
import { UploadInputComponent } from './components/upload-input/upload-input.component';
import { UploadQueueComponent } from './components/upload-queue/upload-queue.component';
import { UploadZoneComponent } from './components/upload-zone/upload-zone.component';
import { ValidationListComponent } from './components/validation-list/validation-list.component';
import { ValidationMessagesService } from './services/validation-messages.service';

@NgModule({
  imports: [CommonModule, ProgressBarModule, FormsModule, IconModule],
  declarations: [
    UploadComponent,
    UploadInputComponent,
    UploadQueueComponent,
    UploadZoneComponent,
    ValidationListComponent,
  ],
  exports: [UploadComponent, UploadInputComponent, UploadQueueComponent, UploadZoneComponent, ValidationListComponent],
  providers: [ValidationMessagesService, { provide: UPLOAD_VALIDATION_MESSAGES, useValue: {} }],
})
export class UploadModule {
  static forChild(validationMessages: ValidationMessages = {}): ModuleWithProviders<UploadModule> {
    return {
      ngModule: UploadModule,
      providers: [{ provide: UPLOAD_VALIDATION_MESSAGES, useValue: validationMessages }],
    };
  }
}
