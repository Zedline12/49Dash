import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
})
export class ProgressCircleComponent {
  @Input() width: number = 120;
  @Input() height: number = 120;
  @Input() totalSteps: number = 5;
  @Input() currentStep: number = 0;
  @Input() size: number = 120;
  @Input() color!: string;
  radius = 45;
  circumference = 2 * Math.PI * this.radius;

  // Calculate the stroke-dashoffset for progress animation
  get strokeDashoffset(): number {
    if (this.currentStep >= this.totalSteps) {
      return 0; // Stop animation when full
    }
    return this.circumference * (1 - this.currentStep / this.totalSteps);
  }

  // Check if all steps are completed
  get isCompleted(): boolean {
    return this.currentStep >= this.totalSteps;
  }
}
