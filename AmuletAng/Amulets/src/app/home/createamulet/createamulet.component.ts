import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { TbAmuletService } from '../../service/tb-amulet.service';

@Component({
  selector: 'app-createamulet',
  templateUrl: './createamulet.component.html',
  styleUrls: ['./createamulet.component.css']
})
export class CreateamuletComponent implements OnInit {

  errorMsg: string;
  form: FormGroup;
  generation: any;
  items: any;
  errMsg: string;

  constructor(private builder: FormBuilder,
    private router: Router,
    private AmuletSV: TbAmuletService,
    private activateRouter: ActivatedRoute,) {this.initialCreateFormData();}

  ngOnInit() {
   
  }
  private initialCreateFormData() {
    this.form = this.builder.group({
      idB:[0],
      generation: new FormControl('',Validators.required),
      year: new FormControl('',Validators.required),
      place: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
    });
}
onSubmit() {

  console.log(this.form.value);
    this.AmuletSV
      .createAmu(this.form.value)
      .then(res => {
        this.router.navigate(['/', 'home']);
      })
      .catch(err => this.errorMsg = err);

  }
}

