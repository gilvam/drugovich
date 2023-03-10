import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNewComponent } from './client-new.component';
import { HeaderModule } from '../../../core/components/header/header.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ClientNewComponent', () => {
  let component: ClientNewComponent;
  let fixture: ComponentFixture<ClientNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientNewComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        HeaderModule,
        MatSnackBarModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
