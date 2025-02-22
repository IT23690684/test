import java.util.Scanner;

public class Marks {
   
    
    private static int[][] marks = new int[100][3]; // Assume a maximum of 100 students for simplicity

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            
            System.out.println("Menu:");
            System.out.println("1. Add student marks");
            System.out.println("2. Update student marks");
            System.out.println("3. Get average marks for a student");
            System.out.println("4. Get average marks for a subject");
            System.out.println("5. Get total marks for a student");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            String choice = scanner.nextLine();
           
            switch (choice) {

                case "1":
                    System.out.print("Enter St ID to add marks: ");
                    int studentIdAdd = Integer.parseInt(scanner.nextLine());

                    System.out.println("Enter marks for 3 subjects (Mathematics, Chemistry, Physics): ");

                    for (int i = 0; i < 3; i++) {
                        marks[studentIdAdd - 1][i] = Integer.parseInt(scanner.nextLine());
                    }
                    
                    System.out.println("Marks added for student " + studentIdAdd);
                    break;
               
                case "2":
                    System.out.print("Enter St ID to update: ");
                    int studentIdUpdate = Integer.parseInt(scanner.nextLine());

                    System.out.print("Enter Sub ID to update (1 = Math, 2 = Chemistry, 3 = Physics): ");
                    int subjectId = Integer.parseInt(scanner.nextLine());

                    System.out.print("Enter new mark: ");
                    int newMark = Integer.parseInt(scanner.nextLine());

                    marks[studentIdUpdate - 1][subjectId - 1] = newMark;
                    System.out.println("Student " + studentIdUpdate + "'s marks for subject " + subjectId + " were updated to " + newMark);
                    break;
               
                case "3":
                    System.out.print("Enter St ID to get average: ");

                    int studentIdAvg = Integer.parseInt(scanner.nextLine());
                    double average = calculateAverage(studentIdAvg - 1);

                    System.out.println("Student " + studentIdAvg + " has an average of " + average);

                    break;

                case "4":
                    System.out.print("Enter St ID to get average: ");
                    int studentIdAvgSubject = Integer.parseInt(scanner.nextLine());

                    double subjectAvg = calculateSubjectAverage(studentIdAvgSubject - 1);

                    System.out.println("Student " + studentIdAvgSubject + " has an average of " + subjectAvg);

                    break;
                   
                case "5":
                    System.out.print("Enter St ID to get total: ");

                    int studentIdTotal = Integer.parseInt(scanner.nextLine());
                    int total = calculateTotal(studentIdTotal - 1);

                    System.out.println("Student " + studentIdTotal + " has a total mark of " + total);
                    
                    break;

                case "6":
                    System.out.println("Exiting the program.");

                    scanner.close();
                    return;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    
    public static double calculateAverage(int studentId) {
        int sum = 0;
        for (int i = 0; i < 3; i++) {
            sum += marks[studentId][i];
        }
        return sum / 3.0;
    }

 
    public static double calculateSubjectAverage(int studentId) {
        return (marks[studentId][0] + marks[studentId][1] + marks[studentId][2]) / 3.0;
    }
   
    public static int calculateTotal(int studentId) {
        return marks[studentId][0] + marks[studentId][1] + marks[studentId][2];
    }
}