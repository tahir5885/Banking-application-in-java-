import java.util.Scanner;

public class BankingApplication {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("Shaban", "12113671");
        account.showMenu();
    }
}

class BankAccount {
    int balance;
    int previousTransaction;
    String customerName;
    String customerId;

    BankAccount(String name, String id) {
        customerName = name;
        customerId = id;
    }

    void deposit(int amount) {
        if (amount != 0) {
            balance += amount;
            previousTransaction = amount;
        }
    }

    void withdraw(int amount) {
        if (amount != 0) {
            balance -= amount;
            previousTransaction = -amount;
        }
    }

    void displayPreviousTransaction() {
        if (previousTransaction > 0) {
            System.out.println("Deposited: " + previousTransaction);
        } else if (previousTransaction < 0) {
            System.out.println("Withdrawn: " + Math.abs(previousTransaction));
        } else {
            System.out.println("No transaction occurred");
        }
    }

    void showMenu() {
        char option = '\0';
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome " + customerName);
        System.out.println("Your ID is " + customerId);
        System.out.println();

        do {
            System.out.println("************************************************************");
            System.out.println("Enter an option");
            System.out.println("************************************************************");
            System.out.println("A. Check Balance");
            System.out.println("B. Deposit");
            System.out.println("C. Withdraw");
            System.out.println("D. Previous Transaction");
            System.out.println("E. Exit");
            System.out.println("************************************************************");
            option = scanner.next().charAt(0);
            System.out.println();

            switch (option) {
                case 'A':
                    System.out.println("------------------------------------------------------------");
                    System.out.println("Balance = " + balance);
                    System.out.println("------------------------------------------------------------");
                    System.out.println();
                    break;

                case 'B':
                    System.out.println("------------------------------------------------------------");
                    System.out.println("Enter an amount to deposit:");
                    System.out.println("------------------------------------------------------------");
                    int depositAmount = scanner.nextInt();
                    deposit(depositAmount);
                    System.out.println();
                    break;

                case 'C':
                    System.out.println("------------------------------------------------------------");
                    System.out.println("Enter an amount to withdraw:");
                    System.out.println("------------------------------------------------------------");
                    int withdrawAmount = scanner.nextInt();
                    withdraw(withdrawAmount);
                    System.out.println();
                    break;

                case 'D':
                    System.out.println("------------------------------------------------------------");
                    displayPreviousTransaction();
                    System.out.println("------------------------------------------------------------");
                    System.out.println();
                    break;

                case 'E':
                    System.out.println("*************************************************************");
                    break;

                default:
                    System.out.println("Invalid Option!!....Please enter again");
                    break;
            }
        } while (option != 'E');

        System.out.println("Thank you for using our services!");
    }
}
