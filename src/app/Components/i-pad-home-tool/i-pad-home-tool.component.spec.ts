import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IPadHomeToolComponent } from './i-pad-home-tool.component';

describe('IPadHomeToolComponent', () => {
  let component: IPadHomeToolComponent;
  let fixture: ComponentFixture<IPadHomeToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPadHomeToolComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IPadHomeToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
