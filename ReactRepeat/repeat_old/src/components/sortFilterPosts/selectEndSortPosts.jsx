import { useMemo } from "react"

function FilterPosts(posts, inputValue){
    const sortMassive = useMemo(() => {
        if(inputValue){
          return [...posts].filter(el => el.title.toLowerCase().includes(inputValue))
        }
        else{
          return posts
        }
      }, [inputValue, posts])

      return sortMassive
}

export function SortedSelectedPosts(inputValue, sortValue, posts) {
    const sortedMassive = FilterPosts(posts, inputValue);
    const sortedSelectedMassive = useMemo(() => {
        if(sortValue){
            return sortedMassive.sort((a, b) => a[sortValue].localeCompare(b[sortValue]))
          }
          else{
            return sortedMassive;
          }
    }, [sortedMassive, sortValue])

    return sortedSelectedMassive;
}
