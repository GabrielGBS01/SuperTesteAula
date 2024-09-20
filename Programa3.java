import javax.swing.*;
public class Programa3 {
    public static void main(String entrada[] ) 
    {
        //Declaração de variaveis
        int n1, n2, div;
        double pot;
        String msg = "";
        //Entrada de dados
        n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite  um numero inteiro"));
        n2 = Integer.parseInt(JOptionPane.showInputDialog("Digite  outro numero inteiro"));
        //Processamento 
        div = (int)n1 / (int)n2;
        pot = Math.pow(n1, n2);
        //saida de dados;
        msg = msg + "O coeficiente da divisão de " + n1 + " por " + n2 + " = " + div + "\n";
        msg = msg + "O valor da potência de  " + n1 + " por " + n2 + " = " + pot + "\n";
        JOptionPane.showInputDialog(null, msg);

        System.exit(0);
        
    }

}
