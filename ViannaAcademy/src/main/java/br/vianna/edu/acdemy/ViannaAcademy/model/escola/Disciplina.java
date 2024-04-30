package br.vianna.edu.acdemy.ViannaAcademy.model.escola;

import br.vianna.edu.acdemy.ViannaAcademy.model.Professor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Disciplina {
    private int id;
    private String nome;
    private int cargaHoraria, ano, semestre;

    private Professor professor;
}
