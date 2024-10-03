import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPartidosComponent } from './tabla-partidos.component';

describe('TablaPartidosComponent', () => {
  let component: TablaPartidosComponent;
  let fixture: ComponentFixture<TablaPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaPartidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
