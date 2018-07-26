import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WrapperDirective } from './wrapper.directive';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReadingsComponent } from './readings/readings.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClockComponent } from './gallery/clock/clock.component';
import { ClockCellComponent } from './gallery/clock/clock-cell/clock-cell.component';
import { TreeOfLifeComponent } from './gallery/tree-of-life/tree-of-life.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WrapperDirective,
    WrapperComponent,
    TechnicalSkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ReadingsComponent,
    GalleryComponent,
    ClockComponent,
    ClockCellComponent,
    TreeOfLifeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [WrapperComponent, WrapperDirective],
  entryComponents: [WrapperComponent]
})
export class AppModule { }
