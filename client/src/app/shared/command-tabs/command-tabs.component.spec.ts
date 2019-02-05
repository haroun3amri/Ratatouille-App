import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandTabsComponent } from './command-tabs.component';

describe('CommandTabsComponent', () => {
  let component: CommandTabsComponent;
  let fixture: ComponentFixture<CommandTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
