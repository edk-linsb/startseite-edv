import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeDbComponent } from './knowledge-db.component';

describe('KnowledgeDbComponent', () => {
  let component: KnowledgeDbComponent;
  let fixture: ComponentFixture<KnowledgeDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
