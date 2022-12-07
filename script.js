$(document).ready(function () {
  $("#verbs").DataTable({
    ajax: "data.json",
    columns: [
      { data: "base" },
      { data: "past_simple" },
      { data: "past_participle" },
    ],
    aLengthMenu: [
      [25, 50, 100, 200, -1],
      [25, 50, 100, 200, "All"],
    ],
    iDisplayLength: -1,
    paging: false,
  });
});
