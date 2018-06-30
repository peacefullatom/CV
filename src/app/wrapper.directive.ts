import { Directive, Input, TemplateRef, ViewContainerRef, ComponentFactoryResolver, OnInit, ComponentRef } from '@angular/core';
import { WrapperComponent } from './wrapper/wrapper.component';

@Directive({
  selector: '[appWrapper]'
})
export class WrapperDirective implements OnInit {

  private _title: string;
  @Input() set appWrapper(value: string) {
    this._title = value;
  };

  private _folded: boolean;
  @Input() set appWrapperFolded(value: boolean) {
    this._folded = value;
  }

  private WrapperContainer: ComponentRef<WrapperComponent>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    const containerFactory = this.componentFactoryResolver.resolveComponentFactory(WrapperComponent);
    this.WrapperContainer = this.viewContainer.createComponent(containerFactory);
    this.WrapperContainer.instance.template = this.templateRef;
    this.WrapperContainer.instance.title = this._title;
    this.WrapperContainer.instance.folded = this._folded;
  }

}
