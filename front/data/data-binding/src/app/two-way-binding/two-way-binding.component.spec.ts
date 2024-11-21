import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { TwoWayBindingComponent } from "./two-way-binding.component";
import { SizerComponent } from "./sizer/sizer.component";
import { fireEvent, render, screen } from '@testing-library/angular';
import { By } from "@angular/platform-browser";

describe("TwoWayBindingComponent", () => {
  
  
	beforeEach(async() => {
		await render(TwoWayBindingComponent, {
			componentProperties: {
				fontSizePx: 16
			}
		});
  });

	it("the font size should be two-way binded", () => {
		const sizersResizableParagraph = screen.getByText("FontSize: 16px");
		const decrementFontSizeButton = screen.getByRole("button", {name: "+"});
		const incrementFontSizeButton = screen.getByRole("button", {name: "-"});
		
		expect(sizerComp.size)
		.withContext("initial sizerComp's size compared to twoWayBindingComp's one")
		.toBe(twoWayBindingComp.fontSizePx);
		btnDecrement.click();
		expect(twoWayBindingComp.fontSizePx)
		.withContext("expected twoWayBindingComp's fontSizePx after sizerComp's dec()")
		.toBe(Number(sizerComp.size));
		btnIncrement.click();
		expect(twoWayBindingComp.fontSizePx)
		.withContext("expected twoWayBindingComp's fontSizePx after sizerComp's inc()")
		.toBe(Number(sizerComp.size));
	});
});