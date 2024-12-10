import { AlertDialogComponent } from './alert-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AlertDialogComponent', () => {
    let component: AlertDialogComponent;
    let fixture: ComponentFixture<AlertDialogComponent>;

    const mockData = {
        title: 'Confirmation',
        message: 'are you sure about this?',
        cancel: 'Cancel',
        delete: 'Eliminate',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [AlertDialogComponent, BrowserAnimationsModule],
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: mockData },
            { provide: MatDialogRef, useValue: {} },
        ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display the data provided in the template', () => {
        const titleElement = fixture.debugElement.nativeElement.querySelector('h1');
        const messageElement = fixture.debugElement.nativeElement.querySelector('div[mat-dialog-content]');

        expect(titleElement.textContent).toBe(mockData.title);
        expect(messageElement.textContent).toBe(mockData.message);
    });
});