import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';



@NgModule({
	declarations: [
		BodyComponent
	],
	exports: [
		BodyComponent
	],
	imports: [
		CommonModule
	]
})
export class BodyModule { }
