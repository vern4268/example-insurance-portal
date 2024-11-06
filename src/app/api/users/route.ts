import { getUserList } from './getUserList';
import { FilterUserNames } from '@/app/utils/helpers';

export async function GET() {
    const data = await getUserList();

    const filteredUsers = FilterUserNames({
        names: data,
        firstNameStartWith: 'G',
        lastNameStartsWith: 'W',
    });

    const maskedUsers = filteredUsers.map(user => {
        return {
            ...user,
            email: Array(user.email.length).fill('*').join(''),
        };
    });

    return Response.json(maskedUsers);
}
