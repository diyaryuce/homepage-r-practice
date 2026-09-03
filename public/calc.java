import java.util.Scanner;

public class calc {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        while (true) {
            System.out.print("number: ");
            String input = in.nextLine();

            if (input.equals("done")) {
                break;
            }

            double num = Double.parseDouble(input);
            System.out.println(num / 16.0);
        }

        in.close();
    }
}