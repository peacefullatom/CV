import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, EmbeddedViewRef } from '@angular/core';
import { PrintableComponent } from '../printable/printable.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  @ViewChild('printable', { read: TemplateRef }) template: TemplateRef<any>;
  @ViewChild('printable', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(public service: CommonService) { }

  ngOnInit() { }

  getYear = () => {
    const date = new Date();
    return date.getFullYear();
  }

  print = () => {
    // 210mm == 991px
    const width = Math.min(window.outerWidth, 991);
    // 297mm == 1401px
    const height = Math.min(window.outerHeight, 1401);
    let view: EmbeddedViewRef<PrintableComponent>;
    let myWindow = window.open("", "", "left=0,top=0,width=" + width + ",height=" + height);

    try {
      view = this.container.createEmbeddedView<PrintableComponent>(
        this.template,
        new PrintableComponent(this.service)
      );

      myWindow.document.head.innerHTML = document.head.innerHTML;
      // doesn't work in edge
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/18418844/
      myWindow.document.body.appendChild(view.rootNodes[0]);

      setTimeout(() => { myWindow.print() }, 5e2);
    }
    catch (e) {
      view.destroy();
      myWindow.close();
      console.error(e);
      console.log("doesn't work in edge");
      console.log("https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/18418844/");
    }

  }

}
