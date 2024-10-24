export class Video{
    videoDuration(): number{
        return 77
    }
}


declare module '../lib/registry'{
    export interface DataTypeRegistry{
        video: Video
    }
}