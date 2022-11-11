package com.sudaksha.testapp3.main;

public class CarApp {

	public static void main(String[] args) {
		Car myCar;
		myCar = new Car();
		
		myCar.start();
		myCar.showStatus();
		myCar.raise();
		myCar.raise();
		myCar.showStatus();
		myCar.slow();
		myCar.showStatus();
	}

}