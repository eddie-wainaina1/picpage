export interface PictureInterface {
    albumId: string | number 
    id: number 
    url: string 
    thumbnailUrl: string 
    title: string 
}
export interface PictureProps {
    pic:PictureInterface
}
export interface StateInterface {
    selectedId: number | null
    data: PictureInterface[] | []
}

export interface ListProps {
    data: PictureProps[]
}
