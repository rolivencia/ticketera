import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketRedeemComponent } from './ticket-redeem.component';

describe('TicketRedeemComponent', () => {
  let component: TicketRedeemComponent;
  let fixture: ComponentFixture<TicketRedeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketRedeemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
