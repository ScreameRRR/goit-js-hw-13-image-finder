import { enterName, noMatches } from "./pnotify";
import { refs } from "./refs";
import { appendMarkup, newApiService } from "../index";

const clearImageContainer = () => {
    refs.gallery.innerHTML = "";
  }
    
  export const onSearch = (e) => {
    e.preventDefault();
    newApiService.query = e.currentTarget.elements.query.value.trim();
    if(newApiService.query === ""){
      return enterName();
    }
    newApiService.resetPage();
    newApiService.fetchImage().then(data => {
      if(data.length === 0) {
        return noMatches()
      } else {
        clearImageContainer();
        refs.loadMoreBtn.disabled = false;
        return appendMarkup(data);
      } 
    } 
    );
  }