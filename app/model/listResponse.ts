class PaginationData{
    pageNum:number;
    pageSize: string;
    count: string;
}

export interface IListResponse<T> {
    paginationData: PaginationData;
    results: Array<T>;
}

export class ListResponse<T> implements IListResponse<T> {
    public paginationData: PaginationData;
    public results: Array<T>;
}
