package io.kishor.web;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import lombok.Data;


@Data

public class User{
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private String id;
    private String rollno;
    private String Name;
    private String dob;
    private String cls;
    private String div;
    private String gen;
    

   
       



}