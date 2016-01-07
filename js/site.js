$(document).ready(function() {
  $("[data-pagination]").on("click", function(event) {
    event.preventDefault();

    var targetId = $(event.target).attr("href");

    $("[data-toggle='tab'][href='" + targetId + "']").tab("show");
    $("body").scrollTop(0);
  })
});
