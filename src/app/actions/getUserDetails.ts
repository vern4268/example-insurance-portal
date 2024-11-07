'use server';
import { TUserList } from '@/app/lib/redux/slices/types';
import { auth } from '../auth';

export async function getUserDetails(userId: number) {
    const session = await auth();

    if (!session) {
        return;
    }

    const url = new URL(`https://reqres.in/api/users/${userId}`);

    const response = await fetch(url);

    const { data }: { data: TUserList } = await response.json();

    return data;
}
