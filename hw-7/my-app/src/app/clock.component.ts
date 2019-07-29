import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-clock',
    template: `
        <h2 class="block-clock p-2 text-success  bg-dark">{{time | date: 'HH:mm:ss'}}</h2>
    `,
    styleUrls: ['./app.component.scss']
})

export class ClockComponent implements OnInit, OnDestroy{
    public time: Date = new Date();
    private interval: any;

    ngOnInit(): void {
        this.interval = setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }
}
