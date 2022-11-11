package com.sudaksha.testapp3.main;

public class StudentApp {

	public static void main(String[] args) {
		Student.branchName = "Hyderabad";
		
		Student s1;
		s1 = new Student();
		s1.setRollNumber(1321141);
		s1.setFullName("Kumar Garg");
		s1.setCourseJoined("Java");
		s1.setFee(20000);
		System.out.println("Roll no: " + s1.getRollNumber());
		System.out.println("Full Name: " + s1.getFullName());
		System.out.println("Course: " + s1.getCourseJoined());
		System.out.println("Fee: " +  s1.getFee());
		System.out.println("Branch: " + Student.branchName);
		
		Student s2;
		s2 = new Student();
		s2.setRollNumber(1321142);
		s2.setFullName("Ramesh Krishna");
		s2.setCourseJoined("MS .NET");
		s2.setFee(25000);
		System.out.println("Roll no: " + s2.getRollNumber());
		System.out.println("Full Name: " + s2.getFullName());
		System.out.println("Course: " + s2.getCourseJoined());
		System.out.println("Fee: " +  s2.getFee());
		System.out.println("Branch: " + Student.branchName);
	}

}
