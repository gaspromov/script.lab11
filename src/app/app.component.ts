import { Component } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Sensor } from './shared/models/sensor.model';
// import { Sensor } from './shared/models/sensor.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  sensors: Sensor[] = [];

  constructor(){
    for(let i = 1; i < 11; i++)
    this.sensors.push(new Sensor(i, `Датчик_${i}`));
  }

  onDeleteSensor(idx: number){
    this.sensors.splice(idx, 1);
  }

  addSensor(name, status){
    let k;
    if(this.sensors.length==0){
      k=1;
    }
    else{
      k = this.sensors[this.sensors.length - 1].id + 1;
    }
    this.sensors.push(new Sensor(k, name.value, status.checked, ));
  }
}