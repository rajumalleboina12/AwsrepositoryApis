package com.sudaksha.tetapp3.more;

public class Car implements Engine, GearBox {
	int gears;
	int state;
	@Override
	public void setGears(int gears) {
		this.gears = gears;
	}

	@Override
	public int getGears() {
		return this.gears;
	}

	@Override
	public void start() {
		this.state = 1;
		System.out.println("Started");
	}

	@Override
	public void stop() {
		this.state = 0;
		System.out.println("Stopped");		
	}

}
