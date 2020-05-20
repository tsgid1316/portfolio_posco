new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  anchors: ["page_1", "page_2", "page_3", "page_4"],
  menu: "#nav",
  lazyLoad: true,
});

fullpage_api.setAllowScrolling(true);
