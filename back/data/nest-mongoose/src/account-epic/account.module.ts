import { Module } from '@nestjs/common';
import { AccountModel, AccountModelSchema } from './account.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

	imports: [
		MongooseModule.forFeature([{ name: AccountModel.name, schema: AccountModelSchema }]),
	]
})
export class AccountModule {}