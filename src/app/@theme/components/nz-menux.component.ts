import { Component, Input } from '@angular/core';

@Component({
  selector: 'nz-menux',
  templateUrl: './nz-menux.component.html',
})

export class NzMenuxComponent {
  @Input() public menus: object[];
  @Input() public mode: object[];


}
