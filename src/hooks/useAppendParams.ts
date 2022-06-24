import { useLocation, useNavigate } from 'react-router-dom';

export const useAppendParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const appendParams = (
    key: string,
    text: string | number,
    cleanup: string[] = []
  ) => {
    const params = new URLSearchParams(location.search);
    const value = text !== '' ? text : '';

    if (params.has(key)) {
      params.set(key, value.toString());
    } else {
      params.append(key, value.toString());
    }

    // Remove key if no value is present
    if (value === '' || value == 0) {
      params.delete(key);
    }

    // Provided keys to perform cleanup
    if (cleanup.length > 0) {
      cleanup.forEach((item) => params.delete(item));
    }

    navigate({
      search: params.toString(),
    });
  };

  return { appendParams };
};
