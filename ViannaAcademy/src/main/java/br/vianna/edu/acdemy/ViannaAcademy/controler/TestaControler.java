package br.vianna.edu.acdemy.ViannaAcademy.controler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/testa")
public class TestaControler {
//    @GetMapping("/home")
//    public String chamaHome1(){
//        return "home";
//    }
    @GetMapping({"/home","/home/{id}"})
    public String chamaHome(@PathVariable(required = false) Integer id,
                            @RequestParam(required = false) String nome){
        System.out.println(id + " - " + nome);
        return "home";
    }
}
