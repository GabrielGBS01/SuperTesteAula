public class AULA14 {
    // Programa para converter a forma de entrada de números reais
    public static void main(String entrada[]) {
        // Variáveis
        int NumInt;
        double NumReal, soma;
        char caracter;

        // Entrada de dados
        NumInt = Integer.parseInt(entrada[0]);
        NumReal = Double.parseDouble(entrada[1]);
        caracter = entrada[2].charAt(0);

        // Processamento
        soma = NumInt + NumReal;

        // Saída de dados
        System.out.println(NumInt + " + " + NumReal + " = " + soma + " sinal " + caracter);
    }
}
