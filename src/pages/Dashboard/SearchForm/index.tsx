
import { useForm } from 'react-hook-form';
import { SearchFormContainer } from './styles';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { UsersContext } from '../../../contexts/users';
import { FaMagnifyingGlass } from 'react-icons/fa6';


const searchFormSchema = z.object({
  query: z.string(),
});
type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchUsers } = useContext(UsersContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(data);
    await fetchUsers(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <FaMagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}