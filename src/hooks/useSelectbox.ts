import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { selectByCategories, selectBySubCategories } from '../atoms';

type Category = {
  name: string;
  value: string;
};
const filterCategory = (categories: Category[], key: string) => categories.filter((item) => item.value !== key);

const useSelectBox = () => {
  const [categories, setCateories] = useRecoilState(selectByCategories);
  const [subCategories, setSubCategoires] = useRecoilState(selectBySubCategories);

  // 함수 정의
  const handler = useCallback(
    (e: { target: { value: string; name: string } }) => {
      const { value, name } = e.target;
      setSubCategoires(filterCategory(categories, value));
    },
    [subCategories]
  );

  return { categories, subCategories, handler };
};

export default useSelectBox;
