import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreated_at: Date;
  @Input() postLoveIts: number = 0;


  ngOnInit() {
  }

  onPlus(){
    this.postLoveIts++;
  }
  onMinus(){
    this.postLoveIts--;
  }

  getColor(){
    if(this.postLoveIts > 0){
      return 'yellowgreen';
    }
    else if(this.postLoveIts < 0){
      return 'red';
    }
  }
}
