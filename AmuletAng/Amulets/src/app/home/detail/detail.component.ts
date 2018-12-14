import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TbAmuletService } from '../../service/tb-amulet.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  errorMsg: string;
  form: FormGroup;
  amuletId: any;
 
  errMsg: string;
  Detail =[];

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private TbAmulet: TbAmuletService,
    private activatedRouter: ActivatedRoute
  ) {

    this.activatedRouter.params.forEach(
      params => {
        this.amuletId = params.id;
      
        console.log(this.amuletId);
      })

   }

  ngOnInit() {
    this.showProductDetail();
  }
  showProductDetail(){  
    this.amuletId.getOneProduct(this.amuletId)
    .subscribe(data=> this.Detail  = data,
     error => this.errMsg = error);
  }


}
