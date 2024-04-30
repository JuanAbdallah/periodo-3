package br.vianna.edu.acdemy.ViannaAcademy.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pessoa {
    private String nome, email, login, senha;

    private LocalDateTime dataUltimoAcesso;
}
