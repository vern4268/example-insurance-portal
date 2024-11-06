'use server';
import { TUserList } from '@/app/lib/redux/slices/types';

export async function getUserDetails(userId: number) {
    const url = new URL(`https://reqres.in/api/users/${userId}`);

    const response = await fetch(url);

    const { data }: { data: TUserList } = await response.json();

    return data;
}
