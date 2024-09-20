import javax.swing.*;

public class Programa4 {
    public static void main(String entrada[]) {
        // Declaração de variáveis
        int num;
        char op;
        String msg = "", msgEntr = "Digite 1 para par/impar\nDigite 2 para positivo/negativo";
        // Entrada de dados
        num = Integer.parseInt(JOptionPane.showInputDialog("Digite um numero inteiro"));
        op = JOptionPane.showInputDialog(msgEntr).charAt(0);
        // Processamento
        switch (op) {
            case '1':
                if (num % 2 == 0) {
                    msg = msg + num + " é par.\n";
                } else {
                    msg = msg + num + " é ímpar.\n";
                }
                break;

            case '2':
                if (num > 0) {
                    msg = msg + num + " é positivo.\n";
                } else {
                    msg = msg + num + " é negativo.\n";
                }
                break;

            default:
                JOptionPane.showMessageDialog(null, "Opção inválida, cálculos não realizados");
                break;
        }
        JOptionPane.showMessageDialog(null, msg);
    }
}

