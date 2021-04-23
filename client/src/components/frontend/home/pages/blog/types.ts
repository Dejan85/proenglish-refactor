export interface DataType {
    photo: { data: { data: string; }; };
    created: string;
    _id: string;
    title: string,
    description: string;
    body: string;
    postedBy: string;
}

export interface InitialStateType {
    blogData: object[];
    oneBlogData: any;
}