import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  @ViewChild('flipAbleDiv') flipAbleDiv: any;

  @Output() confirmation: EventEmitter<any> = new EventEmitter();
  @Output() decline: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitYes() {
    this.confirmation.emit();
  }
  emitNo() {
    this.decline.emit();
  }

  ngAfterViewInit() {
    this.flipIfOverflow();
  }

  isOverflowing() {
    const rect = this.flipAbleDiv.nativeElement.getBoundingClientRect();
    return (
      rect.left < 0 ||
      rect.right > window.innerWidth ||
      rect.top < 0 ||
      rect.bottom > window.innerHeight
    );
  }

  flipIfOverflow() {
    if (this.isOverflowing()) {
      this.flipAbleDiv.nativeElement.style.transform = 'translate(-380px)';
    } else {
      this.flipAbleDiv.nativeElement.style.transform = 'translate(-50px)';
      this.flipAbleDiv.nativeElement.classList.toggle('left-aligned-popover');
    }
    console.log(this.isOverflowing());
  }
}
