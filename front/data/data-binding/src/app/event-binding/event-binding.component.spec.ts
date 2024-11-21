import { EventBindingComponent } from "./event-binding.component";
import { render, screen } from '@testing-library/angular';


describe("EventBindingComponent", () => {
  
  beforeEach(async() => {
		await render(EventBindingComponent, {
			
		})
  });

  it("clicking on the buttons should change the component's clickCount property in their way", () => {
		const auxClickCount = eventBindingComp.clickCount;
		const btnDecrement = fixture.nativeElement.querySelector("button[title='smaller']") as HTMLButtonElement;
		const btnIncrement = fixture.nativeElement.querySelector("button[title='bigger']") as HTMLButtonElement;
		btnDecrement.click();
		expect(eventBindingComp.clickCount)
		.withContext("unexpected clickCount at eventBindingComp after dec()")
		.toBeLessThan(auxClickCount);
		btnIncrement.click();
		expect(eventBindingComp.clickCount)
		.withContext("unexpected clickCount at eventBindingComp after inc()")
		.toBe(auxClickCount);
  });
});