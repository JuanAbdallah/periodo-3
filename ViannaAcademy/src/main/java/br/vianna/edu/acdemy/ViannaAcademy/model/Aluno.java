package br.vianna.edu.acdemy.ViannaAcademy.model;

import br.vianna.edu.acdemy.ViannaAcademy.model.escola.Matricula;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Aluno extends Pessoa{
    private String maticula;

    private double valorMensalidade;

    private ArrayList<Matricula> historico;
}
