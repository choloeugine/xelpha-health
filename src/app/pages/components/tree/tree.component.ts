import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'ngx-tree',
  templateUrl: './tree.component.html',
})
export class TreeComponent {

  tree: TreeModel = {
    value: 'The capital of Kenya, Nairobi, derives its name from the Masai phrase Enkare Nyrobi, which translates to ‘cold water’, but is more popularly known as the ‘Green City in the Sun’. It is fast making a name for itself as the gateway to East Africa, due to the number of global travellers arriving at Jomo Kenyatta International Airport and is also home to many multinational conglomerates and business institutions.Simultaneously, the city houses modern shopping malls, lush green suburbs and parks, golf courses and a race track, making it the perfect place to mix business with pleasure ...',
    
  };

}
