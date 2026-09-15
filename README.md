# PRANA — сайт центра йоги

Исправленная версия проекта.

## Важно
`package.json` теперь находится в корне проекта. После распаковки не нужно заходить во вложенную папку `prana-site`.

## Запуск

```bash
cd prana-site-redesign
npm install
npm run dev
```

После запуска откройте http://localhost:3000

## Production

```bash
npm install
npm run build
npm run start
```

## Что исправлено

- исправлена структура ZIP: `package.json` находится в корне;
- добавлена корректная ESLint-конфигурация;
- закреплены версии зависимостей;
- обновлён Next.js до актуальной стабильной ветки 16.3.x;
- `Header` и `Schedule` уже помечены как Client Components, поэтому `useState` работает корректно.

### Установка на Linux/Kali

Если после предыдущей попытки установки npm показывает `ENOTEMPTY` / ошибку переименования внутри `node_modules`, не запускайте повторно `npm install` поверх поврежденной папки. В корне проекта выполните:

```bash
chmod +x install.sh
./install.sh
```

Скрипт удаляет только локальные `node_modules`, `.next` и незавершённый `package-lock.json`, затем устанавливает зависимости заново.
