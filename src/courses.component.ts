import { Component } from '@angular/core';
import { Directive } from '@angular/core';
@Component({
    selector: 'courses',
    template: `
                <h2>courses</h2>
                {{title}}
                <ul>
                    <li *ngFor="let item of courses; let i = index">{{i}} {{item}}</li>
                </ul>
              `,
})
export class CoursesComponent {
    title: string = "The title of courses page";
    courses = ["Course1", "Course2", "Course3" ];
}
