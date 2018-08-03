import { Directive, Input, TemplateRef, ViewContainerRef, ComponentFactoryResolver, OnInit, ComponentRef } from '@angular/core';
import { WrapperComponent } from './wrapper/wrapper.component';

@Directive({
  selector: '[appWrapper]'
})
export class WrapperDirective implements OnInit {

  title: string;
  visible: boolean;

  @Input() set appWrapper(value: string) {
    this.title = value;
  };

  @Input() set appWrapperVisible(value: boolean) {
    this.visible = value;
  }

  WrapperContainer: ComponentRef<WrapperComponent>;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    let containerFactory = this._componentFactoryResolver.resolveComponentFactory(WrapperComponent);

    this.WrapperContainer = this._viewContainer.createComponent(containerFactory);
    this.WrapperContainer.instance.title = this.title;
    this.WrapperContainer.instance.visible = this.visible;
    this.WrapperContainer.instance.template = this._templateRef;
  }

}
