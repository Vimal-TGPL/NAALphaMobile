import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GicsComponent } from './gics.component';

describe('GicsComponent', () => {
  let component: GicsComponent;
  let fixture: ComponentFixture<GicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GicsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
