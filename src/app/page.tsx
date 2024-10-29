import { redirect } from 'next/navigation';
import { auth } from './auth';

const AppRoot = async () => {
    const session = await auth();

    if (session) {
        return redirect('/users');
    }

    redirect('/signin');
};

export default AppRoot;
