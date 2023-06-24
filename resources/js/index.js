document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
      var cells = document.getElementsByClassName("col-auto");
      var cellCount = cells.length;

      // remove previous highlights
      for (var i = 0; i < cellCount; i++) {
        cells[i].classList.remove("highlight");
      }

      // select 2 or 3 random cells to highlight
      var cellsToHighlight = Math.floor(Math.random() * 2) + 2; // will return either 2 or 3

      for (var j = 0; j < cellsToHighlight; j++) {
        var randomCellIndex;

        do {
          randomCellIndex = Math.floor(Math.random() * cellCount);
        } while (cells[randomCellIndex].classList.contains("highlight")); // ensure we don't highlight the same cell twice

        cells[randomCellIndex].classList.add("highlight");
      }
    }, 2000);
  });
