import { StatusTypeDirective } from './status-type.directive';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

@Component({ template: `<i [appStatusType]="true"></i>` })
class TestComponent {}

describe('StatusTypeDirective', () => {
  let directive: StatusTypeDirective;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, StatusTypeDirective],
      providers: [
        StatusTypeDirective,
        { provide: ElementRef, useClass: MockElementRef },
        {
          provide: Renderer2,
          useValue: {
            setStyle: () => {},
          },
        },
      ],
      imports: [],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directive = TestBed.inject(StatusTypeDirective);
    element = fixture.debugElement.queryAll(By.directive(StatusTypeDirective));
  });

  it('deve chamar o método setStyle', () => {
    // arrange
    const spy = spyOn(directive as any, 'setStyle');
    // act
    directive.ngOnInit();
    // assert
    expect(spy).toHaveBeenCalled();
  });

  it('deve chamar o método setStyle do renderer', () => {
    // arrange
    const spy = spyOn((directive as any).renderer, 'setStyle');
    // act
    (directive as any).setStyle();
    // assert
    expect(spy).toHaveBeenCalledWith(Object({}), 'background', directive.color);
  });
});
