document.getElementById("new-blog-form").addEventListener("submit", function(event) {
    event.preventDefault(); // يمنع إعادة تحميل الصفحة عند النقر على زر النشر

    var title = document.getElementById("blog-title").value;
    var content = document.getElementById("blog-content").value;

    var blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    blogPost.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p>";

    document.getElementById("blog-posts").appendChild(blogPost);

    document.getElementById("blog-title").value = "";
    document.getElementById("blog-content").value = "";
});