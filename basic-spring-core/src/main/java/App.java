import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main( String[] args){
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");//use XML
        Vehicle my_vehicle = (Vehicle) context.getBean("vehicle");//ask for vehicle
        my_vehicle.drive();
    }
}
