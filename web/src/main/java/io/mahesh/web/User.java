package io.mahesh.web;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User{
    @Id
    private String id;
    private String Name;
    private String dob;
    private String cls;
    private String div;
    private String gen;
    String sortField;
    String sortDirection;

   
       



}