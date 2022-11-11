package com.sudaksha.testapp3.other;

public class CarApplication {
	public static void main(String[] args) {
		Vehicle car1;
		car1 = new Car();
		car1.setModelName("Honda City");
		car1.setYearManufactured(2018);
		System.out.println(car1.getModelName());
		System.out.println(car1.getYearManufactured());
		
		Engine diselEngine = new Engine();
		diselEngine.setValves(4);
		
		Car car2;
		car2 = new Car();
		car2.setEngine(diselEngine);
		car2.setGearType("Auto");
		car2.setModelName("Jazz");
		car2.setNoOfSeats(5);
		car2.setYearManufactured(2020);
		
		System.out.println("Gears: " + car2.getGearType());
		System.out.println("Model: " + car2.getModelName());
		System.out.println("Year: " + car2.getYearManufactured());
		System.out.println("Seats: " +  car2.getNoOfSeats());
		car2.getEngine().start();
		car2.getEngine().stop();
	}
}
