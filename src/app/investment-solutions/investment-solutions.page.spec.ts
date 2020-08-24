import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvestmentSolutionsPage } from './investment-solutions.page';

describe('InvestmentSolutionsPage', () => {
  let component: InvestmentSolutionsPage;
  let fixture: ComponentFixture<InvestmentSolutionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentSolutionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentSolutionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
