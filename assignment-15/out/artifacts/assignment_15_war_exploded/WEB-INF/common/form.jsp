
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<div class="container topForm ">
<h2>New Book Form</h2>
<p>Note: Form field marked with asterisk(*) are required</p>


    <form class="container">
    <div class="form-group">
        <label for="exampleFormControlInput1">*Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>


    <div class="row">
        <div class="col-sm">
            <div class="form-group" id="isbnla">
            <label for="isbn">*ISBN</label>
            <input type="email" class="form-control" id="isbn" placeholder="" required>
            </div>
            <div class="form-group">
                <label for="publisher">*Publisher</label>
                <input type="text" class="form-control" id="publisher" placeholder="" required>
            </div>
        </div>
        <div class="col-sm">
            <div class="form-group" id="overduegroup">
                <label for="overdue">*Overdue</label>
                <input type="text" class="form-control" id="overdue" placeholder="0.00" required>
            </div>
            <div class="form-group">
                <label for="date">*Date Publish</label>
                <input type="date" class="form-control" id="date" placeholder="" required>
            </div>
        </div>

    </div>
    <div>
        <input type="reset" class="btn btn-warning">
        <input type="submit" class="btn btn-primary">
    </div>


</form>
</div>