import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { PostcategoryComponent } from './postcategory/postcategory.component';
import { PostComponent } from './post/post.component';
import { ShareModule } from '../share/share.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const mainRoute: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo:'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'postcategory',
        component: PostcategoryComponent,
      },
      {
        path: 'post',
        component: PostComponent,
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then((m) => m.OrderModule),
      }
    ]
  }
]


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    NgApexchartsModule,
    HttpClientModule,
    RouterModule.forChild(mainRoute),
    // NgbModule
  ]
})
export class MainModule { }
