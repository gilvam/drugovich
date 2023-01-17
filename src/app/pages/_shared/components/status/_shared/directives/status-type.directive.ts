import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatusType]',
})
export class StatusTypeDirective implements OnInit {
  @Input('appStatusType') isActive = false;
  private colorActive = '#2ACC30';
  private colorInactive = '#EC2424';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setStyle();
  }

  get color(): string {
    return this.isActive ? this.colorActive : this.colorInactive;
  }

  private setStyle(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      this.color
    );
  }
}
