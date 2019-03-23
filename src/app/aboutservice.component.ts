import{ Component, OnInit } from '@angular/core';
import { CoursesService } from  './courses.service';

@Component({
    selector: 'app-aboutservice',
    templateUrl:'.aboutservice.component.html',
    styleUrls: ['./aboutservice.component.css']

})
export class AboutserviceComponent implements OnInit {
    courses;
    constructor(service:CoursesService){
    
        this.courses = service.getcourses();
    }
    ngOnInit(){

    }
}