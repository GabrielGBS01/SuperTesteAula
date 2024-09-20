import javax.swing.JOptionPane;

public class ProgramaProjeto15{
    public static void main(String[] args) {
        // Declaração das variáveis
        int num1, num2;
        double quociente, potencia;

        // Solicita ao usuário que insira dois números inteiros
        String input1 = JOptionPane.showInputDialog("Digite o primeiro número inteiro:");
        String input2 = JOptionPane.showInputDialog("Digite o segundo número inteiro:");

        // Converte os inputs do usuário para inteiros
        num1 = Integer.parseInt(input1);
        num2 = Integer.parseInt(input2);

        // Calcula o quociente da divisão dos números
        quociente = (double) num1 / num2;

        // Calcula a potência do primeiro número pelo segundo número
        potencia = Math.pow(num1, num2);

        // Exibe as informações para o usuário
        JOptionPane.showMessageDialog(null, "Quociente da divisão: " + quociente +
                                        "\nPotência: " + potencia);
    }
}
