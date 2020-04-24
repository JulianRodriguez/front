import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../service/user.service';
import { UserServiceMock } from './user-service.mock';
import { LoginService } from '../service/login.service';
import { LoginServiceMock } from './login-service.mock';
import { SearchService } from '../service/search.service';
import { SearchServiceMock } from './search-service.mock';
import { RestaurantService } from '../service/restaurant.service';
import { RestaurantServiceMock } from './restaurant-service.mock';
import { ProductService } from '../service/product.service';
import { ProductServiceMock } from './product-service.mock';

export const TestSharedModule = {
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterTestingModule
  ],
  providers: [
    {
      provide: UserService,
      useClass: UserServiceMock
    },
    {
      provide: LoginService,
      useClass: LoginServiceMock
    },
    {
      provide: SearchService,
      useClass: SearchServiceMock
    },
    {
      provide: RestaurantService,
      useClass: RestaurantServiceMock
    },
    {
      provide: ProductService,
      useClass: ProductServiceMock
    }
  ]
};
