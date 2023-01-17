import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter, Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Observable, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-infinite-scroll-container',
  templateUrl: './infinite-scroll-container.component.html',
  styleUrls: ['./infinite-scroll-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfiniteScrollContainerComponent implements OnInit, OnDestroy {

  @ViewChild('loaderRef', {static: true})
  set loaderRef(el: ElementRef) {
    this.spyList(el.nativeElement);
  }
  @Output() scrolled = new EventEmitter();
  @Input() throttleTime = 1000;
  @Input() pause$?: Observable<void>;

  private emitter = new EventEmitter();

  private listObserver?: IntersectionObserver;
  private subscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.emitter.pipe(
      throttleTime(this.throttleTime)
    ).subscribe(() => this.scrolled.emit());
  }

  private spyList(el: HTMLElement): void {
    this.listObserver = new IntersectionObserver(() => {
      this.emitter.emit();
    });
    this.listObserver.observe(el);
  }

  ngOnDestroy() {
    this.listObserver?.disconnect();
    this.subscription?.unsubscribe();
  }

}
