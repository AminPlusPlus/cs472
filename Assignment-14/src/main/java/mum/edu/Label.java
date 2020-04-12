package mum.edu;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Label extends SimpleTagSupport {

    String foreColor;
    String size;

    //This is called from JSP servlet to render custom tag
    public void doTag() throws JspException, IOException
    {
        JspWriter out = getJspContext().getOut();
        LocalDate dNow = LocalDate.now();
        String date = dNow.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"));
        if (foreColor != null)
            out.write(String.format("<span style='color:%s; font-size:%s;'>Current Date: %s</span>", foreColor, size, date));
        else
            out.write(String.format("<span>%s</span>", size));
    }
    //Need a setter for each attribute of custom tag
    public void setForeColor(String foreColor)
    {
        this.foreColor = foreColor;
    }
    public void setSize(String text)
    {
        this.size = text;
    }
}
