import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Colors} from '../../../../../../models';

@Component({
  selector: 'email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.scss']
})
export class EmailSentComponent {

  @Input() colors: Colors;

  // TODO use real email from API
  @Input() email: string;

  constructor(
    private router: Router
  ) {}
  
}
