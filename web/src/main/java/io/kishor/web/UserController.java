package io.kishor.web;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;




    @GetMapping("/{id}")
    public User GetUser(@PathVariable String id) {
        return userRepository.findById(id).orElse(null);
    }



    
    @PostMapping("/")

    public User postMethodName(@RequestBody User user){

        String id;
        
        List<User> getUsers = userRepository.findAll();
        
        if (!getUsers.isEmpty()) { 
            Long idFrom = Long.parseLong(getUsers.get(getUsers.size() -1).getId());
            idFrom++;
            id = String.valueOf(idFrom);
        }else {
            id = "1";
        }
       user.setRollno("R"+id);
      user.setId(id);
          


        return userRepository.save(user);
        
    }
    @PutMapping("/")
    public User PutMapping(@RequestBody User newUser) {
        User oldUser = userRepository.findById(newUser.getId()).orElse(null);
        oldUser.setName(newUser.getName());
        oldUser.setDob(newUser.getDob());
        oldUser.setCls(newUser.getCls());
        oldUser.setDiv(newUser.getDiv());
        oldUser.setGen(newUser.getGen());
        userRepository.save(oldUser);
        return oldUser;
        

    }
    
    @DeleteMapping("/{id}")
    public String DeleteUser(@PathVariable String id) {
        userRepository.deleteById(id);
        return id;
    }
    
    @GetMapping("/")
    public List<User> GetUsers()
     {
         Sort sort=Sort.by("Name").ascending();
        return userRepository.findAll(sort);
    }

}