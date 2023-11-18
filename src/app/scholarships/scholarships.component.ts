import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.setupClickHandlers();
  }

  private setupClickHandlers() {
    this.el.nativeElement.querySelector('#next').addEventListener('click', () => {
      let lists = this.el.nativeElement.querySelectorAll('.item');
      this.el.nativeElement.querySelector('#slide').appendChild(lists[0]);
    });

    this.el.nativeElement.querySelector('#prev').addEventListener('click', () => {
      let lists = this.el.nativeElement.querySelectorAll('.item');
      this.el.nativeElement.querySelector('#slide').prepend(lists[lists.length - 1]);
    });
  }

}
