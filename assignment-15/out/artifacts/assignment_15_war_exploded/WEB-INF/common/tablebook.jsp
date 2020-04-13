
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<script type="text/javascript">

    $.ajax({url:'https://elibraryrestapi.herokuapp.com/elibrary/api/book/list',
        type:'GET',
        dataType:'json',
        success:(resp)=>{
            resp.forEach(item => {

                $(document).ready(()=>{
                    updateTable(item);
                    $("#loadingTop").hide();
                })

            })
        }})

   function updateTable (book) {
       let table = document.getElementById("book-table");
       let newRow = table.insertRow(-1);

       //id
       let idCell = newRow.insertCell(0);
       let idText = document.createTextNode(book['bookId']);

       //isbn
       let isbnCell = newRow.insertCell(1);
       let isbnText = document.createTextNode(book['isbn']);

       //title
       let titleCell = newRow.insertCell(2);
       let titleText = document.createTextNode(book['title']);

       //overdue
       let overdueCell = newRow.insertCell(3);
       let overdueText = document.createTextNode(book['overdueFee']);

       //publisher
       let publishCell = newRow.insertCell(4);
       let publishText = document.createTextNode(book['publisher']);

       //date
       let dateCell = newRow.insertCell(5);
       let dateText = document.createTextNode(book['publisher']);


       idCell.appendChild(idText);
       isbnCell.appendChild(isbnText)
       titleCell.appendChild(titleText);
       overdueCell.appendChild(overdueText)
       publishCell.appendChild(publishText);
       dateCell.appendChild(dateText)


    }
</script>

<div class="container">
<div class="row justify-content-between" style="padding-top: 10px; margin-bottom: 20px">
    <h2>Books in out collection</h2>
    <div class="spinner-grow" role="status" id="loadingTop">
        <span class="sr-only">Loading...</span>
    </div>
    <a href="addbook" class="btn btn-outline-success">Add Book</a>
</div>

    <table class="table" id="book-table">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">ISBN</th>
        <th scope="col">Book Title</th>
        <th scope="col">Overdue</th>
        <th scope="col">Publisher</th>
        <th scope="col">Date Published</th>
    </tr>
    </thead>
    <tbody>
    <tr>

    </tr>

    </tbody>
</table>
</div>
