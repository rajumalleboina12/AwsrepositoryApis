package com.sudaksha.testapp3.other;

public class Engine {
	int valves;
	int state;
	public int getValves() {
		return valves;
	}
	public void setValves(int valves) {
		this.valves = valves;
	}
	public void start() {
		state = 1;
		System.out.println("Started");
	}
	public void stop() {
		state = 0;
		System.out.println("Stopped");
	}
}
