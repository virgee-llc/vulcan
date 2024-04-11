import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SVButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: SVButtonComponent;
  let fixture: ComponentFixture<SVButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SVButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SVButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prevent default event and stop propagation if component is disabled', () => {
    // Arrange
    component.disabled = true;
    const event = new MouseEvent('click', {
      cancelable: true,
    });

    // Act
    component.onClick(event);

    // Assert
    expect(event.defaultPrevented).toBeTruthy();
  });

  it('should not prevent default event and stop propagation if component is not disabled', () => {
    // Arrange
    component.disabled = false;
    const event = new MouseEvent('click', {
      cancelable: true,
    });

    // Act
    component.onClick(event);

    // Assert
    expect(event.defaultPrevented).toBeFalsy();
  });
});
