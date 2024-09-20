public class Programa2 {
    public static void main(String entrada[] ) 
    {
        int n1, n2;
        int mod, div;
        double raiz, pot;
        String msg = "";

        //entrada de dados
        n1 =Integer.parseInt(entrada [0]);
        n2 =Integer.parseInt(entrada [1]);

        //Processamento
        mod = n1 % n2;
        div = (int)n1 / (int)n2;
        raiz = Math.sqrt(n1);
        pot = Math.pow(n1, n2);
        //Saida de dados
        msg = "n1 = " + n1 + " n2 = " + n2 + "\n ";
        msg = msg + "o resto  da divisao de n1 por n2 é = " + mod + "\n";
        msg = msg + "o quoeficiente da divisao de n1 por n2 é = " + div + "\n";
        msg = msg + "a raiz de n1 por n2 é = " + raiz + "\n";
        msg = msg + "potencia de n1 por n2 é = " + pot + "\n";
        System.out.println(msg);
        System.exit(0);
    }
}