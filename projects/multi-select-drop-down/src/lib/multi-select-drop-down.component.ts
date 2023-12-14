import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChange,
  ViewChild,
} from '@angular/core';

export interface Options {
  label: any;
  isActive?: boolean;
  name: any;
  checked?: any;
}

@Component({
  selector: 'lib-multi-select-drop-down',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./assets/multi-select-drop-down.scss'],
  styles: [],
})
export class MultiSelectDropDownComponent {
  public isDropDownOpen: boolean = false;
  public selectedList: any = [];
  public showSelectedList: boolean = false;
  public searchText: any = '';
  private wasInside = false;

  @ViewChild('flipAbleDivs') flipAbleDiv: any;

  @Input('options')
  options: any;
  @Input('placeholder') placeholder: any;
  @Input('multiselectWidth') multiselectWidth = 250;
  @Input() selectedValue: any;
  @ViewChild('multiSelectWrapper') multiSelectWrapper!: ElementRef;
  @Output() selectedItems = new EventEmitter<any>();
  showDeletePopup = false;

  ngOnInit() {}

  ngAfterViewInit() {
    this.multiSelectWrapper.nativeElement.style.width =
      this.multiselectWidth + 'px';
  }

  conf() {
    this.discardSelected();
    this.showDeletePopup = false;
  }
  declined() {
    this.showDeletePopup = false;
  }

  constructor(private eRef: ElementRef) {
    // console.log(this.opWindow);
    //window.addEventListener('resize', this.flipIfOverflow);
  }
  selectListValue(item: any) {
    item.checked = !item.checked;
    this.selectedList = this.options.filter((el: any) => el.checked);
    this.selectedItems.emit(this.selectedList);
    // this.searchText = '';
  }

  discardSelected() {
    this.resetOptions();
    this.isDropDownOpen = false;
    this.searchText = '';
  }

  discardBadge(item: any, index: number) {
    this.options[this.options.indexOf(item)].checked = false;
    item.checked = false;
    this.selectedList.splice(index, 1);
  }

  applySearch() {
    // this.isDropDownOpen = true;
  }

  //******* hostlistner for outside click of the component here */

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.isDropDownOpen = false;
      this.showSelectedList = false;
    }
    this.wasInside = false;
  }

  public changeData: any;
  ngOnChanges(changes: SimpleChange) {
    this.changeData = changes;
    if (this.changeData.selectedValue.currentValue == '') {
      this.resetOptions();
    }
  }

  resetOptions() {
    this.selectedList = [];
    this.options.forEach((el: any) => (el.checked = false));
  }

  confirmDelete(e: Event, op: any, hide?: string, target?: any) {
    if (hide === 'hide') {
      op.hide(e);
      return;
    }
    console.log(target);

    op.show(e, target);
  }

  isOverflowing() {
    console.log(this.flipAbleDiv.nativeElement);

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
      this.flipAbleDiv.nativeElement.style.transform = 'translate(180px)';
    } else {
      this.flipAbleDiv.nativeElement.style.transform = 'none';
    }
    console.log(this.isOverflowing());
  }
}
