export type imgType = {data: {attributes: {url: string}}}

export type achievementType = {
  id: number,
  text: string
}


export type cardType = {
  attributes: {
    title: string,
    text: string, 
    img: imgType,
    linkTo: string,
    location: 'landingTop' | 'landingBottom' | 'about'
    achievement: achievementType[]
  }
}


export type offerType = {
  attributes : {
    id: number,
    title: string,
    type: string,
    location: string
    activeUntil: string
  }
}
