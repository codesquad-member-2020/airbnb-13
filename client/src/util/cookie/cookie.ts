export const setCookie = (key: string, value: string, days: number) => {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = key + '=' + (value || '') + expires + '; path=/';
};

const getCookie = (key: string) => {
  let result: null | string = null;
  const cookies = document.cookie.split(';');
  cookies.some(function(item) {
    item = item.replace(' ', '');
    const cookieItems = item.split('=');
    if (key === cookieItems[0]) {
      result = cookieItems[1];
      return true;
    }
  });
  return result;
};

export const deleteCookie = (key: string) => {
  document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export const isLogin = (key: string) => {
  return getCookie(key) === null ? false : true;
};

export const login = () => {
  if (process.env.NODE_ENV === 'development') {
    setCookie(
      'jwt',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOm51bGx9.KsyqtOdi-TIZyIyb_N3fWFiQOboiBlVLPIG5BGDauKE',
      1
    );
    window.location.href = 'http://localhost:3000/';
  } else {
    window.location.href = process.env.LOGIN_API!;
  }
};

export const logout = () => {
  deleteCookie('jwt');
  location.reload();
};
