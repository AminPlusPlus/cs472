package cs472.amin.servlets;

import cs472.amin.models.ContactDetail;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet(description = "Thank-you-servlets", urlPatterns = { "/thank-you" })
public class ThankYouServlets extends HttpServlet {

        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        }

        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

            String pattern = "EEEEE, dd MMMM yyy";
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
            String dateVal = simpleDateFormat.format(new Date());
            request.setAttribute("dateVal", dateVal);

            request.getRequestDispatcher("/WEB-INF/jsp/pages/thank-you.jsp").forward(request, response);

        }


}
