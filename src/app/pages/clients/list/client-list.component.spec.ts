import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListComponent } from './client-list.component';
import { SubHeaderModule } from '../../_shared/components/sub-header/sub-header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusModule } from '../../_shared/components/status/status.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClientListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientListComponent],
      imports: [
        HttpClientTestingModule,
        SubHeaderModule,
        FontAwesomeModule,
        StatusModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
