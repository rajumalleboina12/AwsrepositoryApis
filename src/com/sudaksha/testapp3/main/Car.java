package com.sudaksha.testapp3.main;

public class Car {
	int engineState;
	int gear;
	double speed;
	public void start() {
		engineState = 1;
		gear = 1;
		speed = 20;
	}
	public void raise() {
		if(gear<5) {
			gear++;
		}
		if(speed<=120) {
			speed += 20;
		}
	}
	public void slow() {
		if(gear>1) {
			gear--;
		}
		if(speed>=40) {
			speed -= 20;
		}
	}
	public void showStatus() {
		System.out.println("Engine: " + (engineState==0 ? "Off" : "On"));
		System.out.println("Gear: " + gear);
		System.out.println("Speed: " + speed);
	}
}
