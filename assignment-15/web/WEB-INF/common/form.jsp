
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<div class="container topForm ">
<h2>New Book Form</h2>
<p>Note: Form field marked with asterisk(*) are required</p>


    <form onsubmit="bookPostService()"  class="container">
    <div class="form-group">
        <label for="title">*Title</label>
        <input type="text" name="title" class="form-control" id="title" placeholder="">
    </div>


    <div class="row">
        <div class="col-sm">
            <div class="form-group" id="isbnla">
            <label for="isbn">*ISBN</label>
            <input type="text" name="text" class="form-control" id="isbn" placeholder="" required>
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
                <label for="datePublish">*Date Publish</label>
                <input type="date" class="form-control" id="datePublish" placeholder="" required>
            </div>
        </div>

    </div>
    <div>
        <input type="reset" class="btn btn-warning">
        <input type="submit" class="btn btn-primary">
    </div>
</form>
</div>

<script>

     function bookPostService() {
         console.log("Book Service")
        let bookData = {
            title: getValue('title'),
            isbn:  getValue('isbn'),
            publisher: getValue('publisher'),
            overdueFee:getValue('overdue'),
            datePublished:getValue('datePublish')
        }

        fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/add',{
            method:'POST',
            body:JSON.stringify(bookData),
            headers:{'Content-Type':'application/json'}
        }).then(resp => {
            alert('Saved new book successfully!');
            return resp.json();
        }).then(data=>{
            alert('Saved new book successfully!');
            console.log(data)
        })

        function getValue(id) {
            return document.getElementById(id).value;
        }
    }


</script>