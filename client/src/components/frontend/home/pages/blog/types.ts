export interface DataType {
    photo: { data: { data: string; }; };
    created: string;
    _id: string;
    title: string,
    description: string;
}

export interface InitialStateType {
    blogData: object[];
}