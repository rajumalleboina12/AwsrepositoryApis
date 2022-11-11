package com.sudaksha.testapp3.main;

public class Student {
	long rollNumber;
	String fullName;
	String courseJoined;
	double fee;
	public long getRollNumber() {
		return rollNumber;
	}
	public void setRollNumber(long rollNumber) {
		this.rollNumber = rollNumber;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getCourseJoined() {
		return courseJoined;
	}
	public void setCourseJoined(String courseJoined) {
		this.courseJoined = courseJoined;
	}
	public double getFee() {
		return fee;
	}
	public void setFee(double fee) {
		this.fee = fee;
	}
	static String branchName;
}
