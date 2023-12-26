import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    UsersModule,
    OrderDetailsModule,
    CategoriesModule,
    AuthModule,
  ],
})
export class AppModule {}
