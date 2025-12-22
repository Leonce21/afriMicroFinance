import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './apply.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .step-active { @apply bg-[#FF6B00] text-white border-[#FF6B00] shadow-lg shadow-orange-200; }
    .step-completed { @apply bg-green-600 text-white border-green-600; }
    .step-inactive { @apply bg-white text-gray-400 border-gray-200; }
    
    input:focus, select:focus {
      @apply ring-4 ring-[#FF6B00]/10 border-[#FF6B00];
    }
  `]
})
export class ApplyComponent {
  currentStep = signal(1);
  isSubmitting = signal(false);
  isSuccess = signal(false);
  
  applyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      personal: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }),
      business: this.fb.group({
        businessName: ['', Validators.required],
        type: ['', Validators.required],
        monthlyRevenue: ['', Validators.required],
        loanAmount: ['', Validators.required]
      }),
      documents: this.fb.group({
        idUploaded: [false, Validators.requiredTrue]
      })
    });
  }

  get personalGroup() { return this.applyForm.get('personal') as FormGroup; }
  get businessGroup() { return this.applyForm.get('business') as FormGroup; }
  get documentsGroup() { return this.applyForm.get('documents') as FormGroup; }

  nextStep() {
    if (this.currentStep() === 1 && this.personalGroup.valid) {
      this.currentStep.update(c => c + 1);
    } else if (this.currentStep() === 2 && this.businessGroup.valid) {
      this.currentStep.update(c => c + 1);
    } else {
      this.applyForm.markAllAsTouched();
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(c => c - 1);
    }
  }

  mockUpload() {
    this.documentsGroup.get('idUploaded')?.setValue(true);
  }

  submit() {
    if (this.documentsGroup.valid) {
      this.isSubmitting.set(true);
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
      }, 2000);
    }
  }
}