import {
  Component,
  ComponentRef,
  signal,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [],
  template: '',
})
export class CategoryAddComponent {
  private componentRef?: ComponentRef<any>;
  private componentRef2?: ComponentRef<any>;

  private _nameChange?: Subscription;
  constructor(private viewContainer: ViewContainerRef) {}

  async ngOnInit() {
    const module2 = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './PocComponent',
    });
    // const module = await loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //   exposedModule: './CategoryAdd',
    // });
    console.log('module => ', module2);

    // console.log('module2 =>', module2);
    this.componentRef = this.viewContainer.createComponent(module2.PocComponent);
    // this.componentRef2 = this.viewContainer.createComponent(
    //   module.CategoryAddComponent,
    // );
    console.log('componentRef =>', this.componentRef);
    console.log('componentRef2 =>', this.componentRef2);
    // this.componentRef.instance.name = signal<string>('testtestest');

    // this._nameChange = this.componentRef.instance.nameChange.subscribe(
    //   (name: string) => {
    //     console.log('nameChange', name);
    //   },
    // );

    console.log('component Ref', this.componentRef);
  }

  ngOnDestroy() {
    this._nameChange?.unsubscribe();
    this.componentRef?.destroy();
  }
}
