import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css','../../app.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private fb:FormBuilder,private filter:FilterService) { }

  filterData=this.fb.group({
    query:['']
  })

  ngOnInit(): void {
  }

  query(){
    if(this.filterData.value.query!==""){
      this.filter.applyFilter(this.filterData.value.query)
    }
  }

  clearQuery(){
    this.filterData.reset()
    this.filterData.value.query=""
    this.filter.clearFilter()
  }

}
