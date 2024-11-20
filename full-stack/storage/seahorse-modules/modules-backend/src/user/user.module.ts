import { Module } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';

@Module({})
export class UserModule {

	constructor(private lazyModuleLoader: LazyModuleLoader) {
		
	}
}
