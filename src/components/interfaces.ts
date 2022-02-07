export interface PictureProps {
    albumId: string | number 
    id: number 
    url: string 
    thumbnailUrl: string 
    title: string 
}
export interface stateInterface {
    selectedId: number | null
    data: PictureProps[] | []
}

export interface ListProps {
    data: PictureProps[]
}
