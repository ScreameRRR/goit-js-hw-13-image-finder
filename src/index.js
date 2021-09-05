import apiService from "./js/apiService";
import { refs } from "./js/refs";
import imageMarkup from "./templates/imageMarkup.hbs";
import { onSearch } from "./js/searchImage";
import { onLoadMore } from "./js/loadMore";

export const newApiService = new apiService();
export const appendMarkup = (image) => {
  refs.gallery.insertAdjacentHTML("beforeend",imageMarkup(image))
}

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", onLoadMore);