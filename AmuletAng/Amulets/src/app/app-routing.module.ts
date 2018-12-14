import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { HomeComponent} from './home/home.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {CreateamuletComponent} from './home/createamulet/createamulet.component';
import { DetailComponent } from './home/detail/detail.component';
import { StoryComponent } from './story/story.component';

const routes : Routes = [
  { path: '',redirectTo:'/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'story', component: StoryComponent},
  { path: 'createamulet',component:CreateamuletComponent},
  { path:'detail/:id',component:DetailComponent}
];
  

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
