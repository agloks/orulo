import HandleStorage from "./handleStorage"

const isFavorited = (id) => {
  const favoriteds = HandleStorage.getStorage()["favorites"]

  if(!favoriteds)
    return false

  const result = favoriteds.filter((favorite) => favorite.id === id)
  console.log(result.length > 0)

  return result.length > 0
}

export {isFavorited}