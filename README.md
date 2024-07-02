# React Netflix Clone

## 概要

NetFlixのレイアウトを模倣したサイト

<img src="https://github.com/PenPeen/react_netflix_clone/blob/image/public/App.png?raw=true" alt="App" width="600"/>

### 基本機能

- バナー映画の表示
- カテゴリ別の映画の一覧表示
- Youtubeトレイラーの表示

## Used

### FrontEnd

- TypeScript
- React
- Tailwind CSS

### Data

- TMDB

## Components

<details>
<summary>Banner</summary>

画面上部に表示される映画
TMDBから取得したNETFLIX ORIGUINALSの映画のうち、ランダムに1つの映画を表示する

<img src="https://github.com/PenPeen/react_netflix_clone/blob/image/public/Banner.png?raw=true" alt="AddScheduleDialog" width="600"/>

</details>

<details>
<summary>Header</summary>

画面上部のヘッダー
スクロールすると表示される

<img src="https://github.com/PenPeen/react_netflix_clone/blob/image/public/Header.png?raw=true" alt="CalendarBoard" width="600"/>

</details>

<details>
<summary>Row</summary>

カテゴリ別の映画を一覧表示する

<img src="https://github.com/PenPeen/react_netflix_clone/blob/image/public/Row.png?raw=true" alt="CalendarElement" width="600"/>

</details>

## Build Tools

`Vite` を使用

## ディレクトリ構成

ディレクトリ構成は [bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) に準拠する形とする

- 小規模アプリケーションのため、`AtomicDesign` は採用していない。
- コンポーネントごとに`Presentational Component`, `Container Component`を作成している
- コンポーネント毎にディレクトリを作成し、`index.tsx`, `styles.ts` を定義している
