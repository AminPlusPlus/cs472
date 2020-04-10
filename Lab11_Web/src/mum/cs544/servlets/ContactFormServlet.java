package mum.cs544.servlets;

import javax.servlet.http.HttpServlet;
import java.io.IOException;

public class ContactFormServlet extends HttpServlet {

    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("text/html");
        String output = this.generateContactForm(request,response);
    }
}
