package cs472.amin.servlets;

import cs472.amin.models.ContactDetail;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(description = "ContactFormServlet", urlPatterns = { "/contact-form" })
public class ContactFormServlets extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("POST-Contact");
        System.out.println("Form-Email"+request.getParameter("email"));

        List<String> msg = new ArrayList<>();
        String email = request.getParameter("email");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String message = request.getParameter("message");

        if(email==null || email.trim().isEmpty()) msg.add("Email is missing");
        if(gender==null || gender.trim().isEmpty()) msg.add("Gender is missing");
        if(category==null || category.trim().isEmpty()) msg.add("Category is missing");
        if(message==null || message.trim().isEmpty()) msg.add("Message is missing");

        System.out.println(msg);
        if(!msg.isEmpty()) {
            request.setAttribute("msg", msg);
            request.getRequestDispatcher("/WEB-INF/jsp/pages/contact-form.jsp").forward(request, response);
        }else {
            response.sendRedirect("thank-you?email="+email+"&gender="+gender+"&category="+category+"&message="+message);
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("contactUsModel",new ContactDetail());
        request.getRequestDispatcher("/WEB-INF/jsp/pages/contact-form.jsp").forward(request, response);
    }
}
