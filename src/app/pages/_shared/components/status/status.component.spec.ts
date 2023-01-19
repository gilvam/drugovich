import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import { SubHeaderModule } from '../sub-header/sub-header.module';
import { HeaderModule } from '../../../../core/components/header/header.module';
import { StatusTypeDirective } from './_shared/directives/status-type.directive';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusComponent, StatusTypeDirective],
      imports: [SubHeaderModule, HeaderModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
