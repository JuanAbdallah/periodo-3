package br.vianna.edu.acdemy.ViannaAcademy.model;

import br.vianna.edu.acdemy.ViannaAcademy.model.escola.Disciplina;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import br.vianna.edu.acdemy.ViannaAcademy.model.enm.EEspecializacao;

import java.util.ArrayList;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Professor extends Pessoa{

    private EEspecializacao especializacao;

    private double valorHoraAula;

    private Date dataContratacao;

    private ArrayList<Disciplina> disciplinas;
}
