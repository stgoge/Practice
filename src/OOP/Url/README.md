Реализуйте и экспортируйте по умолчанию класс для работы с HTTP-адресом. Класс должен содержать конструктор и методы:

- конструктор — принимает на вход HTTP-адрес в виде строки
- getScheme() — возвращает протокол передачи данных (без двоеточия)
- getHostName() — возвращает имя хоста
- getQueryParams() — возвращает параметры запроса в виде пар ключ-значение объекта
- getQueryParam() — получает значение параметра запроса по имени. Если параметр с переданным именем не существует, метод возвращает значение заданное вторым параметром (по умолчанию равно null)
- equals(url) — принимает объект класса Url и возвращает результат сравнения с текущим объектом — true или false

```javascript
const url = new Url("http://yandex.ru:80?key=value&key2=value2");
url.getScheme(); // 'http'
url.getHostName(); // 'yandex.ru'
url.getQueryParams();
// {
// key: 'value',
// key2: 'value2',
// };
url.getQueryParam("key"); // 'value'
// второй параметр - значение по умолчанию
url.getQueryParam("key2", "lala"); // 'value2'
url.getQueryParam("new", "ehu"); // 'ehu'
url.getQueryParam("new"); // null
url.equals(new Url("http://yandex.ru:80?key=value&key2=value2")); // true
url.equals(new Url("http://yandex.ru:80?key=value")); // false
```
