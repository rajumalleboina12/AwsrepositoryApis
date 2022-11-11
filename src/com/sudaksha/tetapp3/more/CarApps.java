package com.sudaksha.tetapp3.more;

public class CarApps {

	public static void main(String[] args) {
		Car car1;
		car1 = new Car();
		car1.setGears(5);

		Engine carEngine = (Engine)car1;
		carEngine.start();

		GearBox carGearBox = (GearBox)car1;
		carGearBox.setGears(4);
		System.out.println("Gears: " + carGearBox.getGears());
	}

}
