class PageInfo {
  constructor(currentPage, list, amountOfElements, amountOfPages) {
    this.currentPage = currentPage;
    this.list = list;
    this.amountOfElements = amountOfElements;
    this.amountOfPages = amountOfPages;
  }
}

export default PageInfo;