import { appendMarkup, newApiService } from "../index";
import { refs } from "./refs";

const smoothScrolling = () => {
  refs.loadMoreBtn.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  })
}

export const  onLoadMore = (e) => {
  newApiService.fetchImage().then(appendMarkup).then( e => 
    smoothScrolling()
  );
};
