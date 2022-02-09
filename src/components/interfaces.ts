export interface PictureProps {
    albumId: string | number 
    id: number 
    url: string 
    thumbnailUrl: string 
    title: string 
}
export interface StateInterface {
    selectedId: number | null
    data: PictureProps[] | []
}

export interface ListProps {
    data: PictureProps[]
}
