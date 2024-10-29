import { TUserList } from '../lib/redux/slices/types';

export const FilterUserNames = ({
    names,
    firstNameStartWith,
    lastNameStartsWith,
}: {
    names: TUserList[];
    firstNameStartWith: string;
    lastNameStartsWith: string;
}): TUserList[] => {
    const filteredNames = names.map(name => {
        const firstName = name.first_name;
        const lastName = name.last_name;

        if (firstName.startsWith(firstNameStartWith) || lastName.startsWith(lastNameStartsWith)) {
            return name;
        }
    });

    return filteredNames.filter(item => item !== undefined);
};
