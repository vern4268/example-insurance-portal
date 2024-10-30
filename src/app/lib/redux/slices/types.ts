export type TUserSliceInitialState = {
    userList: TUserList[];
    error: string;
}

export type TUserList = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export type TGetUserListAPIResponse = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: TUserList[];
    support: {
        url: string;
        text: string;
    };
}
