import { TGetUserListAPIResponse, TUserList } from './types';

export async function getUserList(page: number = 1): Promise<TUserList[]> {
    const url = new URL('https://reqres.in/api/users');

    url.searchParams.append('page', page.toString());

    const response = await fetch(url);
    const responseData: TGetUserListAPIResponse = await response.json();

    let data = [...responseData.data];

    if (page < responseData.total_pages) {
        const otherUsers = await getUserList(page + 1);

        data = [
            ...data,
            ...otherUsers,
        ];
    }

    return data;
}
